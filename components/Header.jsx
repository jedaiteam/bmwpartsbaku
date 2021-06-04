import React from 'react'
import Style from '../styles/Header.module.css'
import Navbar from './Navbar'
import SearchComponent from './SearchComponent'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter()
    return (
       <>
            <div className={Style.headerNavbar}>
                <Navbar/>

               {router.pathname!='/avtomobiller'&& <SearchComponent/>}
            </div>
       </>
    )
}

export default Header
