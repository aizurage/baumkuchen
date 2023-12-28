import type { ActionArgs } from "@remix-run/node";
import { useState } from 'react';
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigation
} from "@remix-run/react";
import invariant from "tiny-invariant";

import { createPost } from "~/models/post.server";
import './CSS/postNew.css'
import { createEvent } from "~/models/test.server";
import { useOptionalUser } from "~/utils";

export const action = async ({ request }: ActionArgs) => {
  // TODO: remove me
  await new Promise((res) => setTimeout(res, 1000));

  const formData = await request.formData();

  const title = formData.get("title");
  const description = formData.get("description");
  const creatorid = formData.get("creatorid");
  
  const errors = {
    title: title ? null : "Title is required",
    description: description ? null : "description is required",
    creatorid: creatorid ? null : "creatorid is required",
  };
  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  );
  if (hasErrors) {
    return json(errors);
  }

  invariant(
    typeof title === "string",
    "title must be a string"
  );
  invariant(
    typeof description === "string",
    "slug must be a string"
  );
   invariant(
    typeof creatorid === "string",
    "creatorid must be a string"
  );

  await createEvent({ title, description, creatorid });

  return redirect("/test/register/forum");
};

const inputClassName =
  "w-full rounded border border-gray-500 px-2 py-1 text-lg";

export default function NewPost() {
  const errors = useActionData<typeof action>();

  const navigation = useNavigation();
  const isCreating = Boolean(
    navigation.state === "submitting"
  );
  const user = useOptionalUser();
  const creatorid = user.id;
  console.log(creatorid);


  const [selectedGame, setSelectedGame] = useState("")


  return (    
    <Form method="post">
      <h1 style={{fontSize : 30, marginLeft: '90px', marginTop: '30px' }}>ゲームの登録</h1>
      <br></br>

      <div>
        <p>テンプレートを選んでください</p>
        <br></br>
      </div>

      <p>
        <label style={{ width: '10px' }}>
          タイトル:{" "}
          <br></br>
          {errors?.title ? (
            <em className="text-red-600">{errors.title}</em>
          ) : null}
          <input type="text" name="title" className={inputClassName} />
        </label>
      </p>
      <br></br>
      <p>
        <label style={{ width: '10px' }}>
          詳細:{" "}
          <br></br>
          {errors?.description ? (
            <em className="text-red-600">{errors.description}</em>
          ) : null}
           <textarea name="description" className={inputClassName} />
        </label>
      </p>
      <br></br>
       <p>
        <label style={{ width: '10px' }}>
          <br></br>
          {errors?.creatorid ? (
            <em className="text-red-600">{errors.creatorid}</em>
          ) : null}
          <input type="hidden" name="creatorid" value={creatorid} />
        </label>
      </p>  
      <br></br>
        <p>
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600
           focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating}
          >
          {isCreating ? "Creating..." : "Create Post"}
          Create Post
        </button>
      </p>
    </Form>
  );
}