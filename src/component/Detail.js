import React, { useEffect } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import {doc} from 'firebase/firestore'
import { movieRef } from '../firebase/firebase';


const Detail = () => {
  const{id}=useParams();

  //window.alert(id);

  const[data,setdata]=useEffect({
    title:" ",
    year:" ",
    image:" ",
    description:" "
  });

  useEffect(()=>{
    async function getData(){
      const d=await getDoc(movieRef,id);
      setdata(d.data());

    }
    getData();

  },[])

  return (
    <div className='p-4  mt-4  w-full flex  flex-col  md:flex-row  items-center  md:items-center justify-center'>
      <img className='h-96 block md:sticky top-14' src={data.image} alt="" />
      <div className="md:ml-4 ml-0  w-full md:w-1/2" >
        <h1 className='text-3xl fond-bold text-gray-400'>{data.title} <span className='text-xl'>{data.year}</span></h1>
        <ReactStars size={20} half={true} value={3.5} edit={false} />
        <p className='mt-3'>{data.description}</p>
          
      </div>
    </div>
  )
}

export default Detail