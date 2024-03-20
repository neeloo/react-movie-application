import React, { useState } from 'react'
import ReactStars from 'react-stars'

const Card = () => {

  const [data, setdata] = useState([
    {
      name: "Avanger Endgame",
      year: "2018",
      rating: 5,
      img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
    },
    {
      name: "Avanger Endgame",
      year: "2019",
      rating: 1,
      img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
    },
    {
      name: "Avanger Endgame",
      year: "2019",
      rating: 3.5,
      img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
    },
    {
      name: "Avanger Endgame",
      year: "2019",
      rating: 5,
      img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
    },
    {
      name: "Avanger Endgame",
      year: "2019",
      rating: 5,
      img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
    },
    {
      name: "Avanger Endgame",
      year: "2019",
      rating: 5,
      img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
    },
    {
      name: "Avanger Endgame",
      year: "2019",
      rating: 5,
      img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
    },


  ]);
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>

      {data.map((e, i) => {
        return (
          <div key={i} className="card  font-medium  shadow-lg p-2 hover:-translate-y-3 cursor-pointer
            mt-6 transition-all duration-500">
            <img className='h-50' src={e.img} />
            <h1><span className='text-blue-500'>Name :</span> {e.name}</h1>
            <h1 className='flex items-center '><span className='text-blue-500 mr-1'>Rating :</span>
              <ReactStars size={20} half={true} value={e.rating} edit={false} /> </h1>
            <h1><span className='text-blue-500'>Year:</span> {e.year}</h1>
          </div>

        )
      })}

    </div>
  )
}

export default Card;