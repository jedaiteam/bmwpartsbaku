import React ,{useState,useEffect} from 'react'
import Style from '../styles/BodyBanner.module.css'
import BmwPartsCard from './BmwPartsCard'
import BodyImage from './BodyImage'
import { useRouter } from 'next/router'
import { Skeleton ,Empty} from 'antd';
const BodyBanner = () => {
    const router = useRouter()

const [products, setproducts] = useState([])
const [spin, setspin] = useState(0)

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

console.log(router.query);


       if(router.pathname=='/search'){
        useEffect(async ()=> {
            const  url=`https://bmwpartsbaku.az/api/search?category_id=${router.query.category_id}&kuzov_id=${router.query.kuzov_id}&seriya_id=${router.query.seriya_id}`
            const res = await fetch(url);           
            const product= await res.json();
            setspin(1);
            setproducts(product);
        },[router.query]) 
        }else{
            useEffect(async ()=> {
                const   url=`https://bmwpartsbaku.az/api/search?category_id=&kuzov_id=&seriya_id=`
                const res = await fetch(url);           
                const product= await res.json();
                setspin(1);
                setproducts(product);
            },[router.query]) 

       }
      

 
    return (
<div className={Style.first}>
    
    <BodyImage title="Kataloq"/>
<div className={Style.bodyBanner}>
        
            <div>
                {spin==0?
             <>  <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div> 
               <div style={{width:'290px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px'}}> <Skeleton active  /> </div></>:products.length<1?
              <div style={{width:'100%'}}> <Empty description={false} /></div>:
                 products.map((e,index)=>(
                <BmwPartsCard key={index} data={e}/>
           ))}
            
           
            </div>
         
        </div>
</div>
    )
}

export default BodyBanner
