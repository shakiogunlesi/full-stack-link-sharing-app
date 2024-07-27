// Mark this file as a Client Component
"use client";

// Import necessary modules
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import devlinkLogo from '/public/devlink-logo.svg';
import envelopeIcon from '/public/envilope.svg';
import lockIcon from '/public/padlock.svg';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// Function to handle user login
const loginUser = async (email: string, password: string, router: ReturnType<typeof useRouter>) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User >>", userCredential.user);
        // Handle success notification here
        router.push("/dashboard");
    } catch (error) {
        console.error(error);
        // Handle error notification here
    }
};

// Login component
const Login = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    loginUser(email, password, router);
  };

  return (
    <main className='bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center'>
      <div className="flex flex-col items-center px-6 py-8 w-full max-w-md">
        <div className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image 
            src={devlinkLogo}
            alt="Devlink Logo"
            width={185} 
            height={30} 
          />   
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white md:text-2xl">
              Login
            </h1>
            <p className='mt-2 text-sm font-light'>
              Add your details below to get back into the app
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className='relative mt-4'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 w-full pl-10 pr-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-2 dark:focus:border-purple" placeholder="e.g. alex@email.com" required />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Image 
                    className='mt-8'
                    src={envelopeIcon}
                    alt="Envelope Icon"
                    width={15}
                    height={15}
                  />  
                </div> 
              </div>
              <div className='relative'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 w-full pl-10 pr-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-2 dark:focus:border-purple" required />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Image 
                    className='mt-8'
                    src={lockIcon}
                    alt="Lock Icon"
                    width={15}
                    height={15}
                  />  
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-purple hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Login</button>
              <p className="text-sm font-light text-gray-900 dark:text-gray-400 text-center">
                Don’t have an account? <a href="/create-account" className="font-light text-purple hover:underline dark:text-purple-500">Create account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
