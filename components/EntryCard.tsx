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
    return(
      <table>
      <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year</th>
              <th>Type</th>
              <th>Varietal</th>
              <th>Rating</th>
             {/* <th>Date Consumed</th>  */}
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{year}</td>
              <td>{type}</td>
              <td>{varietal}</td>
              <td>{rating}</td>
               {/* <td>{Date_consumed}</td>  */}
              <td>
                  {consumed}
                  <button onclick={() => deleteEntry(id)}>Delete</button>
                  <a href={`/entry/edit?id=${id}`} role='button'>Edit</a>
              </td>
          </tr>
        
      </tbody>
  </table>
  
    )
}