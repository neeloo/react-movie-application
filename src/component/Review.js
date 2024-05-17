import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef, db } from '../firebase/firebase';
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import swal from 'sweet-alert'




const Review = ({ id, prerating, userated }) => {

  const [rating, setrate] = useState(0);
  const [loading, setloading] = useState(false);
  const [reviewloda, setrevload] = useState(false);
  const [form, setform] = useState("");
  const [data, setdata] = useState([]);

  const sendrev = async () => {
    setloading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "nilu",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime()
      })
      const ref = doc(db, "movies", id)
      await updateDoc(ref, {
        rating: prerating + rating,
        rated: userated + 1


      })
      setrate(0);
      setform("")
      swal({
        title: "Review send",
        icon: "success",
        button: false,
        timer: 3000
      });

    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        button: false,
        timer: 3000
      });

    }
    setloading(false)

  }
  useEffect(() => {
    async function getData() {
      setrevload(true);
      let q = query(reviewsRef, where('movieid', '==', id))
      const qs = await getDocs(q);
      qs.forEach((doc) => {
        setdata((pre) => [...pre, doc.data()])
      })

      setrevload(false)

    }
    getData();
  }, [])

  return (

    <div className='mt-4  py-1  border-t-2 border-gray-700 w-full'>
      <ReactStars size={30} half={true} value={rating} onChange={(e) => setrate(e)} />
      <input value={form} onChange={(e) => setform(e.target.value)}
        placeholder="Enter Your thoughts ..." type="text" className=' w-full p-2  outline-none header' />
      <button onClick={sendrev}
        className='bg-green-600 w-full p-2 mt-4 flex justify-center'>
        {loading ? <TailSpin height={20} color="white" /> : 'Share'}
      </button>
      {reviewloda ?
        <div className='mt-8 flex justify-center'> <ThreeDots height={15} color='white' /></div>

        :
        <div>
          {data.map((e, i) => {
            return (
              <div key={i}>{e.thought}</div>
            )
          })}

        </div>

      }
    </div>

  )
}

export default Review