export const revalidate = 10;
import EntryCard from "@/components/EntryCard";
import prisma from "@/lib/prisma";
export default async function Home() {
  const entries= await prisma.entry.findMany() 
 
  return (
    <>
    {entries.map((entry)=>(
   <EntryCard key={entry.id} {...entry} />
   ))}
    </>
  );
}
