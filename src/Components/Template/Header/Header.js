import React from 'react'
import style from "./Header.module.css"
import Image from 'next/image'

export default function Header() {
  return (
    <>
    <div className={style.parent}>
        <div className={style.right}>
            <div className={style.logo}>
                <Image src={"/Assets/logo.png"} width={180} height={30} className={style.logo_image}/>
            </div>
            <div className={style.dropDown_right_parent}>
                <div className={style.dropDown_right}>
                    کیت رابط کاربری اینستاگرام
                </div>
            </div>
        </div>
        <div className={style.left}>
            
        </div>
    </div>
    </>
  )
}
