"use client";
import React, { useEffect } from 'react'
import '@/app/globals.css'
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';

export const revalidate = 10;


const home = () => {
  
  const router = useRouter();

  useEffect(() => {
    const storage = localStorage.getItem("info");
    const logged = storage ? localStorage.getItem("key") : null;


    const cookies = parseCookies();
    const token = cookies['token'];

    if (!token) {
      console.log("Token not found");
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <h1 className="text-white">Hello, world!</h1>
    </>
  );
};

export default home;