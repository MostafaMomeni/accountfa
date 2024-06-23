import React from "react";
import style from "./Header.module.css";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import InstagramKitBox from "../InstagramKitBox/InstagramKitBox";

export default function Header() {
  return (
    <>
      <div className={style.parent}>
        <div className={style.items_parent}>
        <div className={style.right}>
          <Link href={"/"} className={style.logo}>
            <Image
              src={"/Assets/logo.png"}
              width={180}
              height={30}
              className={style.logo_image}
            />
          </Link>
          {/* <div className={style.dropDown_right_parent}>
            <div className={style.dropDown_right}>
              <FaInstagram className={style.instagram_icon} />
              کیت رابط کاربری اینستاگرام
              <IoIosArrowDown />
            </div>
            <ul className={style.ul_dropDown}>
              <li>
                <InstagramKitBox />
              </li>
              <li>
                <InstagramKitBox />
              </li>
              <li>
                <InstagramKitBox />
              </li>
            </ul>
          </div> */}
        </div>
        <div className={style.left}>
          <div>
            <input
              id="checkboxInput"
              className={style.checkboxInput}
              type="checkbox"
            />
            <label className={style.toggleSwitch} for="checkboxInput"></label>
          </div>
          <div className={style.login_parent}>
            <span>ورود کاربران</span>
            <Image src={"/Assets/user-profile.png"} width={30} height={30}/>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
