import React from 'react';

export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>UserProfile</h1>
      <hr />
      <p className="text-4xl">User Profile Siangle 
        <span className='text-black text-4xl p-2 rounded bg-orange-500 ml-2'>{params.id}</span>
      </p>
    </div>
  );
}