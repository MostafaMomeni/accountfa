"use client";
import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { GrLineChart } from "react-icons/gr";
import { IoWalletSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const reSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", reSize);
  }, []);
  return (
    <>
      {width > 650 && (
        <div className={style.parent}>
          <div>
            <ul className={style.ul}>
              <li>
                <GrLineChart className={style.icon} />
                دیجیتال کد های خریداری شده{" "}
                <IoIosArrowDown className={style.icon} />
                <ul className={style.sub_ul}>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} />
                      اپل آیدی فوری(با آیکلود)
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} />
                      اپل آیدی فوری(بدون آیکلود)
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} />
                      اپل آیدی پلاس
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} />
                      اپل آیدی حقیقی
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} />
                      گیفت کد
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} /> انواع اکانت
                    </span>
                    <IoIosArrowBack className={style.sub_icon} />
                    <ul className={style.sub_sub_ul}>
                      <li>
                        <span>
                          <IoIosArrowBack className={style.icon} /> اکانت
                          StorelIP{" "}
                        </span>
                      </li>
                      <li>
                        <span>
                          <IoIosArrowBack className={style.icon} /> اکانت
                          CiscolIP{" "}
                        </span>
                      </li>
                      <li>
                        <span>
                          <IoIosArrowBack className={style.icon} /> اکانت
                          openVPN{" "}
                        </span>
                      </li>
                      <li>
                        <span>
                          <IoIosArrowBack className={style.icon} /> اکانت VIPIP{" "}
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} /> لایسنس
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} /> آنلاک اپل آیدی
                      کارتی
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} /> آنلاک سرویس
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <IoWalletSharp className={style.icon} /> خدمات مالی
                <IoIosArrowDown className={style.icon} />
                <ul className={style.sub_ul}>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} /> تراکنش مالی
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} /> ریز مبادلات
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <MdOutlineMessage className={style.icon} /> تیکت ها
                <IoIosArrowDown className={style.icon} />
                <ul className={style.sub_ul}>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} /> ارسال تیکت جدید
                    </span>
                  </li>
                  <li>
                    <span>
                      <IoIosArrowBack className={style.icon} /> لیست تیکت ها
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
