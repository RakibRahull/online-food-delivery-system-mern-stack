import React from 'react'
import { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

function Singup() {
  const primaryColor = '#6AB04A'
  const hoverColor = '#0056b3'
  const bgColor = '#F6FFF8'
  const borderColor = '#ced4da'
  const [showPassword, setShowPassword] =useState(false)

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' style=
    {{backgroundColor: bgColor}}>
     <div className={'bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]'} style={{
      border: `1px solid ${borderColor}`
     }}>
       <h1 className={'text-3xl font-bold mb-2'} style={{color: primaryColor}}>Khuda Lagse
       </h1>
       <p className='text-gray-600 mb-8'>Your cravings deserve the best—start here
       </p>

      {/* fullName */}

      <div className='mb-4'>
        <label htmlFor='fullName' className='block text-gray-700 font-medium mb-1'>
        Full Name</label>
        <input type="text" className='w-full border rounded-lg px-3 py-2 focus:outline-none
        focus:border-green-500' placeholder= 'Enter your full name' style={{ border: `1px
        solid ${borderColor}`}} />
      </div>

        {/* E-mail */}

      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-medium mb-1'>
        E-mail</label>
        <input type="email" className='w-full border rounded-lg px-3 py-2 focus:outline-none
        ' placeholder= 'Enter your E-mail' style={{ border: `1px
        solid ${borderColor}`}} />
      </div>

        {/* Mobile Number */}

      <div className='mb-4'>
        <label htmlFor='mobileNumber' className='block text-gray-700 font-medium mb-1'>
        Mobile Number</label>
        <input type="tel" className='w-full border rounded-lg px-3 py-2 focus:outline-none
        ' placeholder= 'Enter your mobile number' style={{ border: `1px
        solid ${borderColor}`}} />
      </div>

        {/* Password */}

      <div className='mb-4'>
        <label htmlFor='password' className='block text-gray-700 font-medium mb-1'>
        Password</label>
        <div className='relative'>
          <input type={`${showPassword? "text": "password"}`} className='w-full border rounded-lg px-3 py-2 focus:outline-none
          ' placeholder= 'Enter your password' style={{ border: `1px
          solid ${borderColor}`}} />

        <button className='absolute right-3 cursor-pointer top-[14px] text-gray-500' 
        onClick={() => setShowPassword(prev=>!prev)}>
          {!showPassword?<FaEye />:<FaEyeSlash />}
        </button>
        </div>
        </div>


     </div>
    </div>
  )
}


export default Singup