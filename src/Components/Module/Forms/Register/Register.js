import React, { useContext, useState } from "react";
import style from "./Register.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Context } from "@/Context/Context";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";

export default function Register({ setValue }) {
  const context = useContext(Context);

  const [typePassword, setTypePassword] = useState("password");
  const [typeRepeatPassword, setTypeRepeatPassword] = useState("password");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState();
  const [landlinePhone, setLandlinePhone] = useState();

  const registerHandler = (e) => {
    e.preventDefault();
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !userName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !repeatPassword.trim() ||
      !birthday.trim() ||
      !phone.trim() ||
      !landlinePhone.trim()
    ) {
      toast.error("لطفا همه فیلد ها را پر کنید", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false
    }
    if(password !== repeatPassword){
      toast.error("تکرار رمز عبور با رمز عبور برار نیست", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return false
    }
    fetch(`${context.api}/Account/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username: userName,
        email,
        password,
        birthDay: "2024-06-26T21:21:11.088Z",
        phoneNumber: phone,
        staticPhoneNumber: landlinePhone,
      }),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "اکانت شما با موفقیت ساخته شد",
          icon: "success",
          confirmButtonText: "باشه",
        });
      } else if (res.status === 403) {
        toast.error("اطلاعات را به درستی وارد کنید", {
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
        <h6 className={style.title} onClick={() => setValue("login")}>
          ثبت نام
        </h6>

        <div className={`input-form-parent ${style.input}`}>
          <input
            type="text"
            id="first-name-input"
            className="input-form"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="first-name-input">
            نام
          </label>
        </div>
        <div className={`input-form-parent ${style.input}`}>
          <input
            type="text"
            id="last-name-input"
            className="input-form"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="last-name-input">
            نام خانوادگی
          </label>
        </div>
        <div className={`input-form-parent ${style.input}`}>
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
        <div className={`input-form-parent ${style.input}`}>
          <input
            type="email"
            id="email-input"
            className="input-form"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="email-input">
            ایمیل 
          </label>
        </div>
        <div className={style.password_input_parent}>
          <div className={style.password_input}>
            {typePassword == "text" ? (
              <FaEyeSlash
                onClick={() => setTypePassword("password")}
                className={style.eyes_icon}
              />
            ) : (
              <FaEye
                onClick={() => setTypePassword("text")}
                className={style.eyes_icon}
              />
            )}
            <div className={`input-form-parent`}>
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
          </div>
        </div>
        <div className={style.password_input_parent}>
          <div className={style.password_input}>
            {typeRepeatPassword == "text" ? (
              <FaEyeSlash
                onClick={() => setTypeRepeatPassword("password")}
                className={style.eyes_icon}
              />
            ) : (
              <FaEye
                onClick={() => setTypeRepeatPassword("text")}
                className={style.eyes_icon}
              />
            )}
            <div className={`input-form-parent`}>
              <input
                type={typeRepeatPassword}
                id="repeat-password-input"
                className="input-form"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
              <label className="label-form" htmlFor="repeat-password-input">
                تکرار رمز عبور
              </label>
            </div>
          </div>
        </div>
        <div className={`input-form-parent ${style.input}`}>
          <DatePicker
            calendar={persian}
            locale={persian_en}
            onChange={(e)=> setBirthday(`${e.year}/${e.month}/${e.day}`)}
            calendarPosition="bottom-left"
            inputClass="input-form"
            id="birthday-input"
          />
          <label className="label-form" htmlFor="birthday-input">
            تاریخ تولد شمسی
          </label>
        </div>
        <div className={`input-form-parent ${style.input}`}>
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
        <div className={`input-form-parent ${style.input}`}>
          <input
            type="text"
            id="landline-phone-input"
            className="input-form"
            value={landlinePhone}
            onChange={(e) => setLandlinePhone(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="landline-phone-input">
            شماره تلفن ثابت
          </label>
        </div>

        <button
          className={"btn btn-outline-success mt-3 m-auto w-50"}
          onClick={(e) => registerHandler(e)}
        >
          ثبت نام
        </button>
        <span className={style.link_span} onClick={() => setValue("login")}>
          آیا از قبل حساب دارید؟ وارد حساب خود شوید
        </span>
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
