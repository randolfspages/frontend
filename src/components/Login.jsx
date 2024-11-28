import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';



const Login = () => {

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation()
    const navigate = useNavigate()
    
//Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
        try {
          const response = await loginUser(data).unwrap();
          const {token, user} = response
          dispatch(setUser({user}))
          console.log(response);
          alert('Login Sucessful');
          navigate('/')
        //   console.log(response);
        } 
        
        catch(error) {
            setMessage('Please provide a valid Email and Password')
        }
    }


  return (
   <section className='h-screen flex items-center justify-center'>
        <div className='max-w-sm shadow bg-white mx-auto p-8'>
            <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
            <form onSubmit={handleLogin} className="space-y-5 mx-w-sm mx-auto pt-8">
                    <input
                    onChange={(e) => setEmail(e.target.value)} 
                    className='w-full bg-gray focus:outline-none px-5 py-3' type="email" name='email' id='email' placeholder='Email Address' required />
                    
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full bg-gray focus:outline-none px-5 py-3' type="password" name='password' id='password' placeholder='Password' required />

                    {
                        message && <p className='text-red-700'>{message}</p>
                    }

                    <button className='w-full mt-5 bg-red-700 text-white hover:bg-green-700 font-medium py-3 rounded-md' type='submit'>
                        Login
                    </button>
            </form>
            <p className='my-5 text-sm italic text-center'>
                Don't have an account? <Link to='/register' className='hover:underline text-red-700 px-2'>Click here to Register</Link>
            </p>

        </div>
   </section>
  )
}

export default Login