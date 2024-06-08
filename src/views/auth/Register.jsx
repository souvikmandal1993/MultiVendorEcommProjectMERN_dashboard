import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
          <h2 className='text-xl mb-3 font-bold'>Welcome to ECommerce</h2>
          <p className='text-sm mb-3 font-medium'>
            Please Regester Your Account
          </p>
          <form>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='name'>Name</label>
              <input
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                type='text'
                name='name'
                placeholder='name'
                id='name'
                required
              ></input>
            </div>

            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                type='text'
                name='email'
                placeholder='email'
                id='email'
                required
              ></input>
            </div>

            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                type='password'
                name='password'
                placeholder='password'
                id='password'
                required
              ></input>
            </div>

            <div className='flex items-center w-full gap-3 mb-3'>
              <input
                className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500'
                type='checkbox'
                name='checkbox'
                id='checkbox'
              />
              <label htmlFor='checkbox'>
                I agree to privacy policy and terms
              </label>
            </div>
            <button className='bg-slate-800 w-full hover:shadow-blue-300/100 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
              Sing-Up
            </button>
            <div className='flex items-center mb-3 gap-3 justify-center'>
              <p>
                All ready have an account ?
                <Link className='font-bold pl-2' to='/login'>
                  Sign-In
                </Link>
              </p>
            </div>
            <div className='w-full flex justify-center items-center mb-3'>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
