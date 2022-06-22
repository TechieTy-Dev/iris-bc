import Widgets from "../components/Widgets";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTweets from "../components/profile/ProfileTweets";

const style = {
  warpper:
    "flex justify-center h-screen w-screen select-none bg-[#15202b] text-white",
  content: "max-w-[1400px] w-2/3 flex justify-between",
  mainContent: "flex-[2] border-r border-l border-[#38444d] overflow-y-scroll",
};

const profile = () => {
  return (
    <div className={style.warpper}>
      <div className={style.content}>
        <Sidebar initalSelectedIcon={"Profile"} />
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default profile;
