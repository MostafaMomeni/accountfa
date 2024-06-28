import React, { useState, useContext } from "react";
import style from "./ForgetPassword.module.css";
import { PiWarningCircleLight } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "@/Context/Context";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function ForgetPassword({ setValue }) {
  const context = useContext(Context);

  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const [typePassword, setTypePassword] = useState("password");
  const [isSendCode, setIsSendCode] = useState(false);

  const changeType = () => {
    if (typePassword == "text") {
      setTypePassword("password");
    } else {
      setTypePassword("text");
    }
  };

  const validationCode = (e) => {
    e.preventDefault();


    if (code.trim().length < 6 || code.trim().length >= 7) {
      toast.error("کد باید 6 کاراکتر باشد", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }
    else if (password.trim().length < 7) {
      toast.error("رمز عبور باید حداقل 7 کاراکتر باشد", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }

    fetch(`${context.api}/Account/change-password`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            phoneNumber : phone,
            newPassword : password,
            verifyCode : code
        })
    })
    .then(res => {
        if(res.status === 200){
            toast.success("رمز عبور شما با موفقیت عوض شد", {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              setValue("login")
        }
        else if(res.status === 403){
            toast.error("کد وارد شده اشتباه است", {
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
        else if(res.status === 500){
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
    })
  };

  const validationPhone = (e) => {
    e.preventDefault();
    if (!phone.trim()) {
      toast.error("شماره موبایل خود را وارد کنید", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false;
    }

    fetch(`${context.api}/Account/forget-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phone,
      }),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("کد تایید به شماره شما ارسال شد", {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsSendCode(true);
      } else if (res.status === 404) {
        toast.error("شماره همراه شما معتبر نیست", {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error("مشکلی در ارسال کد بوجود آمد", {
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
        <h6 className={style.title}>فراموشی رمز عبور</h6>

        <p className="text-color mt-3" style={{ fontSize: "16px" }}>
          <PiWarningCircleLight className={"modal-icon"} />
          {isSendCode ? (
            <>کد به شماره {phone} ارسال شد.</>
          ) : (
            <>
              لطفا شماره موبایلی که با آن در سایت مرکز‌حساب ثبت نام کرده‌اید را
              وارد نمائید :
            </>
          )}
        </p>

        {isSendCode ? (
          <>
          <div className="input-form-parent w-75 d-block m-auto">
            <input
              type="text"
              id="phone-input"
              className="input-form"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <label className="label-form" htmlFor="phone-input">
              کد
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
            رمز عبور جدید
          </label>
        </div>
          </>
        ) : (
          <div className="input-form-parent w-50 d-block m-auto">
            <input
              type="text"
              id="phone-input"
              className="input-form"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label className="label-form" htmlFor="phone-input">
              شماره موبایل
            </label>
          </div>
        )}

        {isSendCode ? (
          <button
            className={"btn btn-outline-success mt-3 m-auto w-50 text-center"}
            onClick={(e) => validationCode(e)}
          >
            برسی کد
          </button>
        ) : (
          <button
            className={"btn btn-outline-success mt-3 m-auto w-50 text-center"}
            onClick={(e) => validationPhone(e)}
          >
            مرحله بعد
          </button>
        )}
        <br />
        {isSendCode && (
          <span
            className={style.link_span}
            onClick={() => setIsSendCode(false)}
          >
            ویرایش شماره
          </span>
        )}
        <span className={style.link_span} onClick={() => setValue("login")}>
          بازگشت
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
