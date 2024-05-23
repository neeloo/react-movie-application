import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Sign = () => {
    const [form, setform] = useState({
        name: "",
        mobile: "",
        password: ""

    });
    const [loading, setloading] = useState(false);
    const [otp, setotp] = useState(false);
    const [OTP, setOTP] = useState("");


    return (
        <div className='w-full flex flex-col mt-8 mt items-center'>
            <h1 className='text-xl font-bold'>Sign Up</h1>
            {otp ?
                <>
                    <div className="p-2 w-full md:w-1/3">
                        <div className="relative">
                            <label for="email" className="leading-7 text-sm text-gray-300">OTP</label>
                            <input id="email" name="email" value={OTP} onChange={(e) => setOTP(e.target.value)}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                            {loading ? <TailSpin height={25} color="white" /> : 'Confirm OTP'} </button>
                    </div>
                </>
                :
                <>
                    <h1 className='text-xl font-bold'>Sign Up</h1>

                    <div className="p-2 w-full md:w-1/3">
                        <div className="relative">
                            <label for="email" className="leading-7 text-sm text-gray-300">Name</label>
                            <input type="email" id="email" name="email" value={form.name} onChange={(e) => setform({ ...form, name: e.target.value })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div className="p-2 w-full md:w-1/3">
                        <div className="relative">
                            <label for="email" className="leading-7 text-sm text-gray-300">Mobile No.</label>
                            <input type={"number"} id="email" name="email" value={form.mobile} onChange={(e) => setform({ ...form, mobile: e.target.value })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/3">
                        <div className="relative">
                            <label for="email" className="leading-7 text-sm text-gray-300">Password</label>
                            <input type="email" id="email" name="email" value={form.password} onChange={(e) => setform({ ...form, password: e.target.value })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                            {loading ? <TailSpin height={25} color="white" /> : 'Sign up'} </button>
                    </div>
                </>
            }

            <div>
                <p>Already have account ?<Link to={'/login'}> <span className='text-blue-500'>Login</span></Link></p>
            </div>
        </div>
    )
}

export default Sign;