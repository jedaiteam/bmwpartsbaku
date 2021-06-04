import React from 'react'
import Style from '../styles/Footer.module.css'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className={Style.footerArea}>
            <ul className={Style.footerFirstLine}>
                <li>
                <Link href="/">
                <a>Əsas səhifə</a>
                </Link>
                </li>
                <li>
                <Link href="/">
                <a>Kataloq</a>
                </Link>
                </li>
                <li>
                <Link href="/">
                <a>Avtomobillər</a>
                </Link>
                </li>
                <li>
                <Link href="/">
                <a>Necə almaq</a>
                </Link>
                </li>
                <li>
                <Link href="/">
                <a>Əlaqə</a>
                </Link>
                </li>
            </ul>




            <ul className={Style.footerFirstLine}>
                <li>
                <img src="../uploads/whatsapp.svg" alt="" width="19"/>  <a href="+994 50 308 28 53">+994 50 308 28 53 </a> 
                </li>
                <li>
                <img src="../uploads/Call.svg" alt="" width="19"/>  <a href="+994 55 771 12 25">+994 55 771 12 25</a> 
                </li>
                <li>
                <img src="../uploads/Call.svg" alt="" width="19"/> <a href="tel:+994 50 610 00 17">+994 50 610 00 17</a>
                </li>
                <li>
                <img src="../uploads/Call.svg" alt="" width="19"/> <a href="tel:+994 77 251 55 55">+994 77 251 55 55</a>
                </li>
                <li>
          <img src="../uploads/Location.svg" alt=""/> <span>Bakı şəh., Babək prs. 74</span> 
                </li>
            </ul>
        </div>
    )
}

export default Footer
