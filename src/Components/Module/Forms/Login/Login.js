"use client";
import React, { useState, useContext } from "react";
import style from "./Login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Context } from "@/Context/Context";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login({ setValue }) {
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
      toast.error("نام کاربری خود را وارد کنید", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!password.trim()) {
      toast.error("رمز عبور خود را وارد کنید", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    fetch(`${context.api}/Account/signin`, {
      method: "POST",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vc3RhZmEiLCJFbWFpbCI6Im11c3RhZmFtb21lbmkxMzU5QGdtYWlsLmNvbSIsIm5iZiI6MTcxOTc2OTc1MCwiZXhwIjoxNzE5ODU2MTUwLCJpYXQiOjE3MTk3Njk3NTAsImlzcyI6IllvdXJJc3N1ZXIiLCJhdWQiOiJZb3VyQXVkaWVuY2UifQ.MkzeB3iQw0ltekMztREq3yU3_-QI_B-t4cUIrqrBB1o"
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "با موفقیت وارد اکانت خود شدید",
          icon: "success",
          confirmButtonText: "باشه",
        });
        context.isLogin = true;
        // document.cookie =
        //   "jwt =" +
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vc3RhZmEiLCJFbWFpbCI6Im11c3RhZmFtb21lbmkxMzU5QGdtYWlsLmNvbSIsIm5iZiI6MTcxOTg1OTUwNCwiZXhwIjoxNzE5OTQ1OTA0LCJpYXQiOjE3MTk4NTk1MDQsImlzcyI6IllvdXJJc3N1ZXIiLCJhdWQiOiJZb3VyQXVkaWVuY2UifQ.LvDa8gn4q2yeNZTlveYLc0BnPNUTSIhW5VK7DdtopQw" +
        //   "2025-06-28T06:12:18.411Z" +
        //   "; path=/";
      } else if (res.status === 404) {
        toast.error("نام کاربری یا رمز عبور اشتباه است", {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (res.status === 500) {
        toast.error("مشکلی در سمت سرور به وجود آمده", {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
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
        <span className={style.link_span}  onClick={() => setValue("forgetPassword")}>
          آیا رمز عبور خود را فراموش کردید؟
        </span>
        <br />
        <span className={style.link_span}>
          آیا نام کاربری خود را فراموش کردید؟
        </span>
        <br />
        <span className={style.link_span} onClick={() => setValue("register")}>
          ثبت نام
        </span>
        <br />
      </form>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
