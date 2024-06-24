import React from 'react'
import style from "./Footer.module.css"
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <div className={style.parent}>
        <p>
    کپی رایت © 2020 <Link href={"/"} className={style.link}>مرکز حساب</Link> . طراحی شده توسط اکسیر همه حقوق محفوظ است.
        </p>
    </div>
    </>
  )
}
