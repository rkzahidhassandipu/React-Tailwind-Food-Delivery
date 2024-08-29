import React, { useState } from 'react'
import {assets} from "../../assets/assets"

const Login = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='flex absolute w-full justify-center items-center min-h-dvh '>
        <form action="" className='bg-slate-100 p-10 rounded'>
            <div className='flex flex-row justify-between my-5'>
                <h2>{currState}</h2>
                <img className='h-5 cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='flex flex-col'>
                {currState === "Login"?null: <input className='mt-5 p-2 border rounded' type='text' placeholder='Your name' required />}
                <input className='mt-5 p-2 border rounded' type="email" placeholder='Your email' required />
                <input className='mt-5 p-2 border rounded' type="password" placeholder='Password' required />
            </div>
            <button className='mt-5 w-full bg-orange-400 font-semibold text-xl text-white py-2 rounded'>{currState === "Sign Up"?"Create account":"Login"}</button>
            <div className='flex flex-row mt-5'>
                <input className='mr-2 cursor-pointer' type="checkbox" required />
                <p>By continuing, agree to the terms of use & privacy policy.</p>
            </div>
            {
                currState === "Login"?
                <p className='mt-5 text-center'>Create a new account? <span className='font-medium text-orange-400 underline cursor-pointer' onClick={() => setCurrState("Sign Up")}>Click here</span></p>:
                <p className='mt-5 text-center'>Already have an account? <span className='font-medium text-orange-400 underline cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default Login