'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/users/login', user);
      console.log('Login success', res.data);
      toast.success('Login Successfully');
      router.push('/profile');
    } catch (error: any) {
      console.log('Login failed', error?.message);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email.length > 0 && user?.password.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="p-6 flex flex-col items-start gap-[2px] rounded-lg shadow-md bg-red-400">
        <h1>{loading?"Processing":"Login"}</h1>
        <hr className="mt-3" />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          placeholder="email"
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        />
        <button
          className="p-1.5 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          onClick={handleLogin}
        >
          {btnDisabled ? 'No Login' : 'Login'}
        </button>
        <Link href="/signup">Visit Signup Page</Link>
      </div>
    </div>
  );
}