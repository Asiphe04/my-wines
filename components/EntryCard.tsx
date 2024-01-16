"use client"
import {Consumed} from '@prisma/client'
import React from "react";
import { Prisma } from '@prisma/client';

type Entry = {
  id: string;
  name: string;
  year: string;
  type: string;
  varietal: string;
  rating: string;
  consumed: Consumed;
  // Date_consumed: Date;
};

type EntryCardProps = {
  entries: Entry[];
};

export default function EntryCard({ entries }: EntryCardProps) {
  async function deleteEntry(id: string) {
    await fetch(`/api/entry/delete?id=${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  }

  return (
    <div>
      {entries.map((entry) => (
        <table key={entry.id} className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Year</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Varietal</th>
              <th className="py-2 px-4 border-b">Rating</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody key={entry.id}>
            <tr className="bg-white">
              <td className="py-2 px-4 border-b">{entry.id}</td>
              <td className="py-2 px-4 border-b">{entry.name}</td>
              <td className="py-2 px-4 border-b">{entry.year}</td>
              <td className="py-2 px-4 border-b">{entry.type}</td>
              <td className="py-2 px-4 border-b">{entry.varietal}</td>
              <td className="py-2 px-4 border-b">{entry.rating}</td>
              <td className="py-2 px-4 border-b">
                {entry.consumed}
                <button
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => deleteEntry(entry.id)}
                >
                  Delete
                </button>
                <a
                  href={`/entry/edit?id=${entry.id}`}
                  role="button"
                  className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}