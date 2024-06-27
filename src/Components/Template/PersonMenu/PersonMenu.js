"use client";
import React, { useState } from "react";
import style from "./PersonMenu.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { CiPower } from "react-icons/ci";
import { FaStar, FaRegStar, FaDollarSign } from "react-icons/fa";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PersonMenu({ closeMenu }) {
  const data = [
    { label: "Group A", value: 400 },
    { label: "Group B", value: 300 },
    { label: "Group C", value: 300 },
    { label: "Group D", value: 200 },
  ];

  const [closeAnimation, setCloseAnimation] = useState(false);

  const closeMenuHandler = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      closeMenu(false);
    }, 200);
  };

  return (
    <>
      <div className={style.parent}>
        <div className={style.blank} onClick={() => closeMenuHandler()}></div>
        <div className={`${style.main} ${closeAnimation && style.close_menu}`}>
          <div className={style.header_parent}>
            <IoSettingsOutline className={style.header_icon} />
            <Image
              src={"/Assets/user-profile.png"}
              width={70}
              height={70}
              quality={100}
              className={style.user_profile}
            />
            <CiPower className={style.header_icon} />
          </div>
          <p className={style.user_name}>مصطفی تست</p>
          <div className={style.user_short_name_parent}>
            <span className={style.user_short_name}>نماینده تست</span> |
            <span className={style.user_phone}>0910000000</span>
          </div>
          <p className={style.packege_title}>پکیج برنزی</p>
          <div className={style.score_parent}>
            <FaStar className={style.star_icon} />
            <FaStar className={style.star_icon} />
            <FaRegStar className={style.star_icon} />
            <FaRegStar className={style.star_icon} />
            <FaRegStar className={style.star_icon} />
          </div>
          <hr />
          <p className={style.title_text}>
            <FaDollarSign className={style.dollar_icon} /> موجودی کیف پول
          </p>
          <p className={style.wallet_amount}>کیف پول اصلی : 20000 هزار تومان</p>
          <p className={style.wallet_amount}>کیف پول هدیه : 2000 هزار تومان</p>
          <button className={style.btn_primary}>شارژ مالی حساب</button>
          <hr />
          <p className={style.title_text}>نمودار خرید محصولات</p>

          <div className={style.chart_parent}>
            <Stack direction="row">
              <PieChart
                series={[
                  {
                    paddingAngle: 0,
                    innerRadius: 60,
                    outerRadius: 80,
                    data,
                  },
                ]}
                margin={{ right: 5 }}
                width={200}
                height={200}
                legend={{ hidden: true }}
              />
            </Stack>
          </div>

          <div className={style.bottom_image_parent}>
            <Image
              className={style.bottom_image}
              src={"/Assets/dark-logo.png"}
              width={150}
              height={30}
            />
          </div>
        </div>
      </div>
    </>
  );
}
