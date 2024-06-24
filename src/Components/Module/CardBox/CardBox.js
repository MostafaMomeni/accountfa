import React from "react";
import style from "./CardBox.module.css";

export default function CardBox(props) {
  return (
    <>
      <div
        className={style.parent}
        style={{
          backgroundImage:
            `linear-gradient(to bottom right,${props.color1} 0%,${props.color2} 100%)`,
        }}
      >
        <div className={style.icon_parent}>{props.icon}</div>
        <div className={style.text_parent}>
          <h2>{props.title}</h2>
          {props.text && <h5>{props.text}</h5>}
        </div>
      </div>
    </>
  );
}
