"use client"
import Slider from "@/Components/Template/Slider/Slider";
import styles from "./page.module.css";
import CardBox from "@/Components/Module/CardBox/CardBox";
import { FaApple } from "react-icons/fa";
import { SlKey } from "react-icons/sl";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FaUnlock } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import AppleIDWithIcloud from "@/Components/Template/Modals/AppleIDWithIcloud/AppleIDWithIcloud";
import AppleIDPlus from "@/Components/Template/Modals/AppleIDPlus/AppleIDPlus";
import AppleIDWithoutIcloud from "@/Components/Template/Modals/AppleIDWithoutIcloud/AppleIDWithoutIcloud";
import license from "@/Components/Template/Modals/License/License";
import RealAppleID from "@/Components/Template/Modals/RealAppleID/RealAppleID";
import OfficialService from "@/Components/Template/Modals/OfficialService/OfficialService";
import HomeChart from "@/Components/Template/Charts/HomeChart/HomeChart";

export default function Home() {
  return (
    <>
    <div className={styles.parent}>
      <Slider/> 

      <div className={styles.title_box_parent}>
        <p>انواع محصولات دیجیتال کد</p>
      </div>
      <div className={styles.card_parent}>
        <CardBox icon={<FaApple/>} title="اپل‌آیدی" boldTitle="فوری" text="(بدون آیکلود)" color1="#c80046" color2="#e14155" showModal={AppleIDWithoutIcloud}/>
        <CardBox icon={<FaApple/>} title="اپل‌آیدی" boldTitle="فوری" text="(با آیکلود)" color1="#c80046" color2="#e14155" showModal={AppleIDWithIcloud}/>
        <CardBox icon={<FaApple/>} title="اپل‌آیدی" boldTitle="پلاس" color1="#1e9ea4 " color2="#30d7e0" showModal={AppleIDPlus}/>
        <CardBox icon={<FaApple/>} title="اپل‌آیدی" boldTitle="حقیقی" color1="#f38c00" color2="#e9b964 " showModal={RealAppleID}/>
        <CardBox icon={<SlKey/>} boldTitle="لایسنس" color1="#00796b " color2="#4db6ac" showModal={license}/>
        <CardBox icon={<MdOutlineCardGiftcard/>} boldTitle="گیفت" nextBoldTitle="کد" color1="#f80759 " color2="#f46ba5 "/>
        <CardBox icon={<FaUnlock/>} title="آنلاک اپل آیدی" boldTitle="کارتی"  color1="#9b4bb6" color2="#5971fe"/>
        <CardBox icon={<FaCloud/>} boldTitle="سرویس" nextBoldTitle="رسمی" color1="#9500ab" color2="#9b4db6 " showModal={OfficialService}/>
      </div>

      <div className={styles.title_chart}>
        <h4>نمودار گردش حساب پنل</h4>
      </div>
      <div className={styles.chart_parent}>
        <HomeChart/>
      </div>
    </div>
    </>
  );
}
