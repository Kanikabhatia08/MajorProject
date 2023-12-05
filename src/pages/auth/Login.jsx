import React, { useRef, useState } from 'react'
import logo from "../../assets/logo.png"
import { publicApi } from '../../utils/server.utils';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/Slices/UserSlice';

export default function Login() {
    let mailRef = useRef();
    let passwordRef = useRef();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const addData = (user) => {
        dispatch(addUser(user));
    }
    const navigate = useNavigate()
    const handleSignin = (e) => {
        setLoading(true)
        e.preventDefault();
        publicApi.post("/api/v1/login", {
            email: mailRef.current.value,
            password: passwordRef.current.value
        }).then((res) => {
            addData(res.data.user)
            e.target.reset();
            navigate('/')
            toast.success("Logged In successfully")
        }).catch((err) => {
            toast.error(err.message)
            console.log(err);
        }).finally(() => setLoading(false))
    }
    return (
        <div className='w-screen bg-cream text-brown h-screen font-coro flex flex-col gap-10 mb-10 items-center justify-center'>
            <div>
                <img width={200} src={logo} alt='Logo' />
            </div>
            <h1 className='font-bold text-5xl'>Login to Continue!</h1>
            <form onSubmit={handleSignin} method="post" className='w-[30%] flex flex-col gap-5'>
                <div className='flex flex-col gap-1 '>
                    <label htmlFor='email'>Email</label>
                    <input type="email" ref={mailRef} id="email" name="email" className='w-full py-1.5 px-2 rounded-md border-2 border-lightbrown' />
                </div>
                <div className='flex flex-col gap-1 '>
                    <label htmlFor='password'>Password</label>
                    <input type="password" ref={passwordRef} id="password" name="password" className='w-full py-1.5 px-2 rounded-md border-2 border-lightbrown' />
                </div>
                <button disabled={loading} type="submit" className='bg-brown text-white rounded-md font-semibold px-3 py-2 my-3' >
                    Submit
                </button>
            </form>
            <p>Not having an account? <Link to={"/signup"} className='font-bold text-brown'>SignUp</Link></p>
        </div>
    )
}
