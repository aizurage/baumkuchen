import React, { useState } from 'react';
import { Link } from "@remix-run/react";
import { prefectures } from '../../data/prefectures';
import { userdata } from '../../data/userdata';

export default function Quiz() {
  const [userId, setUserId] = useState("");
  const [selectedPrefecture, setSelectedPrefecture] = useState<string | null>("");
  const [userExists, setUserExists] = useState<boolean>(true);

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputUserId = e.target.value;
    setUserId(inputUserId);

    const user = userdata.find(u => u.id === inputUserId);
    if (user) {
      setSelectedPrefecture(user.prefecture);
      setUserExists(true);
    } else {
      setSelectedPrefecture(null);
      setUserExists(false);
    }
  }

  return (
    <div>
      <h1>都道府県クイズ！！</h1>
      <h1>相手のユーザーIDを半角数字で入力してください</h1>
      <input 
        type="text"
        value={userId}
        onChange={handleUserIdChange}
        placeholder="ユーザーIDを入力"
        style={{ width: "100%", maxWidth: "300px",height: "25px" }}
      />
    
      {userExists ? (
        selectedPrefecture !== "" && <Answer correctAnswer={selectedPrefecture} />
      ) : (
        <p>そのユーザIDは存在しません。</p>
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
