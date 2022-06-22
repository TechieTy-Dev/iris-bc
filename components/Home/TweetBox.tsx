import { useState, useContext } from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine, RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { TwitterContext } from "../../context/TwitterContext";
import { client } from "../../lib/client";

const style = {
  wrapper: "px-4 flex flex-row border-b border-[#38444d] pb-4",
  tweetBoxLeft: "mr-4",
  tweetBoxRight: "flex-1",
  profileImage: "h-12 w-12 rounded-full",
  inputField: "w-full h-full outline-none bg-transparent text-lg",
  formLowerContainer: "flex",
  iconsContainer: "text-[#1d9bf0] flex flex-1 items-center",
  icon: "mr-2",
  submitGeneral: "px-6 py-2 rounded-3xl font-bold",
  inactiveSubmit: "bg-[#196195] text-[#95999e]",
  activeSubmit: "bg-[#1d9bf0] text-white",
};
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const { currentAccount, fetchTweets, currentUser } =
    useContext(TwitterContext);

  const submitTweet = async (event: any) => {
    event.preventDefault();
    console.log(tweetMessage);

    if (!tweetMessage) return;
    const tweetId = `${currentAccount}_${Date.now()}`;

    const tweetDoc = {
      _type: "tweets",
      _id: tweetId,
      tweet: tweetMessage,
      timestamp: new Date(Date.now()).toISOString(),
      author: {
        _key: tweetId,
        _ref: currentAccount,
        _type: "reference",
      },
    };

    await client.createIfNotExists(tweetDoc);

    await client
      .patch(currentAccount)
      .setIfMissing({ tweets: [] })
      .insert("after", "tweets[-1]", [
        {
          _key: tweetId,
          _ref: tweetId,
          _type: "reference",
        },
      ])
      .commit();

    await fetchTweets;
    setTweetMessage("");
  };
  return (
    <div className={style.wrapper}>

      {/* Profile Image in TweetBox */}

      <div className={style.tweetBoxLeft}>
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
          height={40}
          alt="profile image"
          className={
            currentUser.isProfileNft
              ? `${style.profileImage} smallHex`
              : style.profileImage
          }
        />
      </div>

      {/* Input Box */}

      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            className={style.inputField}
            placeholder="What's on your mind?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}>
              <BsCardImage className={style.icon} />
              <RiFileGifLine className={style.icon} />
              <RiBarChartHorizontalFill className={style.icon} />
              <BsEmojiSmile className={style.icon} />
              <IoMdCalendar className={style.icon} />
              <MdOutlineLocationOn className={style.icon} />
            </div>

            {/* Post Button */}
            
            <button
              type="submit"
              onClick={(event) => submitTweet(event)}
              className={`${style.submitGeneral} ${
                tweetMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
