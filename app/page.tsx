"use client"

export const revalidate = 10;
import React, { useEffect } from 'react'
import EntryCard from "@/components/EntryCard";
import { prisma } from "@/lib/prisma";
import { useRouter } from 'next/router'
import { setCookie, parseCookies, destroyCookie } from "nookies";


export default async function Home() {
  const entries = await prisma.entry.findMany();
  const redirect = () => {
    const router = useRouter()
    useEffect(() => {
      const cookie = parseCookies()
      if(!cookie){
        router.push('/login')
      }
      
    }, []);
  };

  return (
    <>
      {entries.map((entry) => (
        <EntryCard key={entry.id} {...entry} />
      ))}
    </>
  );
}
