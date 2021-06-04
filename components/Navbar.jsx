import React, { useState ,useContext,useEffect} from 'react';
import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import { Context } from "../context/Context";
import Image from 'next/image'
import { useRouter } from 'next/router'
const Navbar = (props) => {
  const router = useRouter()
    const [context, setContext] = useContext(Context);


/* test */
 
  const  cehckLang=(params)=>{
    
        window.sessionStorage.setItem('lang',params);
        setContext(params) 
       
 
  } 

  useEffect(() => {
    if(window.sessionStorage.getItem('lang')=="ru"){
     
        setContext("ru") 
      }  else{
       
        setContext("az") 
        }  
   
  }, [cehckLang])
    return (
        <div className={style.nav}>
            <ul>
            <div>
                <Link href="/">
              <a>   <Image
                    src="/uploads/logowhite.png"
                    alt="Picture of the author"
                    width={211}
                    height={60}
                    objectFit='contain'
                /></a>
                </Link>
                </div>
                <li className={router.pathname=='/'?style.activeNav:""}>
                <Link href="/">
               {context=='az'? <a>Əsas səhifə</a> : <a>Главная страница</a>}
                </Link>
                </li>
                <li className={router.pathname=='/Katalog'?style.activeNav:""}>
                <Link href="/Katalog">
                {context=='az'? <a>Kataloq</a> : <a>Каталог</a>}
               
                </Link>
                </li>
               
                <li className={router.pathname=='/avtomobiller'?style.activeNav:""}>
                <Link href="/avtomobiller">
                {context=='az'? <a>Avtomobillər</a> : <a>Легковые автомобили</a>}
              
                </Link>
                </li>
                <li className={router.pathname=='/nece-almaq'?style.activeNav:""}>
                <Link href="/nece-almaq">
           
                {context=='az'? <a>Necə almaq olar?</a> : <a>     Как купить ?</a>}
                
                </Link>
                </li>
                <li className={router.pathname=='/contact'?style.activeNav:""}>
                <Link href="/contact">
             
                
                {context=='az'? <a>Əlaqə</a> : <a>   Контакт</a>}
                </Link>
                </li>
            </ul>

            <ul className={style.lang}>
         <li className={context=='az'?style.activeNav:""} onClick={()=>cehckLang('az')}>AZ</li>
         <li className={context=='ru'?style.activeNav:""}  onClick={()=>cehckLang('ru')}>RU</li>
            </ul>
        </div>
    )
}

export default Navbar
