import React from "react";
import style from "./Navbar.module.css";
import { GrLineChart } from "react-icons/gr";
import { IoWalletSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosArrowDown , IoIosArrowBack  } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className={style.parent}>
        <div>
          <ul className={style.ul}>
            <li>
              <GrLineChart className={style.icon} />
              دیجیتال کد های خریداری شده{" "}
              <IoIosArrowDown className={style.icon} />
              <ul className={style.sub_ul}>
                <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
                <li>
                    <span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span>
                     <IoIosArrowBack className={style.sub_icon}/>
                     <ul className={style.sub_sub_ul}>
                     <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
                     <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
                     <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
                     </ul>
                     </li>
                <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
              </ul>
            </li>
            <li>
              <IoWalletSharp className={style.icon} /> خدمات مالی{" "}
              <IoIosArrowDown className={style.icon} />
              <ul className={style.sub_ul}>
                <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
                <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
                <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
              </ul>
            </li>
            <li>
              <MdOutlineMessage className={style.icon} /> تیکت ها{" "}
              <IoIosArrowDown className={style.icon} />
              <ul className={style.sub_ul}>
                <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
                <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
                <li><span><IoIosArrowBack className={style.icon}/> اپل آی دی فوری</span></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
