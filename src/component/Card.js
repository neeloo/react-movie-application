import React, { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner';
import ReactStars from 'react-stars'

const Card = () => {

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function getData() {

    }
    getData();
  }, [])


  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
      {loading ? <div className="w-full  flex justify-center items-center"><Audio height={40} color="white"/></div>:
        
          data.map((e, i) => {
            return (
              <div key={i} className="card  font-medium  shadow-lg p-2 hover:-translate-y-3 cursor-pointer
            mt-6 transition-all duration-500">
                <img className='h-50' src={e.image} />
                <h1><span className='text-blue-500'>Name :</span> {e.title}</h1>
                <h1 className='flex items-center '><span className='text-blue-500 mr-1'>Rating :</span>
                  <ReactStars size={20} half={true} value={5} edit={false} /> </h1>
                <h1><span className='text-blue-500'>Year:</span> {e.year}</h1>
              </div>

            )
          })
        }
      

    </div>
  )
}

export default Card;