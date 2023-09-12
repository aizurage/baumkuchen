import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";


import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
    const { posts } = useLoaderData<typeof loader>();
    return (
      <main>
        <h1 style={{ color: 'pink', fontSize : 50}}>Test First Page</h1>
        <Link to="/test/game" className="text-red-600 underline">
         - ゲームへのリンク
        </Link>

        <p></p>

        <Link to="register" className="text-red-600 underline">
         - ゲーム登録 & 掲示板へのリンク
        </Link>
        
        <p>/app/route/test._index.tsx</p>
      </main>
    );
  }