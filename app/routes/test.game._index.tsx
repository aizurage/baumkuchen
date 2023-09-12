import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";


import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function GameIndex() {
    const { posts } = useLoaderData<typeof loader>();
    return (
      <main>
        <h1 style={{ color: 'pink', fontSize : 50}}>Game Index Page</h1>
        <p style={{fontSize : 30 }}> ゲーム入口（リンクがあるだけ） </p>
        
        <Link to="cardPage" className="text-red-600 underline">
         -カード画面へのリンク(Link to the card page) 
        </Link>

        <p></p>

        <Link to="/quiz" className="text-red-600 underline">
         -回答画面へのリンク
        </Link>

        <p></p>

        <Link to="/test" className="text-red-600 underline">
         -入口に戻る
        </Link>
        
        <p>/app/route/test._index.tsx</p>
      </main>
    );
  }