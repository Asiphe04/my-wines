
import EntryCard from "@/components/EntryCard";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import '@/app/globals.css'

const Wines = ({ entries }) => {
  return (
    <div>
      <Navbar/>
      <h1>Wines</h1>
      <EntryCard entries={entries} />
    </div>
  );
};

export async function getStaticProps() {
  const entries = await prisma.entry.findMany({});
  return {
    props: { entries },
    revalidate: 10,
  };
}

export default Wines;




