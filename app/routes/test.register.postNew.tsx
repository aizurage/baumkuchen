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
import {games} from "data/games"

export const action = async ({ request }: ActionArgs) => {
  // TODO: remove me
  await new Promise((res) => setTimeout(res, 1000));

  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
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
    typeof slug === "string",
    "slug must be a string"
  );
  invariant(
    typeof markdown === "string",
    "markdown must be a string"
  );

  await createPost({ title, slug, markdown });

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

  const [selectedGame, setSelectedGame] = useState("")


  return (    
    <Form method="post">
      <h1 style={{fontSize : 30, marginLeft: '90px', marginTop: '30px' }}>ゲームの登録</h1>
      <br></br>

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
          場所:{" "}
          <br></br>
          {errors?.slug ? (
            <em className="text-red-600">{errors.slug}</em>
          ) : null}
          <input type="text" name="slug" className={inputClassName} />
        </label>
      </p>
      <br></br>
      <p>
        <label htmlFor="markdown">
          時間・詳細:{" "}
          {errors?.markdown ? (
            <em className="text-red-600">
              {errors.markdown}
            </em>
          ) : null}
        </label>
        <br />
        <textarea
          id="markdown"
          rows={5}
          name="markdown"
          className={`${inputClassName} font-mono`}
          style={{
            border: "1px solid rgb(83, 177, 231)",
            borderRadius: "5px",
            height: "130px",
            width: "320px",
            marginTop: "20px",
            marginLeft: "30px"
          }}
        />
      </p>
      <br></br>
      <p>
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating}
          >
          {isCreating ? "Creating..." : "Create Post"}
          Create Post
        </button>
      </p>
    </Form>
  );
}