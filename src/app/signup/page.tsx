'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { axios } from 'axios';

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="p-6 flex flex-col items-start gap-[2px] rounded-lg shadow-md bg-red-400">
        <h1>Signup</h1>
        <hr className='mt-3' />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={handleChange}
          placeholder="username"
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          placeholder="email"
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        />
        <button
          className="p-1.5 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          onClick={handleSignUp}
        >
          Signup here
        </button>
        <Link href="/login">Visit Login Page</Link>
      </div>
    </div>
  );
}
