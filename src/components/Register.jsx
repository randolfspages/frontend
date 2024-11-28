import React, {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../redux/features/auth/authApi';


const Register = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerUser, {isLoading}] = useRegisterUserMutation();
    const navigate = useNavigate()


    const habdleRegister = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
            username,
        }
        try {
            await registerUser(data).unwrap();
            alert('Registeration successful!')
            navigate('/')
        } catch (error) {
            setMessage('Registration failed')
        }
    }

  return (
    <section className='h-screen flex items-center justify-center'>
        <div className='max-w-sm shadow bg-white mx-auto p-8'>
            
            <h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
            
            <form onSubmit={habdleRegister} 
                  className="space-y-5 mx-w-sm mx-auto pt-8">
                    <input
                    onChange={(e) => setUsername(e.target.value)} 
                    className='w-full bg-gray focus:outline-none px-5 py-3' 
                    type="username" 
                    name='username' 
                    id='username' 
                    placeholder='Username' 
                    required />
                    
                    <input
                    onChange={(e) => setEmail(e.target.value)} 
                    className='w-full bg-gray focus:outline-none px-5 py-3' 
                    type="email" 
                    name='email' 
                    id='email' 
                    placeholder='Email Address' 
                    required />
                    
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full bg-gray focus:outline-none px-5 py-3' 
                    type="password" 
                    name='password' 
                    id='password1' 
                    placeholder='Password' 
                    required />
                    
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full bg-gray focus:outline-none px-5 py-3' 
                    type="password" 
                    name='password' 
                    id='password2' 
                    placeholder='Confirm password' 
                    required />

                    {
                        message && <p className='text-red-700'>{message}</p>
                    }

                    <button className='w-full mt-5 bg-red-700 text-white hover:bg-green-700 font-medium py-3 rounded-md' 
                            type='submit'>
                        Register
                    </button>
            </form>
            <p className='my-5 text-sm italic text-center'>
                Already have an account? Please 
                <Link to='/login' 
                      className='hover:underline text-red-700 px-2'>
                        Click here to Login
                </Link>
            </p>

        </div>
   </section>
  )
}

export default Register