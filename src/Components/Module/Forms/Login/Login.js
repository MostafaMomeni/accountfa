"use client";
import React, { useState } from "react";
import style from "./Login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Login() {
  const [typePassword, setTypePassword] = useState("password");

  const changeType = () => {
    if (typePassword == "text") {
      setTypePassword("password");
    } else {
      setTypePassword("text");
    }
  };

  return (
    <>
      <form className={style.parent}>
        <h6 className={style.title}>ورود به حساب کاربری</h6>

        <div className="input-form-parent w-100">
          <input
            type="text"
            id="userName-input"
            className="input-form "
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
            required
          />
          <label className="label-form" htmlFor="password-input">
            رمز عبور
          </label>
        </div>

        <div className="mt-3">
          <label className={style.container}>
            <input type="checkbox" />
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

        <button className={"btn btn-outline-success mt-3 m-auto d-flex"}>
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
        <span
          className={style.link_span}
        >
          ثبت نام
        </span>
        <br />
      </form>
    </>
  );
}
