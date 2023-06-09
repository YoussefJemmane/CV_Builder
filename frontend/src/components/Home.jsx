import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import Navbar from './Navbar';

const Home = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">CV Builder</h1>
            <p className="py-6 text-2xl">Create a professional resume in minutes with our easy-to-use CV builder.
            </p>
            {
              user ? <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Your Logged in ! Mr : {user.name}</span>
              </div> : <form action="/create" method="get">
                <button className="btn btn-primary">
                  Start Building
                </button>
                <p className="py-6">You don't have an account ?</p>
                <a href="/register" className="btn btn-success" data-theme="dark">Register</a>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home