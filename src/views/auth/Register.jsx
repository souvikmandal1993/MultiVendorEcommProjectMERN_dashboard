import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[350px] text-[#ffffff] p-2'>
        <div className='bg-[#6f68d1] p-4 rounded-md'>
          <h2 className='text-xl mb-3 font-bold'>Welcome to ECommerce</h2>
          <p className='text-sm mb-3 font-medium'>
            Please Register Your Account
          </p>
          <form onSubmit={submit}>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='name'>Name</label>
              <input
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                onChange={inputHandle}
                value={state.name}
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
                onChange={inputHandle}
                value={state.email}
                type='text'
                name='email'
                placeholder='email'
                id='email'
                required
              ></input>
            </div>

            <div className='flex flex-col w-full gap-1 mb-3 relative'>
              <label htmlFor='password'>Password</label>
              <input
                className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md'
                onChange={inputHandle}
                value={state.password}
                type={passwordVisible ? 'test' : 'password'}
                name='password'
                placeholder='password'
                id='password'
                required
              ></input>
              <div
                className='absolute top-[25px] bottom-0 right-0 pr-3 flex items-center text-gray-200 cursor-pointer'
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
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
              <div className='w-[10%] flex justify-center items-center'>
                <span className='pb-1'>Or</span>
              </div>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            </div>

            <div className='flex justify-center items-center gap-3'>
              <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                <span>
                  <FaGoogle />
                </span>
              </div>

              <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
