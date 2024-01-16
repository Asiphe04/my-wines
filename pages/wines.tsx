// export const revalidate = 10;
// import EntryCard from "@/components/EntryCard";
// import {prisma} from "@/lib/prisma";
// export default async function wines() {
//   const entries = await prisma.entry.findMany({
    
//   });
//   return (
//     <>
//       {entries.map((entry) => (
//         <EntryCard key={entry.id} {...entry} />
//       ))}
//     </>
//   );
// }

import EntryCard from "@/components/EntryCard";
import { prisma } from "@/lib/prisma";

const Wines = ({ entries }) => {
  return (
    <div>
      <h1>Login</h1>
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




