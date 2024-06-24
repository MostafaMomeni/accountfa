import Slider from "@/Components/Template/Slider/Slider";
import styles from "./page.module.css";
import CardBox from "@/Components/Module/CardBox/CardBox";
import { FaApple } from "react-icons/fa";
import { SlKey } from "react-icons/sl";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FaUnlock } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <div className={styles.parent}>
      <Slider/> 

      <div className={styles.title_box_parent}>
        <p>انواع محصولات دیجیتال کد</p>
      </div>
      <div className={styles.card_parent}>
        <CardBox icon={<FaApple/>} title="اپل‌آیدی فوری" text="(با آیکلود)" color1="#c80046" color2="#e14155"/>
        <CardBox icon={<FaApple/>} title="اپل‌آیدی فوری" text="(با آیکلود)" color1="#c80046" color2="#e14155"/>
        <CardBox icon={<FaApple/>} title="اپل‌آیدی فوری" text="(با آیکلود)" color1="#1e9ea4 " color2="#30d7e0 "/>
        <CardBox icon={<FaApple/>} title="اپل‌آیدی فوری" text="(با آیکلود)" color1="#f38c00" color2="#e9b964 "/>
        <CardBox icon={<SlKey/>} title="اپل‌آیدی فوری" text="(با آیکلود)" color1="#00796b " color2="#4db6ac "/>
        <CardBox icon={<MdOutlineCardGiftcard/>} title="اپل‌آیدی فوری" text="(با آیکلود)" color1="#f80759 " color2="#f46ba5 "/>
        <CardBox icon={<FaUnlock/>} title="اپل‌آیدی فوری" text="(با آیکلود)" color1="#9b4bb6" color2="#5971fe"/>
        <CardBox icon={<FaCloud/>} title="اپل‌آیدی فوری" text="(با آیکلود)" color1="#9500ab" color2="#9b4db6 "/>
      </div>
    </div>
    </>
  );
}
