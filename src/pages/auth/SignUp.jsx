import React, { useRef, useState } from 'react'
import logo from "../../assets/logo.jpeg"
import { publicApi } from '../../utils/server.utils';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/Slices/UserSlice';
export default function SignUp() {
    let mailRef = useRef();
    let passwordRef = useRef();
    let nameRef = useRef();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const addData = (user) => {
        dispatch(addUser(user));
    }
    const handleSignUp = (e) => {
        setLoading(true)
        e.preventDefault();
        publicApi.post("/api/v1/signup", {
            name: nameRef.current.value,
            email: mailRef.current.value,
            password: passwordRef.current.value
        }).then((res) => {
            addData(res.data.user)
            e.target.reset()
            navigate('/')
            toast.success("User created successfully")
        }).catch((err) => {
            console.log(err);
        }).finally(() => setLoading(false))
    }
    return (
        <div className='w-screen h-screen flex flex-col gap-10 items-center justify-center'>
            <div>
                <img width={200} src={logo} alt='Logo' />
            </div>
            <h1 className='font-bold text-5xl'>SignUp to Continue!</h1>
            <form onSubmit={handleSignUp} method="post" className='w-[30%] flex flex-col gap-5'>
                <div className='flex flex-col gap-1 '>
                    <label htmlFor='name'>Name</label>
                    <input type="text" ref={nameRef} id="name" name="name" className='w-full py-1.5 px-2 rounded-md border-2 border-gray-500' />
                </div>
                <div className='flex flex-col gap-1 '>
                    <label htmlFor='email'>Email</label>
                    <input type="email" ref={mailRef} id="email" name="email" className='w-full py-1.5 px-2 rounded-md border-2 border-gray-500' />
                </div>
                <div className='flex flex-col gap-1 '>
                    <label htmlFor='password'>Password</label>
                    <input type="password" ref={passwordRef} id="password" name="password" className='w-full py-1.5 px-2 rounded-md border-2 border-gray-500' />
                </div>
                <button type="submit" disabled={loading} className='bg-black text-white rounded-md font-semibold px-3 py-2'>
                    Submit
                </button>
            </form>
            <p>Already have an account? <Link to={"/login"} className='font-bold text-slate-900'>Login</Link></p>
        </div>

    )
}
