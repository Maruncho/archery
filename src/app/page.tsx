import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 justify-center bg-slate-900 text-white">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Archery
      </h1>
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </main>
  );
}
