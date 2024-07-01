"use client";
import React, { useState } from "react";
import style from "./GiftCode.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { PiWarningCircleLight } from "react-icons/pi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { calculateImeiCheckDigit } from "@/Components/Module/FinderImei/FinderImei";
import Image from "next/image";

export default function GiftCode() {
  const MySwal = withReactContent(Swal);

  return (
    <>
      <div>
        {MySwal.fire({
          title: `گیفت کد`,
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
  const [modalValue, setModalValue] = useState("home");

  return (
    <>
      {modalValue === "home" && <Home changeValue={setModalValue} />}
      {/* {modalValue === "item" && <Item changeValue={setModalValue} />} */}
    </>
  );
}

function Home(props) {
  return (
    <>
      <div style={{ textAlign: "right", marginTop: "30px" }}>
        <p className="text-color" style={{ fontSize: "20px" }}>
          گیفت دیجیتال کد خود را انتخاب نمائید :
        </p>

        <div className={style.box_parent}>
          <div className={style.box}>
            <Image
              src={"/Assets/modal-gift-it.jpg"}
              width={120}
              height={150}
              alt="gift"
            />
            <p>iTunes</p>
          </div>
          <div className={style.box}>
            <Image
              src={"/Assets/modal-gift-play.jpg"}
              width={120}
              height={150}
              alt="gift"
            />
            <p>Playstation</p>
          </div>
        </div>
      </div>
    </>
  );
}

// function Item(props) {
//   const [imei, setImei] = useState();
//   const [resultImei, setResultImei] = useState();
//   return (
//     <>
//       <div className={style.item_parent}>
//         <div className={style.back_btn_item}>
//           <p onClick={() => props.changeValue("form")}>
//             <IoArrowForwardCircleOutline /> بازگشت به صفحه قبل
//           </p>
//         </div>
//         <div className={style.service_info}>
//           <h4 className={style.title_service_info}>
//             سرویس انتخاب شده شما به شرح زیر می باشد
//           </h4>
//           <p className={style.text_service_info}>
//             سرویس نات اکتیو (NotActive) / مخصوص دستگاه آیفون
//           </p>
//           <p className={`mt-5 ${style.text_service_info}`}>
//             هزینه : 119,000 تومان
//           </p>
//           <p className={style.text_service_info}>مدت زمان : 1 تا 3 روزکاری</p>
//         </div>
//         <div className={style.borderBox_item}>
//           <h4>مثال توضیحات سرویس در حالت انجام شده :</h4>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "25px",
//           }}
//         >
//           <div className={`input-form-parent ${style.small_input}`}>
//             <input
//               type="text"
//               className="input-form"
//               value={resultImei}
//               disabled
//               required
//             />
//           </div>

//           <div className={`input-form-parent ${style.big_input}`}>
//             <input
//               type="text"
//               id="imei-input"
//               className="input-form"
//               value={imei}
//               onChange={(e) => {
//                 setImei(e.target.value);
//                 setResultImei(calculateImeiCheckDigit(e.target.value));
//               }}
//               required
//             />
//             <label className="label-form" htmlFor="imei-input">
//               IMEI
//             </label>
//           </div>
//         </div>

//         <div className={style.bottom_parent}>
//           <p className={style.text_bottom}>
//             موجودی فعلی کیف پول شما: 89000 تومان
//           </p>
//           <div>
//             <button className={style.green_btn}>خرید از کیف پول اصلی</button>
//             <button className={style.yellow_btn}>خرید مستقیم از درگاه</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
