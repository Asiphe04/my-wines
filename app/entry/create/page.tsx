import React from 'react'
import {Consumed} from '@prisma/client'
import { redirect } from 'next/navigation'

async function createEntry(data:FormData) {
    "use server"
const formData={
    id:data.get("id")!.toString(),
    name: data.get("name")!.toString(),
    year:data.get("year")!.toString(),
    type:data.get("type")!.toString(),
    varietal:data.get("varietal")!.toString(),
    rating:data.get("rating")!.toString(),
    Date_consumed:data.get("Date_consumed")!.toString(),
    consumed:data.get("consumed")! as Consumed,
}
await prisma.entry.create({data:formData})
redirect('/')
}

export default function CreatePage() {
    const consumeds = Object.values(Consumed)
  return (
    <form action={createEntry}>

<label htmlFor="id">id:</label>
        <input type="text" name='id' id='id' placeholder='id' />

        <label htmlFor="name">name:</label>
        <input type="text" name='name' id='name' placeholder='name' />
   
        <label htmlFor="year">year:</label>
        <input type="text" name='year' id='year' placeholder='year' />

        <label htmlFor="type">type:</label>
        <input type="text" name='type' id='type' placeholder='type' />

        <label htmlFor="varietal">varietal:</label>
        <input type="text" name='varietal' id='varietal' placeholder='varietal' />

        <label htmlFor="rating">rating:</label>
        <input type="text" name='rating' id='rating' placeholder='rating' />

        <label htmlFor="Date_consumed">Date_consumed:</label>
        <input type="date" name='Date_consumed' id='Date_consumed' placeholder='Date_consumed' />

    <select name="consumed" >
        <option value="" disabled selected>Y/N</option>
        {consumeds.map((consumed, idx)=>(
            <option value={consumed} key={idx}>{consumed}</option>
        ))}
    </select>
    <button type="submit">Submit</button>
    </form>
  )
}
