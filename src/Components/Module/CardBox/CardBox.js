"use client";
import React, { useContext, useEffect } from "react";
import style from "./CardBox.module.css";
import { Context } from "@/Context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function CardBox(props) {
  const context = useContext(Context);
  const MySwal = withReactContent(Swal);

  const validateIsLogin = () => {
    if (document.cookie.split("=")[0] === "Authorization") {
      context.isLogin = true;
      props.showModal();
    } else {
      context.isLogin = false;
      errorModal();
    }
  };

  const errorModal = () => {
    Swal.fire({
      title: "ابتدا وارد اکانت خود شوید",
      icon: "error",
      confirmButtonText: "باشه",
    });
  };

  return (
    <>
      <div
        className={style.parent}
        style={{
          backgroundImage: `linear-gradient(to bottom right,${props.color1} 0%,${props.color2} 100%)`,
        }}
        onClick={() => validateIsLogin()}
      >
        <div className={style.icon_parent}>{props.icon}</div>
        <div className={style.text_parent}>
          <h2>
            {props.title} <b>{props.boldTitle}</b> {props.nextBoldTitle}
          </h2>
          {props.text && <h5>{props.text}</h5>}
        </div>
      </div>
    </>
  );
}
