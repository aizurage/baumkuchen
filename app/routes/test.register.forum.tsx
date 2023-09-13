import { useState } from 'react';
import { Link } from "@remix-run/react";
import { prefectures } from '../../data/prefectures';
import { locations} from '../../data/locations';
import{timeTable} from '../../data/timeTable'
import{games} from '../../data/games'
import { Form } from "@remix-run/react";

const inputClassName =
  "w-full rounded border border-gray-500 px-2 py-1 text-lg";

export default function PostNew() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedGame, setSelectedGame] = useState("")

  const [showGameOptions, setShowGameOptions] = useState(false); // 選択肢表示のトグル用
  const [showLocationOptions, setShowLocationOptions] = useState(false); 
  const [showTimeOptions, setShowTimeOptions] = useState(false); 
  

  return (

      <div>

                
        <h1 style={{ color: 'green', fontSize : 50}}>Post New Page</h1>
        <p style={{fontSize : 30 }}>ゲーム新規登録 画面</p>

        <Link to="../register/forum" className="text-red-600 underline">
        - 掲示板へ
        </Link>
        
        <p></p>

        <Link to="/test/register" className="text-red-600 underline">
        - ゲーム登録入口へのリンク
        </Link>

        <p>test.postNew.tsx</p>
        <p>新しいゲームを登録する画面です</p>
        
        <br></br><br></br>

      {/* -------------------------------------------------------------------------------------------------------------  */}

        <h1 style={{fontSize : 30 }}>ゲームの登録</h1>
  
        {/* ゲーム選択肢の入力ボックス */}
        <div onClick={() => setShowGameOptions(!showGameOptions)}>
          {selectedGame || "ゲームの種類を選んでください"}
        </div>
  
        {/* ゲームのリスト */}
        {showGameOptions && (
          <div>
            <ul>
              {games.map(game => (
                <li key={game} onClick={() => {
                  setSelectedGame(game);
                  setShowGameOptions(false); // 選択したらリストを閉じる
                }}>
                  {game}
                </li>
              ))}
            </ul>
          </div>
        )}

<br></br><br></br>

        {/* 会場選択肢の入力ボックス */}
        <div onClick={() => setShowLocationOptions(!showLocationOptions)}>
          {selectedLocation || "開催地を選んでください"}
        </div>
  
        {/* 会場のリスト */}
        {showLocationOptions && (
          <div>
            <ul>
              {locations.map(location => (
                <li key={location} onClick={() => {
                  setSelectedLocation(location);
                  setShowLocationOptions(false); // 選択したらリストを閉じる
                }}>
                  {location}
                </li>
              ))}
            </ul>
          </div>
        )}

<br></br><br></br>


        {/* 開催時間選択肢の入力ボックス */}
        <div onClick={() => setShowTimeOptions(!showTimeOptions)}>
          {selectedTime || "開始時間を選んでください"}
        </div>
  
        {/* 開催時間のリスト */}
        {showTimeOptions && (
          <div>
            <ul>
              {timeTable.map(time => (
                <li key={time} onClick={() => {
                  setSelectedTime(time);
                  setShowTimeOptions(false); // 選択したらリストを閉じる
                }}>
                  {time}
                </li>
              ))}
            </ul>
          </div>
        )}

  <br></br><br></br>
                



        {/*詳細入力*/}

      <Form method="post">
      <p>
        <label htmlFor="markdown">詳細を入力してください </label>
        <br />
        <textarea
          id="markdown"
          rows={5}
          cols={33}
          name="markdown"
          className={`${inputClassName} font-mono`}
        />
      </p>
    </Form>

    <br></br><br></br>

        {/* 回答ボタン */}
        <p>投稿</p>
      </div>
    );
}

