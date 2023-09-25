import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
} from "@remix-run/react";

import QRCodePage from './QR';

import { getPosts } from "~/models/post.server";
import './CSS/postNew.css';



export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function PostAdmin() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Blog Admin
      </h1>
            {posts.map((post) => (
             <div style={{width :335,marginLeft : 'auto', marginRight: 'auto',borderRadius: 10,overflow:'hidden'}}>
             <p style={{ backgroundColor: '#D7EEFF', height: 50, fontSize: 30, textAlign: 'center',color:'#FFFFEE',}}>{post.title}</p>
             <div style={{ backgroundColor: '#EEFFFF',color:'dodgerblue'}}>
               <p style = {{ fontSize: 20, fontWeight:'bold'}}> {post.slug}</p>
               <p style = {{margin: 20}}></p>
               <p style = {{margin: 20}}>{post.markdown}</p>
               <QRCodePage />
             </div>
             <br></br><br></br>
             </div>
            ))}
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
  );
}


/*{ game !=="" && (
        <div style={{width :335,marginLeft : 'auto', marginRight: 'auto',borderRadius: 10,overflow:'hidden'}}>
          <p style={{ backgroundColor: '#D7EEFF', height: 50, fontSize: 30, textAlign: 'center',color:'#FFFFEE',}}>{game}</p>
          <div style={{ backgroundColor: '#EEFFFF',color:'dodgerblue'}}>
            <p style = {{ fontSize: 20, fontWeight:'bold'}}>　{location}　　　　{time}~</p>
            <p style = {{margin: 20}}></p>
            <p style = {{margin: 20}}>{description}</p>
            <QRCodePage />
          </div>
        </div>*/