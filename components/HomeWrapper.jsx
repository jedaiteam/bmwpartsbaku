import React, { useState, useEffect,useContext} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/HomeWrapper.module.css'
import { Context } from "../context/Context";
const HomeWrapper = () => {
    const [lang, setlang] = useContext(Context);
    const [allSeria, setallSeria] = useState([]);
    const getSeria= async()=>{
        const res = await fetch('https://bmwpartsbaku.az/public/api/seriya')
        const product= await res.json();
      
        setallSeria(product);
      }

    useEffect(() => {
        getSeria();
      }, [])
    return (
        <div className="custom_wrapper">
            <div className={Style.parentEl}>
                <ul>
                    {allSeria.map((data,index)=>(
                            <li key={index} style={{width:"45%", height:'234px'}}>
                            <Image
                            src={`/uploads/categ${index+1}.png`}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                        />
                        <h3>
                        <Link href={{ pathname: '/search', query: { seriya_id:data.id ,category_id:"",kuzov_id:""} }}>
                        <a>{data[`title_${lang}`]}</a>
                        </Link>
                            
                            </h3>
                        <Link href={{ pathname: '/search', query: { seriya_id:data.id ,category_id:"",kuzov_id:""} }}>
                        <a>Hamsına bax</a>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomeWrapper
