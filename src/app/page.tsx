/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
/* eslint-disable @typescript-eslint/unbound-method */

"use client"
import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/react";
import PromptCard from "./_components/comps/prompt-card";
import { SideBar } from "./_components/comps/sidebar";
import { useSearchParams } from "next/navigation";

export default function Home() {
  noStore();
  const searchParams = useSearchParams()
  const param = searchParams.get('category')
 
  function getData() {
      if (param === null){
        const res = api.post.getAll.useQuery()
        return res
      }
      else {
        const res = api.post.getLatest.useQuery(param)
        return res
      }

     
  }
  const res = getData()
  const posts = res.data
  
if (posts?.length === 0){
  return (
    <>
      <SideBar  />
      <main className="flex min-h-screen flex-col items-center justify-center text-neutral-600">
     
        <div className="grid grid-cols-3 gap-8">
            Nothing to see here yet
        </div>
    
      </main>
    </>
  );
}
else {
  return (
    <>
      <main className="lg:grid xl:grid-cols-[200px_1fr] lg:grid-cols-[120px_1fr] flex mx-auto justify-center">
      <SideBar />
        <div className="grid  xl:grid-cols-3 sm:grid-cols-2 gap-10 lg:pt-32 pt-8 mx-auto">
          {posts?.map((post) => (
            <PromptCard title={post.title} desc={post.desc} category={post.category} id={post.id} authorImage={post.createdBy.image as string} authorName={post.createdBy.name as string} prompt={post.prompt} key={post.id}/>
          ))}
          </div>
      </main>
    </>
  );
}
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xl">
//       {latestPost ? (
//         <><p className="truncate">Your most recent post: {latestPost.title}</p><p> {latestPost.category[0]?.name} </p></>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}
//       <CreatePost />
//     </div>
//   );
// }
