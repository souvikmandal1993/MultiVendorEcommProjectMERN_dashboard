import React, { useState } from 'react';

import { FaEyeSlash, FaEye } from 'react-icons/fa';

import useShowpassword from '../../hooks/myhooks/Showpassword';

const AdminLogin = () => {
  const [passwordVisible, togglePasswordVisibility] = useShowpassword();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
          <div className='h-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px]'>
              <img
                className='w-full h-full'
                src='http://localhost:3000/images/logo.png'
                alt='eshop_image'
              />
            </div>
          </div>
          <form onSubmit={submit}>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                type='text'
                name='email'
                placeholder='email'
                id='email'
                onChange={inputHandle}
                value={state.email}
                required
              ></input>
            </div>

            <div className='flex flex-col w-full gap-1 mb-3 relative'>
              <label htmlFor='password'>Password</label>
              <input
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                type={passwordVisible ? 'text' : 'password'}
                name='password'
                placeholder='password'
                onChange={inputHandle}
                id='password'
                value={state.password}
                required
              ></input>
              <div
                className='absolute top-[25px] bottom-0 right-0 pr-3 flex items-center text-gray-200 cursor-pointer'
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <button className='bg-slate-800 w-full hover:shadow-blue-300/100 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
              LogIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
