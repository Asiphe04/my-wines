"use client";
import React, { useEffect } from 'react'
import '@/app/globals.css'
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';

const home = () => {
  const router = useRouter();

  useEffect(() => {
    const storage = localStorage.getItem("info");
    const logged = storage ? localStorage.getItem("key") : null;

    // if (!logged) {
    //   console.log("Information not found");
    //   router.push("/login");
    // }

    const cookies = parseCookies();
    const token = cookies['token'];

    if (!token) {
      console.log("Token not found");
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <h1 className="font-extralight text-cyan-800 text-xl">Hello, world!</h1>
    </>
  );
};

export default home;