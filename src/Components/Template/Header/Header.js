"use client";
import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { PiWarningCircleLight } from "react-icons/pi";
import Login from "@/Components/Module/Forms/Login/Login";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PhoneMenu from "../PhoneMenu/PhoneMenu";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const reSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", reSize);
  }, []);

  return (
    <>
      <div className={style.parent}>
        <div className={style.items_parent}>
          <div className={style.right}>
            <Link href={"/"} className={style.logo}>
              <Image
                src={width > 650 ? "/Assets/logo.png" : "/Assets/logoMb.png"}
                width={180}
                height={30}
                className={style.logo_image}
              />
            </Link>
            {width < 767 && (
              <>
              <div className="me-3">
                <input type="checkbox" className={style.checkbox} id="checkbox" value={isShowMenu}
                onChange={()=> setIsShowMenu(!isShowMenu)} />
                <label for="checkbox" className={style.toggle}>
                  <div className={`${style.bars} ${style.bar1}`}></div>
                  <div className={`${style.bars} ${style.bar2}`}></div>
                  <div className={`${style.bars} ${style.bar3}`}></div>
                </label>
              </div>
              </>
            )}
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
            <div
              className={style.login_parent}
              onClick={() =>
                MySwal.fire({
                  title: "ورود کاربران",
                  showCloseButton: true,
                  showConfirmButton: false,
                  customClass: {
                    title: "modal-title",
                    popup: "modal-body",
                  },
                  html: (
                    <div className="p-4">
                      <p className="text-color">
                        <PiWarningCircleLight className={"modal-icon"} />
                        تمامی خدمات این سایت نیاز به ورود به حساب کاربری
                        می‌باشد.
                      </p>
                      <p className="text-color">
                        <PiWarningCircleLight className={"modal-icon"} />
                        در صورت نداشتن حساب کاربری از منوی ثبت نام اقدام به
                        فعالسازی حساب خود نمائید.
                      </p>
                      <p className="text-color">
                        <PiWarningCircleLight className={"modal-icon"} />
                        همکاران موبایل فروش و همکاران خدمات فنی کامپیوتر
                        می‌توانند با ارسال عکس کارت ویزیت و جواز کسب فروشگاه به
                        رایگان پنل طلایی دریافت کنند.
                      </p>

                      <Login />
                    </div>
                  ),
                })
              }
            >
              <span>ورود کاربران</span>
              <Image src={"/Assets/user-profile.png"} width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
      {width < 650 && isShowMenu && (
        <PhoneMenu closeMenu={setIsShowMenu}/>
      )}
    </>
  );
}
