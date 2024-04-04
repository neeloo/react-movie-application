import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from '../firebase/firebase';
import { addDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';

const Review = () => {
  
  const [rate, setrate] = useState(0);
  const[loading,setloading]=useState(false);

  return (

    <div className='mt-4  py-1  border-t-2 border-gray-700 w-full'>
      <ReactStars size={30} half={true} onChange={(e) => setrate(e)} />
      <input placeholder="Enter Your thoughts ..." type="text" className=' w-full p-2  outline-none header' />
      <button className='bg-green-600 w-full p-2 mt-4 flex justify-center'> {loading? <TailSpin height={20} color='white'/>:'Share'}</button>
    </div>

  )
}

export default Review