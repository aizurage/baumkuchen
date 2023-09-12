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
        <Link to="/test/second/third" className="text-red-600 underline">
         {'<<<'}- Link to Test Third Page
        </Link>

        <p></p>

        <Link to="second" className="text-red-600 underline">
          Link to Test Second Page -{'>>>'}
        </Link>
        
        <p>/test</p>
      </main>
    );
  }