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
      <article>
        <header>
        <h2>{id}</h2>
            <h2>{name}</h2>
        </header>
        <p>{year}</p>
        <p>{type}</p>
        <p>{varietal}</p>
        <p>{rating}</p> 
        {/* <p>{Date_consumed}</p> */}
       
        <footer>
            {consumed}
            <button onClick={()=>deleteEntry(id)}>Delete</button>
          
            <a href={`/entry/edit?id=${id}`} role='button'>Edit </a>
          
          
        </footer>
      </article>
    )
}