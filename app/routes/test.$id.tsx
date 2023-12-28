import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import invariant from "tiny-invariant";

import { getPost } from "~/models/post.server";
import { getEvent, getParticipantsFromEventId } from "~/models/test.server";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.id, "params.id is required" );
  console.log(params.id);
  const post = await getEvent(parseInt(params.id));
 
  invariant(post, `Post not found: ${params.id}`);
  const participants = await getParticipantsFromEventId(post.id)

  const html = marked(post.description);
  return json({ html, post , participants});
};

export default function PostSlug() {
  const { html, post, participants } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {post.title}
      </h1>
      <div>
      <p>参加者</p>
      {participants.map((part) => (
          <p>{part.userid}</p>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
