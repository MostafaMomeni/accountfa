"use client"
import React , {useContext, useEffect} from "react";
import style from "./CardBox.module.css";
import { Context } from "@/Context/Context";
import Swal from "sweetalert2";

export default function CardBox(props) {
  const context = useContext(Context)

  const validateIsLogin = ()=>{
    console.log(document.cookie)
    if(document.cookie.split("=")[0] === "Authorization"){
      context.isLogin = true
      modalHandler()
    }else{
      context.isLogin = false
      errorModal()
    }
  }

  const errorModal = () =>{
    Swal.fire({
      title:"ابتدا وارد اکانت خود شوید",
      icon:"error",
      confirmButtonText:"باشه"
    })
  }

  const modalHandler =()=>{
    Swal.fire({
      title:"مدال انجام کار",
      icon:"success",
      confirmButtonText:"باشه"
    })
  }
  return (
    <>
      <div
        className={style.parent}
        style={{
          backgroundImage:
            `linear-gradient(to bottom right,${props.color1} 0%,${props.color2} 100%)`,
        }}
        onClick={()=> validateIsLogin()}
      >
        <div className={style.icon_parent}>{props.icon}</div>
        <div className={style.text_parent}>
          <h2>{props.title} <b>{props.boldTitle}</b> { props.nextBoldTitle}</h2>
          {props.text && <h5>{props.text}</h5>}
        </div>
      </div>
    </>
  );
}
