import React,{useState} from 'react'
import BodyImage from '../../components/BodyImage'
import DetailBody from '../../components/DetailBody'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
const Detail = ({data}) => {
  const router = useRouter()
const [state, setstate] = useState(router.id)
    return (
      <Layout>
          <BodyImage title={data.title_az}/>
            <DetailBody data={data}/>
      </Layout>

    )
}
export const getServerSideProps = async ({params:{id}}) => {
 
  const res = await fetch(`https://bmwpartsbaku.az/public/api/products/${id}`)
  const data  = await res.json()

  return {
    props: {
      data,
    },
  }
}
export default Detail
