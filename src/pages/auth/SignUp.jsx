import React, { useRef } from 'react'
import { publicApi } from '../../utils/server.utils';

export default function SignUp() {
    let mailRef = useRef();
    let passwordRef = useRef();
    let nameRef = useRef();

    const handleSignin = (e) => {
        e.preventDefault();
        publicApi.post("/api/v1/signup", {
            name: nameRef.current.value,
            email: mailRef.current.value,
            password: passwordRef.current.value
        }).then((res) => {
            console.log(res.data)
            
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className='w-screen h-screen flex flex-col gap-10 items-center justify-center'>
            <h1 className='font-bold text-5xl'>SignUp to Continue!</h1>

            <form onSubmit={handleSignin} method="post" className='w-[30%] flex flex-col gap-5'>
                <div>
                    {/* logo */}
                </div>
               
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

                <button type="submit" className='bg-black text-white rounded-md font-semibold px-3 py-2'>
                    Submit
                </button>


            </form>
        </div>

    )
}
