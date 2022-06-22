import React from "react";
import { GiAngelWings } from "react-icons/gi";

import SidebarOption from "./SidebarOption";
import { RiHome2Fill, RiHome2Line } from "react-icons/ri";
import { FaSearch, FaHashtag } from "react-icons/fa";
import { MdOutlineMessage, MdMessage } from "react-icons/md";
import { useState, useContext } from "react";
import { MdNotificationsNone, MdNotificationsActive } from "react-icons/md";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { BsList, BsListCheck } from "react-icons/bs";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { RiMoreLine, RiMoreFill } from "react-icons/ri";
import Router from "next/router";
import { FiMoreHorizontal } from "react-icons/fi";
import { TwitterContext } from "../context/TwitterContext";
import Modal from "react-modal";
import { useRouter } from "next/router";
import ProfileImageMinter from "./profile/mintingModal/ProfileImageMinter";
import { customStyles } from "../lib/constants";

const style = {
  wrapper: "flex-[1] px-.5 flex flex-col",
  iconContainer: "text-3xl m-3",
  tweetButton:
    "bg-[#047c84] text-white hover:bg-[#449e95] flex items-center justify-center font-bold rounded-3xl h-[50px] w-[300px] mt-[15px] cursor-pointer",
  navContainer: "flex-1",
  profileButton:
    "flex items-center mb-8 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-1",
  profileLeft: "flex item-center justify-center mr-4",
  profileImage: "h-12 w-13 rounded-full",
  profileRight: "flex-1 flex",
  details: "flex-1",
  name: "text-lg",
  handle: "text-[#8899a6]",
  moreContainer: "flex items-center mr-1",
};

interface SidebrProps {
  initalSelectedIcon: string;
}

function Sidebar({ initalSelectedIcon }: SidebrProps) {
  const [selected, setSelected] = useState < String > (initalSelectedIcon);
  const { currentAccount, currentUser } = useContext(TwitterContext);
  const router = useRouter();

  return (
    <div className={style.wrapper}>
      <div className={style.iconContainer}>
        <GiAngelWings />
      </div>
      <div className={style.navContainer}>
        <SidebarOption
          Icon={selected === "Home" ? RiHome2Fill : RiHome2Line}
          text="Home"
          isActive={Boolean(selected === "Home")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Search" ? FaSearch : FaHashtag}
          text="Search"
          isActive={Boolean(selected === "Search")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Messages" ? MdMessage : MdOutlineMessage}
          text="Messages"
          isActive={Boolean(selected === "Messages")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={
            selected === "Notifications"
              ? MdNotificationsActive
              : MdNotificationsNone
          }
          text="Notifications"
          isActive={Boolean(selected === "Notifications")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Bookmarks" ? BsBookmarkStarFill : BsBookmarkStar}
          text="Bookmarks"
          isActive={Boolean(selected === "Bookmarks")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Lists" ? BsListCheck : BsList}
          text="Lists"
          isActive={Boolean(selected === "Lists")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={Boolean(selected === "Profile")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "More" ? RiMoreFill : RiMoreLine}
          text="More"
          isActive={Boolean(selected === "More")}
          setSelected={setSelected}
          redirect={"/"}
        />
        {/* Mint Button */}
        <div
          onClick={() =>
            Router.push(`${router.pathname}/?mint=${currentAccount}`)
          }
          className={style.tweetButton}
        >
          Mint
        </div>
      </div>
 {/* Profile Image/Address at the bottom */}
      <div className={style.profileButton}>
        <div className={style.profileLeft}>
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
            alt="profile"
            className={
              currentUser.isProfileNft
                ? `${style.profileImage} smallHex`
                : style.profileImage
            }
          />
        </div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>Tom</div>
            <div className={style.handle}>
              @{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
            </div>
            <div className={style.moreContainer}>
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={Boolean(router.query.mint)}
        onRequestClose={() => router.back()}
        style={customStyles}
      >
        <ProfileImageMinter />
      </Modal>
    </div>
  );
}

export default Sidebar;
