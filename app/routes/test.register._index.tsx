import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";


import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function RegisterIndex() {
    const { posts } = useLoaderData<typeof loader>();
    return (
      <main>
        <h1 style={{ color: 'pink', fontSize : 50}}>Register Index</h1>
        <p style={{fontSize : 30 }}> ゲーム登録入口（リンクがあるだけ） </p>
        
        <Link to="postNew" className="text-red-600 underline">
         -ゲーム新規登録へのリンク
        </Link>

        <p></p>

        <Link to="forum" className="text-red-600 underline">
         -掲示板へのリンク
        </Link>

        <p></p>

        <Link to="/test" className="text-red-600 underline">
         -入口に戻る
        </Link>
        
        <p>/app/route/test.register._index</p>
      </main>
    );
  }