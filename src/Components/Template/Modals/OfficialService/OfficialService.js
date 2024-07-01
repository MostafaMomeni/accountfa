"use client";
import React, { useState } from "react";
import style from "./OfficialService.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PiWarningCircleLight } from "react-icons/pi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { calculateImeiCheckDigit } from "@/Components/Module/FinderImei/FinderImei";

export default function OfficialService() {
  const MySwal = withReactContent(Swal);

  return (
    <>
      <div>
        {MySwal.fire({
          title: `سرویس رسمی`,
          showCloseButton: true,
          showConfirmButton: false,
          customClass: {
            title: style.modal_title,
            popup: style.modal_body,
          },
          html: <Body />,
        })}
      </div>
    </>
  );
}

function Body() {
  const [modalValue, setModalValue] = useState("form");

  return (
    <>
      {modalValue === "form" && <Form changeValue={setModalValue} />}
      {modalValue === "item" && <Item changeValue={setModalValue} />}
    </>
  );
}

function Form(props) {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("");

  return (
    <>
      <div style={{ textAlign: "right", marginTop: "30px" }}>
        <p className="text-color" style={{ fontSize: "20px" }}>
          <PiWarningCircleLight className={"modal-icon"} />
          سرویس مورد نظر خود را انتخاب کنید:
        </p>
      </div>
      <div className={style.form_parent}>
        <div className={`input-form-parent ${style.inputs}`}>
          <input
            type="text"
            id="search-input"
            className="input-form"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <label className="label-form" htmlFor="search-input">
            جستجوی سرویس
          </label>
        </div>

        <div className={style.selectBox_parent}>
          <select
            className={style.selectBox}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="27">سرویس نات اکتیو (NotActive)</option>
            <option value="28">سرویس رفع ارور Disabled اپل آیدی</option>
            <option value="8">آنلاک سرویس ایکلود رسمی iPhone</option>
            <option value="12">سرویس‌های بررسی IMEI</option>
            <option value="24">آنلاک فکتوری سیم کارت‌های آمریکا (AT&T)</option>
            <option value="25">
              آنلاک فکتوری سیم کارت‌های آمریکا (Verizon)
            </option>
            <option value="16">آنلاک فکتوری سیم کارت‌های کانادا</option>
            <option value="17">آنلاک فکتوری سیم کارت‌های انگلستان</option>
            <option value="20">آنلاک فکتوری سیم کارت‌های دیگر </option>
          </select>
        </div>
      </div>

      <div className={style.Item_box_parent}>
        <div
          className={style.item_box}
          onClick={(e) => props.changeValue("item")}
        >
          <h5 className={style.title_item_box}>سرویس نات اکتیو (NotActive)</h5>
          <p className={style.text_item_box}>مخصوص دستگاه آیفون</p>
          <p className={style.price_item_box}>هزینه: 119000 تومان</p>
          <p className={style.text_item_box}>مدت زمان: 1 تا 3 روز کاری</p>
        </div>
      </div>
    </>
  );
}

function Item(props) {
    const [imei, setImei] = useState();
    const [resultImei, setResultImei] = useState();
  return (
    <>
      <div className={style.item_parent}>
        <div className={style.back_btn_item}>
          <p onClick={() => props.changeValue("form")}>
            <IoArrowForwardCircleOutline /> بازگشت به صفحه قبل
          </p>
        </div>
        <div className={style.service_info}>
          <h4 className={style.title_service_info}>
            سرویس انتخاب شده شما به شرح زیر می باشد
          </h4>
          <p className={style.text_service_info}>
            سرویس نات اکتیو (NotActive) / مخصوص دستگاه آیفون
          </p>
          <p className={`mt-5 ${style.text_service_info}`}>
            هزینه : 119,000 تومان
          </p>
          <p className={style.text_service_info}>مدت زمان : 1 تا 3 روزکاری</p>
        </div>
        <div className={style.borderBox_item}>
          <h4>مثال توضیحات سرویس در حالت انجام شده :</h4>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop:"25px" }}>
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
                setImei(e.target.value);
                setResultImei(calculateImeiCheckDigit(e.target.value));
              }}
              required
            />
            <label className="label-form" htmlFor="imei-input">
              IMEI
            </label>
          </div>
        </div>

        <div className={style.bottom_parent}>
          <p className={style.text_bottom}>موجودی فعلی کیف پول شما: 89000 تومان</p>
          <div>
            <button className={style.green_btn}>خرید از کیف پول اصلی</button>
            <button className={style.yellow_btn}>خرید مستقیم از درگاه</button>
          </div>
        </div>
      </div>
    </>
  );
}
