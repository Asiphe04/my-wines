import React from 'react'
import { Consumed } from '@prisma/client'
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
        <label htmlFor="title">Title:</label>
        <input type="text" name='title' id='title' placeholder='title' />
   
        <label htmlFor="content">COntent:</label>
        <textarea  name='content' id='content' placeholder='Content' />
    
    <select name="consumed" >
        <option value="" disabled selected>Slelect A MOOD</option>
        {consumeds.map((consumed, idx)=>(
            <option value={consumed} key={idx}>{consumed}</option>
        ))}
    </select>
    <button type="submit">Submit</button>
    </form>
  )
}
