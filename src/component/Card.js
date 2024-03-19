import React, { useState } from 'react'

const Card = () => {

  const [data, setdata] = useState([]);
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
    
      {data.map((e, i) => {
        return (
          <div className="card  font-medium  shadow-lg p-2 hover:-translate-y-2 cursor-pointer  mt-3">
            <img className='h-50' src="https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543" alt="Avanger" />
            <h1><span className='text-blue-500'>Name :</span> Avanger Endgame</h1>
            <h1><span className='text-blue-500'>Rating :</span> *</h1>
            <h1><span className='text-blue-500'>Year:</span> 2019</h1>
          </div>

        )})}

    </div>
  )
}

export default Card