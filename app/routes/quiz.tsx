import { useState } from 'react';
import { Link } from "@remix-run/react";
import { prefectures } from '../../data/prefectures';

export default function Quiz() {
    const [selectedPrefecture, setSelectedPrefecture] = useState("");
    const [showOptions, setShowOptions] = useState(false); // 選択肢表示のトグル用
    const correctAnswer = "東京都";
  
    return (
      <div>
        <h1>都道府県クイズ: 正解は？</h1>
  
        {/* 選択肢の入力ボックス */}
        <div onClick={() => setShowOptions(!showOptions)}>
          {selectedPrefecture || "ここをクリックして都道府県を選択してください"}
        </div>
  
        {/* 選択肢のリスト */}
        {showOptions && (
          <div>
            <ul>
              {prefectures.map(prefecture => (
                <li key={prefecture} onClick={() => {
                  setSelectedPrefecture(prefecture);
                  setShowOptions(false); // 選択したらリストを閉じる
                }}>
                  {prefecture}
                </li>
              ))}
            </ul>
          </div>
        )}
  
        {/* 回答ボタン */}
        <Link to={selectedPrefecture === correctAnswer ? "/correct" : "/incorrect"}>
          回答
        </Link>
      </div>
    );
  }