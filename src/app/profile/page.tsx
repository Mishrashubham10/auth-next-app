'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();

  const [data, setData] = useState("");

  const handleLogout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout successfull');
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me")
    console.log(res.data)
    setData(res.data.data._id)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className='rounded bg-green-500 py-1 px-4'>{data ? (
        <Link href={`/profile/${data}`}>{data}</Link>
      ) : "Nothing"}</h2>
      <hr />
      <button
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
      <button
        className="bg-purple-500 mt-4 hover:bg-purple-700 text-white font-bold py-1.5 px-4 rounded"
        onClick={getUserDetails}
      >
        User Details
      </button>
    </div>
  );
}