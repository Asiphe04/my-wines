import React from 'react'
import {Consumed} from '@prisma/client'
import { redirect } from 'next/navigation'


export default async function EditPage({
  searchParams: { id },
}: {
  searchParams: { id: string };
}) {
  async function editEntry(data: FormData) {
    "use server";
    const formData={
        id:data.get("id")!.toString(),
        name: data.get("name")!.toString(),
        year:data.get("year")!.toString(),
        type:data.get("type")!.toString(),
        varietal:data.get("varietal")!.toString(),
        rating:data.get("rating")!.toString(),
        consumed:data.get("consumed")! as Consumed,
    }
    await prisma.entry.update({ data: formData, where: { id } });
    redirect("/");
  }
  const entry = await prisma.entry.findUnique({ where: { id } });
  const consumeds = Object.values(Consumed);
  return (
    <form action={editEntry}>
     <label htmlFor="id">id:</label>
      <input
        type="text"
        name="id"
        id="id"
        placeholder="id"
        defaultValue={entry?.id}
      />

      <label htmlFor="name">name:</label>
      <textarea
        name="name"
        id="name"
        placeholder="name"
        defaultValue={entry?.name}
      />
        <label htmlFor="year">year:</label>
      <textarea
        name="year"
        id="year"
        placeholder="year"
        defaultValue={entry?.year}
      />
        <label htmlFor="type">type:</label>
      <textarea
        name="type"
        id="type"
        placeholder="type"
        defaultValue={entry?.type}
      />
        <label htmlFor="varietal">varietal:</label>
      <textarea
        name="varietal"
        id="varietal"
        placeholder="varietal"
        defaultValue={entry?.varietal}
      />
        <label htmlFor="rating">rating:</label>
      <textarea
        name="rating"
        id="rating"
        placeholder="rating"
        defaultValue={entry?.rating}
      />

      <select name="consumed" defaultValue={entry?.consumed}>
        <option value="" disabled selected>
          y/n
        </option>
        {consumeds.map((consumed, idx) => (
          <option value={consumed} key={idx}>
            {consumed}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
