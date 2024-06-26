"use client";
import React, { useState, useContext } from "react";
import style from "./Login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Context } from "@/Context/Context";
import Swal from "sweetalert2";

export default function Login({setValue}) {
  const context = useContext(Context);

  const [typePassword, setTypePassword] = useState("password");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [reMemberMe, setReMemberMe] = useState(false);

  const changeType = () => {
    if (typePassword == "text") {
      setTypePassword("password");
    } else {
      setTypePassword("text");
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      Swal.fire({
        title: "نام کاربری خود را وارد کنید",
        icon: "warning",
        confirmButtonText: "باشه",
      });
    } else if (!password.trim()) {
      Swal.fire({
        title: "رمز عبور  خود را وارد کنید",
        icon: "warning",
        confirmButtonText: "باشه",
      });
    }
    fetch(`${context.api}/Account/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          title: "با موفقیت وارد اکانت خود شدید",
          icon: "success",
          confirmButtonText: "باشه",
        });
      }
      else if(res.status === 403){
        Swal.fire({
          title: "نام کاربری یا رمز عبور اشتباه است",
          icon: "error",
          confirmButtonText: "باشه",
        });
      }
      else if(res.status === 500){
        Swal.fire({
          title: "خطای سرور",
          icon: "error",
          confirmButtonText: "باشه",
        });
      }
    });
  };
  return (
    <>
      <form className={style.parent}>
        <h6 className={style.title}>ورود به حساب کاربری</h6>

        <div className="input-form-parent w-100">
          <input
            type="text"
            id="userName-input"
            className="input-form"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="userName-input">
            نام کاربری
          </label>
        </div>
        {typePassword == "text" ? (
          <FaEyeSlash
            onClick={() => changeType()}
            className={style.eyes_icon}
          />
        ) : (
          <FaEye onClick={() => changeType()} className={style.eyes_icon} />
        )}
        <div className={`input-form-parent ${style.password_input_parent}`}>
          <input
            type={typePassword}
            id="password-input"
            className="input-form"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="password-input">
            رمز عبور
          </label>
        </div>

        <div className="mt-3">
          <label className={style.container}>
            <input
              type="checkbox"
              onChange={(e) => setReMemberMe(e.target.value)}
            />
            <svg viewBox="0 0 64 64" height="2em" width="2em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                className={style.path}
              ></path>
            </svg>
            <span className={style.allowMe_span}>من را به خاطر بسپار</span>
          </label>
        </div>

        <button
          className={"btn btn-outline-success mt-3 m-auto d-flex"}
          onClick={(e) => loginHandler(e)}
        >
          ورود به حساب کاربری
        </button>
        <br />
        <span className={style.link_span}>
          آیا رمز عبور خود را فراموش کردید؟
        </span>
        <br />
        <span className={style.link_span}>
          آیا نام کاربری خود را فراموش کردید؟
        </span>
        <br />
        <span className={style.link_span} onClick={()=> setValue("register")}>ثبت نام</span>
        <br />
      </form>
    </>
  );
}
