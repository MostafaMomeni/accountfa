"use client";
import React, { useEffect, useState , useContext } from "react";
import style from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { PiWarningCircleLight } from "react-icons/pi";
import Login from "@/Components/Module/Forms/Login/Login";
import Register from "@/Components/Module/Forms/Register/Register";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PhoneMenu from "../PhoneMenu/PhoneMenu";
import { Context } from "@/Context/Context";
import PersonMenu from "../PersonMenu/PersonMenu";
import ForgetPassword from "@/Components/Module/Forms/ForgetPassword/ForgetPassword";

export default function Header() {
  const context = useContext(Context)

  const [width, setWidth] = useState(1000);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowPersonMenu, setIsShowPersonMenu] = useState(false);

  const [modalValue, setModalValue] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    setWidth(window.innerWidth);
    const reSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", reSize);
  }, []);

  useEffect(()=>{
    // fetch(`${context.api}/Account/get_info`)
    // .then(res => console.log(res))
    if(document.cookie.split("=")[0] === "Authorization"){
      context.isLogin = true
    }else{
      context.isLogin = false
    }
  },[])

  useEffect(() => {
    if (isShowModal) {
      MySwal.fire({
        title: "ورود کاربران",
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          title: style.modal_title,
          popup: "modal-body",
        },
        html: (
          <div>
            <p className="text-color" style={{ fontSize: "16px" }}>
              <PiWarningCircleLight className={"modal-icon"} />
              تمامی خدمات این سایت نیاز به ورود به حساب کاربری می‌باشد.
            </p>
            <p className="text-color" style={{ fontSize: "16px" }}>
              <PiWarningCircleLight className={"modal-icon"} />
              در صورت نداشتن حساب کاربری از منوی ثبت نام اقدام به فعالسازی حساب
              خود نمائید.
            </p>
            <p className="text-color" style={{ fontSize: "16px" }}>
              <PiWarningCircleLight className={"modal-icon"} />
              همکاران موبایل فروش و همکاران خدمات فنی کامپیوتر می‌توانند با
              ارسال عکس کارت ویزیت و جواز کسب فروشگاه به رایگان پنل طلایی دریافت
              کنند.
            </p>
            {modalValue === "login" && <Login setValue={setModalValue} />}
            {modalValue === "register" && <Register setValue={setModalValue} />}
            {modalValue === "forgetPassword" && <ForgetPassword setValue={setModalValue} />}
          </div>
        ),
      }).then((res) => {
        if (res.dismiss) {
          setIsShowModal(false);
          setModalValue("");
        }
      });
    }
  }, [modalValue]);

  return (
    <>
      <div className={style.parent}>
        <div className={style.items_parent}>
          <div className={style.right}>
            <Link href={"/"} className={style.logo}>
              <Image
                src={width > 650 ? "/Assets/dark-logo.png" : "/Assets/logoMb.png"}
                width={250}
                height={50}
                quality={100}
                alt="logo"
                className={style.logo_image}
              />
            </Link>
            {width < 767 && (
              <>
                <div className="me-3">
                  <input
                    type="checkbox"
                    className={style.checkbox}
                    id="checkbox"
                    checked={isShowMenu}
                    onChange={() => setIsShowMenu(!isShowMenu)}
                  />
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
            <div
              className={style.login_parent}
              onClick={() => {
                context.isLogin ? (
                  <>
                 {setIsShowPersonMenu(!isShowPersonMenu)}
                 {setIsShowMenu(false)}
                  </>
                ) : (
                  <>
                  {setModalValue("login")}
                  {setIsShowModal(true)}
                  </>
                )
              }}
            >
              <span className={style.login_btn_text}>{context.isLogin ? "نام کاربر" : "ورود کاربر"}</span>
              <Image
                src={"/Assets/user-profile.png"}
                width={30}
                height={30}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
      {width < 650 && isShowMenu && <PhoneMenu closeMenu={setIsShowMenu} />}
      {context.isLogin && isShowPersonMenu && <PersonMenu closeMenu={setIsShowPersonMenu} />}
    </>
  );
}
