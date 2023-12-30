import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
} from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";


import type { Event } from "@prisma/client";
import { getPosts } from "~/models/post.server";
import { getEvents } from "~/models/test.server";
import './CSS/postNew.css';
import QRCodePage from './QR';
import { joinEvent ,deleteEvent } from "~/models/test.server";
import { useOptionalUser } from "~/utils";


export const loader = async () => {
  return json({ posts: await getEvents() });
};

// async function handleJoinButtonClick(id: Event["id"]){
//   const userid = "1"; //place holder
//   await joinEvent({id, userid})
// }

// export const action = async ({ request }: ActionArgs) => {
//   // TODO: remove me
//   await new Promise((res) => setTimeout(res, 1000));
//   await deleteEvent({ });

// };

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");
  const postId = Number(formData.get("postId"));
  const userId = formData.get("userId");
  const url = new URL(request.url);
  const postid = postId;
  const userid = userId;
  // const listurl = new URL("../list");
  

  if (actionType === "delete" && postId) {

    await deleteEvent(postId);
  }

  if (actionType === "join" && postId) {
    await joinEvent({ postid, userid });
  }

  // if (actionType === "list" && postId) {
  //   listurl.searchParams.set("key", postId.toString());
  //   return redirect(listurl.pathname)
  // }

  return redirect(url.pathname);
};

export default function PostAdmin() {
  const { posts } = useLoaderData<typeof loader>();
  const user = useOptionalUser();

  // async function handleJoinButtonClick(id: Event["id"]) {
    // if (!user) return; // ユーザーチェック
    // const userid = user.id;
    // await joinEvent({ id, userid });
  // }

  // async function handleDeleteButtonClick(id: Event["id"], creatorid: Event["creatorid"]) {
  //   if (!user || creatorid !== user.id) return false;
  //   await deleteEvent({ id });
  // }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Blog Admin
      </h1>
            {posts.map((post) => (
             <div style={{width :335,marginLeft : 'auto', marginRight: 'auto',borderRadius: 10,overflow:'hidden'}}>
             <p style={{ backgroundColor: '#D7EEFF', height: 50, fontSize: 30, 
                              textAlign: 'center',color:'#FFFFEE',}}>{post.title}</p>
             <div style={{ backgroundColor: '#EEFFFF',color:'dodgerblue'}}>
               <p style = {{ fontSize: 20, fontWeight:'bold'}}> {post.creatorid}</p>
               <p style = {{margin: 20}}></p>
               <p style = {{margin: 20}}>{post.description}</p>
               <QRCodePage />
               
               {/* <form method="post">
                <input type="hidden" name="_action" value="list" />
                <input type="hidden" name="postId" value={post.id} />
                <button type="submit" style={{backgroundColor: 'lightblue', border: 'none', 
                                  padding: '10px 20px', color: 'black', cursor: 'pointer'}}>
                  See participants
                </button>      
               </form> */}

               <p>
                  <Link to={`/test/list?key=${post.id}`}>Let's see participants!!</Link>
               </p>

               <form method="post">
                <input type="hidden" name="_action" value="join" />
                <input type="hidden" name="postId" value={post.id} />
                <input type="hidden" name="userId" value={user.id} />
                {user.id != post.creatorid ? (
                <button type="submit" style={{backgroundColor: 'lightblue', border: 'none', 
                                  padding: '10px 20px', color: 'black', cursor: 'pointer'}}>
                  Join
                </button>
                ) : (<div></div>)
                }
              </form>


               {/* <button
                  style={{ backgroundColor: 'lightblue', border: 'none', 
                                padding: '10px 20px', color: 'black', cursor: 'pointer' }}
                                onClick={() => handleJoinButtonClick(post.id)}
                >
              Join
              </button> */}
              {/* <button
                  style={{ backgroundColor: 'lightblue', border: 'none', 
                                padding: '10px 20px', color: 'black', cursor: 'pointer' }}
                                onClick={() => handleDeleteButtonClick(post.id,post.creatorid)}
                >
              Delete
              </button> */}
              <form method="post">
                <input type="hidden" name="_action" value="delete" />
                <input type="hidden" name="postId" value={post.id} />
                
                <button type="submit" style={{backgroundColor: 'lightblue', border: 'none', 
                                  padding: '10px 20px', color: 'black', cursor: 'pointer'}}>
                  Delete
                </button>
              </form>

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




