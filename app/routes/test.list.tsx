import {useLoaderData} from "@remix-run/react";
import { getlist } from "~/models/test.server";
import { json } from "@remix-run/node";
import './CSS/postNew.css';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const value = url.searchParams.get("key");
  return json({ posts: await getlist(Number(value)) });
  
};

export default function PostAdmin() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Blog Admin
      </h1>
      {posts.map((post) => (
        <p style = {{ fontSize: 20, fontWeight:'bold'}}> {post.userid}</p>
      ))}
    </div>
    );
  

}
