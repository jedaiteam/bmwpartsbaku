import React from 'react'
import Style from '../styles/HowtoBuy.module.css'
import Image from 'next/image'

const HowToBuy = () => {
    return (
        <div className='custom_wrapper'>
            <div className={Style.parentElement}>
                <div className={Style.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                     </p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                     </p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                     </p>
                </div>

                <div  className={Style.imageWrapper}  style={{marginTop:"40px",overflow:"visible"}}>
                <Image
                    src="/uploads/howtobuy.jpg"
                    alt="Picture of the author"
                    width={430}
                    height={430}
                    className={Style.htbimage} 
                
                />
                </div>
            </div>
        </div>
    )
}

export default HowToBuy
