'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const res = await axios.post('/api/users/verifyemail', { token });
      setVerified(true);
      console.log(res);
    } catch (error: any) {
      setError(error);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : 'no token'}
      </h2>
      {verified && (
        <div className="">
          <h2 className="text-2xl">Email Verified</h2>
          <Link href="/login">
            <span className="text-blue-500">Login</span>
          </Link>
        </div>
      )}
      {error && (
        <div className="">
          <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        </div>
      )}
    </section>
  );
}