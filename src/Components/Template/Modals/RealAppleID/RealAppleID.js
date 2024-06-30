"use client";
import React, { useState } from "react";
import style from "./RealAppleID.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PiWarningCircleLight } from "react-icons/pi";
import { IoIosWarning } from "react-icons/io";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
import { calculateImeiCheckDigit } from "@/Components/Module/FinderImei/FinderImei";

export default function RealAppleID() {
  const MySwal = withReactContent(Swal);

  return (
    <>
      <div>
        {MySwal.fire({
          title: `اپل آیدی حقیقی`,
          showCloseButton: true,
          showConfirmButton: false,
          customClass: {
            title: style.modal_title,
            popup: style.modal_body,
          },
          html: (
            <div style={{ textAlign: "right" }}>
              <p className="text-color" style={{ fontSize: "16px" }}>
                <IoIosWarning className={"modal-icon"} />
                این مدل اپل‌آیدی به همراه یک ایمیل با مشخصات شخصی شما ساخته
                می‌شود.
              </p>
              <p className="text-color" style={{ fontSize: "16px" }}>
                <IoIosWarning className={"modal-icon"} />
                این محصول در بازه زمانی 15 الی 50دقیقه‌ای برای شما ارسال می‌شود.
              </p>
              <p className="text-color" style={{ fontSize: "16px" }}>
                <PiWarningCircleLight className={"modal-icon"} />
                برای دریافت این محصول باید شماره تماس خود را وارد کنید تا این
                محصول در بازه زمانی مشخص شده برای شما از طریق پیام کوتاه ارسال
                شود.
              </p>

              {<Form />}
            </div>
          ),
        })}
      </div>
    </>
  );
}

export function Form() {
  const [name, setName] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [imei, setImei] = useState("");
  const [resultImei, setResultImei] = useState("");

  return (
    <>
      <form className={style.parent}>
        <div className={`input-form-parent ${style.inputs}`}>
          <input
            type="text"
            id="name-input"
            className="input-form"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="name-input">
            نام و نام خانوادگی
          </label>
        </div>

        <div className={style.selectBox_parent}>
            <select className={style.selectBox} value={question1} onChange={(e)=> setQuestion1(e.target.value)}>
                <option value="">سوال اول را انتخاب نمایید</option>
                <option value="130">What is the first name of your best friend in high school?</option>
                <option value="131">What was the name of your first pet?</option>
                <option value="132">What was the first thing you learned to cook?</option>
                <option value="133">What was the first film you saw in the theater?</option>
                <option value="134">Where did you go the first time you flew on a plane?</option>
                <option value="135">What is the last name of your favorite elementary school teacher?</option>
            </select>
        </div>

        <div className={`input-form-parent ${style.inputs}`}>
          <input
            type="text"
            id="answer1-input"
            className="input-form"
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="answer1-input">
            جواب سوال اول
          </label>
        </div>

        <div className={`input-form-parent ${style.inputs}`}>
          <input
            type="text"
            id="phone-input"
            className="input-form"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="phone-input">
            شماره تلفن مشتری
          </label>
        </div>

        <div className={style.selectBox_parent}>
            <select className={style.selectBox} value={question2} onChange={(e)=> setQuestion2(e.target.value)}>
                <option value="">سوال دوم را انتخاب نمایید</option>
                <option value="130">What is the first name of your best friend in high school?</option>
                <option value="131">What was the name of your first pet?</option>
                <option value="132">What was the first thing you learned to cook?</option>
                <option value="133">What was the first film you saw in the theater?</option>
                <option value="134">Where did you go the first time you flew on a plane?</option>
                <option value="135">What is the last name of your favorite elementary school teacher?</option>
            </select>
        </div>

        <div className={`input-form-parent ${style.inputs}`}>
          <input
            type="text"
            id="answer2-input"
            className="input-form"
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="answer2-input">
            جواب سوال دوم
          </label>
        </div>

        <div className={style.imei_parent}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div className={`input-form-parent ${style.small_input}`}>
            <input
              type="text"
              className="input-form"
              value={resultImei}
              disabled
              required
            />
          </div>

          <div className={`input-form-parent ${style.big_input}`}>
            <input
              type="text"
              id="imei-input"
              className="input-form"
              value={imei}
              onChange={(e) => {
                setImei(e.target.value)
                setResultImei(calculateImeiCheckDigit(e.target.value))
            }}
              required
            />
            <label className="label-form" htmlFor="imei-input">
              IMEI(اختیاری)
            </label>
          </div>
        </div>
        </div>

        <div className={style.selectBox_parent}>
            <select className={style.selectBox} value={question3} onChange={(e)=> setQuestion3(e.target.value)}>
                <option value="">سوال سوم را انتخاب نمایید</option>
                <option value="130">What is the first name of your best friend in high school?</option>
                <option value="131">What was the name of your first pet?</option>
                <option value="132">What was the first thing you learned to cook?</option>
                <option value="133">What was the first film you saw in the theater?</option>
                <option value="134">Where did you go the first time you flew on a plane?</option>
                <option value="135">What is the last name of your favorite elementary school teacher?</option>
            </select>
        </div>

        <div className={`input-form-parent ${style.inputs}`}>
          <input
            type="text"
            id="answer3-input"
            className="input-form"
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="answer3-input">
            جواب سوال سوم
          </label>
        </div>

        <div className={`input-form-parent ${style.inputs}`}>
          <DatePicker
            calendar={persian}
            locale={persian_en}
            onChange={(e)=> setBirthday(`${e.year}/${e.month}/${e.day}`)}
            calendarPosition="bottom-left"
            inputClass="input-form"
            containerClassName={style.birthday_input}
            id="birthday-input"
          />
          <label className="label-form" htmlFor="birthday-input">
            تاریخ تولد شمسی
          </label>
        </div>

        <div className={style.bottom_parent}>
          <p className={style.text_bottom}>قیمت : 38500000 تومان</p>
          <div>
            <button className={style.green_btn}>خرید از کیف پول اصلی</button>
            <button className={style.yellow_btn}>خرید مستقیم از درگاه</button>
          </div>
        </div>
      </form>
    </>
  );
}
