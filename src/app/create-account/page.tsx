"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import devlinkLogo from '/public/devlink-logo.svg';
import envelopeIcon from '/public/envilope.svg';
import lockIcon from '/public/padlock.svg';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// Function to handle user registration
const registerUser = async (email: string, password: string, router: ReturnType<typeof useRouter>) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered >>", userCredential.user);
    // Success notification (replace with your own notification logic)
    alert("Registration successful!");
    router.push("/login");
  } catch (error) {
    console.error(error);
    // Error notification (replace with your own notification logic)
    alert("Error in registration. Please try again.");
  }
};

// Create Account component
const CreateAccount = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const confirmPassword = (form.elements.namedItem('confirm-password') as HTMLInputElement).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    registerUser(email, password, router);
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
              Create Account
            </h1>
            <p className='mt-2 text-sm font-light'>
              Let’s get you started sharing your links!
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
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create password</label>
                <input type="password" name="password" id="password" placeholder="At least 8 characters" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 w-full pl-10 pr-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-2 dark:focus:border-purple" required />
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
              <div className='relative'>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" placeholder="At least 8 characters" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 w-full pl-10 pr-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-2 dark:focus:border-purple" required />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Image 
                    className='mt-8'
                    src={lockIcon}
                    alt="Confirm password"
                    width={15}
                    height={15}
                  />  
                </div>
              </div>
              <small>Password must contain at least 8 characters</small>
              <button type="submit" className="w-full text-white bg-purple hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Create new account</button>
              <p className="text-sm font-light text-gray-900 dark:text-gray-400 text-center">
                Already have an account? <a href="/login" className="font-light text-purple hover:underline dark:text-purple-900">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;
