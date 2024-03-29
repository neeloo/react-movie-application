import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase';
import { ThreeCircles } from 'react-loader-spinner';



const Detail = () => {
  const { id } = useParams();

  //window.alert(id);

  const [data, setdata] = useState({
    title: " ",
    year: " ",
    image: " ",
    description: " "
  });

  const [loading, setloading] = useState(false)

  useEffect(() => {
    async function getData() {
      setloading(true)
      const _doc = doc(db, "movies", id);
      const d = await getDoc(_doc);
      setdata(d.data());
      setloading(false)

    }
    getData();
  }, [])

  return (
    <div className='p-4  mt-4  w-full flex  flex-col  md:flex-row  items-center  md:items-center justify-center'>
      {loading ? <div className="h-96  flex w-full items-center justify-center">
        <ThreeCircles height={30} color='white' /></div> :
        <>
          <img className='h-96 block md:sticky top-14' src={data.image} alt="" />
          <div className="md:ml-4 ml-0  w-full md:w-1/2" >
            <h1 className='text-3xl fond-bold text-gray-400'>{data.title} <span className='text-xl'>({data.year})</span></h1>
            <ReactStars size={20} half={true} value={3.5} edit={false} />
            <p className='mt-3'>{data.description}</p>
          </div>
        </>
      }

    </div>
  )
}

export default Detail