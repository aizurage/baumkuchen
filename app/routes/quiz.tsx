import { useState } from 'react';
import { Link } from "@remix-run/react";
import { prefectures } from '../../data/prefectures';

export default function Quiz() {
    const [selectedPrefecture, setSelectedPrefecture] = useState("");
    const correctAnswer = "東京都";
  
    return (
      <div>
        <h1>都道府県クイズ: 正解は？</h1>
  
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
          <Link to={selectedPrefecture === correctAnswer ? "/correct" : "/incorrect"}>
            ここをクリックして解答確定
          </Link>
        )}
      </div>
    );
}
