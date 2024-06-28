"use client"
import React , {useState} from "react";
import style from "./License.module.css"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function license() {
  const MySwal = withReactContent(Swal);

  return (
    <>
      <div>
        {MySwal.fire({
          title: `لایسنس`,
          showCloseButton: true,
          showConfirmButton: false,
          customClass: {
            title: style.modal_title,
            popup: style.modal_body,
          },
          html: (
            <div style={{ textAlign: "right" }}>
              <p className="text-color mt-5" style={{ fontSize: "20px" }}>
                لایسنس دیجیتال کد خود را انتخاب نمائید :
              </p>
            </div>
          ),
        })}
      </div>
    </>
  );
}