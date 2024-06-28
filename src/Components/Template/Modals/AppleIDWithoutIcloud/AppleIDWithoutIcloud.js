"use client"
import React, { useState } from 'react'
import style from "../AppleIDWithIcloud/AppleIDWithIcloud.module.css"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PiWarningCircleLight } from "react-icons/pi";
import { IoIosWarning } from "react-icons/io";


export default function AppleIDWithoutIcloud() {
  const MySwal = withReactContent(Swal);

  return (
   <>
   <div>
   { MySwal.fire({
        title: `اپل آیدی فوری (بدون آیکلود)`,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          title: style.modal_title,
          popup: style.modal_body,
        },
        html: (
          <div style={{textAlign:"right"}}>
            <p className="text-color" style={{ fontSize: "16px" }}>
              <IoIosWarning className={"modal-icon"} />
              این مدل اپل‌آیدی به صورت پیش ساخته است، و قابلیت شخصی‌سازی را دارا می‌باشد.
            </p>
            <p className="text-color" style={{ fontSize: "16px" }}>
              <PiWarningCircleLight className={"modal-icon"} />
              برای دریافت این محصول باید شماره تماس خود را وارد کنید تا این محصول به صورت فوری برای شما از طریق پیام کوتاه ارسال شود.
            </p>

            {<Form/>}
          </div>
        ),
      })}
   </div>
   </>
  )
}

export function Form (){

    const [phone , setPhone] = useState("")
    const [imei , setImei] = useState("")
    const [text , setText] = useState("")

    return(
        <>
        <form className={style.parent}>
        <div className="input-form-parent w-100">
          <input
            type="text"
            id="phone-input"
            className="input-form"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="phone-input">
            شماره موبایل مشتری
          </label>
        </div>

        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div className={`input-form-parent ${style.small_input}`}>
          <input
            type="text"
            id="phone-input"
            className="input-form"
            value={text}
            disabled
            required
          />
        </div>

        <div className={`input-form-parent ${style.big_input}`}>
          <input
            type="text"
            id="phone-input"
            className="input-form"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="phone-input">
            IMEI(اختیاری)
          </label>
        </div>
        </div>

        <div className={style.bottom_parent}>
            <p className={style.text_bottom}>عدم موجودی</p>
            <div>
                <button className={style.green_btn}>خرید از کیف پول اصلی</button>
                <button className={style.yellow_btn}>خرید مستقیم از درگاه</button>
            </div>
        </div>
        </form>
        </>
    )
}