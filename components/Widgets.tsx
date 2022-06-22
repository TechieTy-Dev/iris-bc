import { news, whoToFollow } from "../lib/static";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

const style = {
  wrapper: "flex-[1] p-2 ml-2",
  searchBar: "flex items-center bg-[#243340] p-2 rounded-3xl",
  searchIcon: "text-[#8899a6] mr-2",
  inputBox: "bg-transparent outline-none",
  section: "bg-[#192734] my-6 rounded-xl overflow-hidden",
  title: "p-2 font-bold text-lg",
  showMore: "p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]",
  item: "flex items-center p-1 my-2 hover:bg-[#22303c] cursor-pointer",
  newsItemLeft: "flex-1",
  newsItemCategory: "ml-1 text-[#8899a6] text-xs font-semibold",
  newsItemTitle: "ml-1 text-sm font-bold",
  newsItemRight: "w-1/4 ml-3",
  newsItemImage: "rounded-xl h-14 w-14 object-cover",
  followAvatarContainer: "w-12 h-12 ml-3",
  followAvatar: "rounded-full h-12 w-12",
  profileDetails: "flex-1",
  name: "font-bold",
  handle: "text-[#8899a6]",
  followButton: "bg-[#047c84] text-white hover:bg-[#449e95] px-2 py-1 rounded-full text-xs font-bold m-3",
};

function Widgets() {
  return (
    <div className={style.wrapper}>
      <div className={style.searchBar}>
        <BiSearch className={style.searchIcon} />
        <input
          placeholder="Search Twitter"
          type="text"
          className={style.inputBox}
        />
      </div>

      {/* Top Widget Card */}

      <div className={style.section}>
        <div className={style.title}>Whats happening</div>
        {news.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.newsItemLeft}>
              <div className={style.newsItemCategory}>{item.category}</div>
              <div className={style.newsItemTitle}>{item.title}</div>
            </div>
            <div className={style.newsItemRight}>
              <Image
                src={item.image}
                alt={item.category}
                width={40}
                height={40}
                className={style.newsItemImage}
              />
            </div>
          </div>
        ))}
        <div className={style.showMore}>Show more</div>
      </div>

      {/* Who to Follow Card */}
      
      <div className={style.section}>
        <div className={style.title}>Who to follow</div>
        {whoToFollow.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.followAvatarContainer}>
              <Image
                src={item.avatar}
                alt={item.handle}
                width={40}
                height={40}
                className={style.followAvatar}
              />
            </div>

            {/* Buttons */}

            <div className={style.profileDetails}>
              <div className={style.name}>{item.name}</div>
              <div className={style.handle}>{item.handle}</div>
            </div>
            <div className={style.followButton}>Follow</div>
          </div>
        ))}
        <div className={style.showMore}>Show more</div>
      </div>
    </div>
  );
}

export default Widgets;
