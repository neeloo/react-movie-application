import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { movieRef } from '../firebase/firebase';
import swal from 'sweet-alert'

const Addmovie = () => {
  const [form, setform] = useState({
    title: "",
    year: " ",
    discription: " ",
    image: " "
  });
  const [loading, setloading] = useState(false);

  const addmovie = async () => {
    try {
      setloading(true);
      await addDoc(movieRef, form);
      swal({
        title: "Successfuly Added",
        icon: "success",
        button: false,
        timer: 3000
      });
      setloading(false);
    } catch (error) {
      swal({
        title: "error",
        icon: "err",
        button: false,
        timer: 3000
      });
    }
  }

  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-pink-500">Add Movie</h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">

              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-300">Title</label>
                  <input type="text" id="name" name="name" value={form.title} onChange={(e) => setform({ ...form, title: e.target.value })}
                    class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-300">Year</label>
                  <input type="email" id="email" name="email" value={form.year} onChange={(e) => setform({ ...form, year: e.target.value })}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">Image Link</label>
                  <input id="message" name="message" value={form.image} onChange={(e) => setform({ ...form, image: e.target.value })}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">Description</label>
                  <textarea id="message" name="message" value={form.discription} onChange={(e) => setform({ ...form, discription: e.target.value })}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>

              <div class="p-2 w-full">
                <button onClick={addmovie} class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                  {loading ? <TailSpin height={25} color="white" /> : 'Submit'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Addmovie