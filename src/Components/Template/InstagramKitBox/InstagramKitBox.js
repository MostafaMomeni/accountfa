import React from 'react'
import style from "./InstagramKitBox.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function InstagramKitBox() {
  return (
   <>
   <div className={style.parent}>
   <Link href={"/"} className={style.link_parent}>
        <div className={style.title}>نوروز مبارک</div>
        <Image src={"/Assets/noroz.jpg"} width={150} height={150} className={style.image}/>
        <button className={style.btn}>اطلاعات بیشتر</button>
   </Link>
   </div>
   </>
  )
}
