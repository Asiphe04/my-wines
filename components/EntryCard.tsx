"use client"
import {Consumed} from '@prisma/client'
import React from "react";

type Props= {
    id: string
    name: string
    year: string
    type: string
    varietal: string
    rating: string
    consumed: Consumed
    Date_consumed: Date
}
async function deleteEntry(id:string) {
 await fetch (`/api/entry/delete?id=${id}`,{
  method: "DELETE"
 }) 
window.location.reload()
}

export default function EntryCard({id, name, year, type, varietal, rating, consumed, Date_consumed }: Props) {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Year</th>
          <th className="py-2 px-4 border-b">Type</th>
          <th className="py-2 px-4 border-b">Varietal</th>
          <th className="py-2 px-4 border-b">Rating</th>
          {/* <th className="py-2 px-4 border-b">Date Consumed</th> */}
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="py-2 px-4 border-b">{id}</td>
          <td className="py-2 px-4 border-b">{name}</td>
          <td className="py-2 px-4 border-b">{year}</td>
          <td className="py-2 px-4 border-b">{type}</td>
          <td className="py-2 px-4 border-b">{varietal}</td>
          <td className="py-2 px-4 border-b">{rating}</td>
          {/* <td className="py-2 px-4 border-b">{Date_consumed}</td> */}
          <td className="py-2 px-4 border-b">
            {consumed}
            <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded" onClick={() => deleteEntry(id)}>
              Delete
            </button>
            <a href={`/entry/edit?id=${id}`} role="button" className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
  
}