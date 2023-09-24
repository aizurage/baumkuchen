import React, { useState } from 'react';
import { userdata } from '../../data/userdata';
import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { prefectures } from "../../data/prefectures";

import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";



export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json({
      hometown: existingUser.hometown,
    });
  } else {
    return json(
      {
        errors: {
          email: "A user does not exist with this email",
        },
      },
      { status: 404 },
    );
  }
};



export default function Quiz() {
  const [email, setEmail] = useState("");
  const [selectedPrefecture, setSelectedPrefecture] = useState<string | null>("");
  const [userExists, setUserExists] = useState<boolean>(true);
  const actionData = useActionData<typeof action>();  
  const emailRef = useRef<HTMLInputElement>(null);

  const handleEmailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    console.log("frag1"); 
    const user = actionData?.hometown;;
    console.log("frag2");
    if (user) {
      setSelectedPrefecture(user.hometown);
      setUserExists(true);
    } else {
      setSelectedPrefecture(null);
      setUserExists(false);
    }
  }

  const handleCheckUser = async () => {
    // バックエンドにリクエストを送信してユーザー情報を取得
    const response = await fetch("/your-endpoint", {
      method: "POST",
      body: new URLSearchParams({ email: email })
    });
    const data = await response.json();
  
    if (data.hometown) {
      setSelectedPrefecture(data.hometown);
      setUserExists(true);
    } else {
      setSelectedPrefecture(null);
      setUserExists(false);
    }
  }

  return (
    <div>
      <h1>都道府県クイズ！！</h1>
      <h1>相手のメールアドレスを入力してください</h1>
      <input 
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="メールアドレスを入力"
        style={{ width: "100%", maxWidth: "300px",height: "25px" }}
      />
      <button onClick={handleCheckUser}>ユーザーを確認</button>
    
      {userExists ? (
        selectedPrefecture !== "" && <Answer correctAnswer={selectedPrefecture} />
      ) : (
        <p>ボタンをおしても画面が変わらないなら、そのメールアドレスは存在しません。</p>
      )}

    </div>
  )
}

type AnswerProps = {
  correctAnswer: string;
}

export function Answer({ correctAnswer }: AnswerProps) {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");

  return (
    <div>
      <h1>正解は？</h1>

      {/* 都道府県のドロップダウンリスト */}
      <select 
        value={selectedPrefecture} 
        onChange={(e) => setSelectedPrefecture(e.target.value)}
      >
        <option value="" disabled>選択してください</option>
        {prefectures.map(prefecture => (
          <option key={prefecture} value={prefecture}>
            {prefecture}
          </option>
        ))}
      </select>
      <p></p>
      {/* 回答ボタン */}
      {selectedPrefecture !== "" && (
        <Link to={selectedPrefecture === correctAnswer ? "/countdown?answer=A" : "/countdown?answer=B"}>
          ここをクリックして解答確定
        </Link>
      )}
    </div>
  );
}
