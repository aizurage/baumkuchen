import { useState } from 'react';
import { Link } from "@remix-run/react";
import { locations} from '../../data/locations';
import{timeTable} from '../../data/timeTable'
import{games} from '../../data/games'
import { RegisterInfo } from './test.register.forum';
import { useNavigate } from 'react-router-dom';
import './CSS/postNew.css'



const inputClassName =
  "w-full rounded border border-gray-500 px-2 py-1 text-lg";  
    


export default function PostNew() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedGame, setSelectedGame] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate();

  function handleClick() {
    RegisterInfo(selectedGame, selectedLocation, selectedTime, description);
    navigate('/test/register/forum');
  }

  return (

      <div>
                
        <h1 style={{ color: 'green', fontSize : 50}}>Post New Page</h1>
        <p style={{fontSize : 30 }}>ゲーム新規登録 画面</p>

        <Link to="/test/register/forum" className="text-red-600 underline">
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
      <p>ゲームを選択してください</p>
      <div>
        {/* ゲーム選択肢の入力ボックス */}

        <select value={selectedGame} onChange={(event) => {
  setSelectedGame(event.target.value);
}}>
  <option value="" disabled>選択して下さい</option>
  {games.map(game => (
    <option value={game}>{game}</option>
  ))}
</select>

<br></br><br></br>

        <p>会場を選択してください</p>
        {/* 会場選択肢の入力ボックス */}
        <select value={selectedLocation} onChange={(event) => {
          setSelectedLocation(event.target.value);
        }}>
          <option value="" disabled>選択して下さい</option>
  {locations.map(location => (
    <option value={location}>{location}</option>
  ))}
        </select>

<br></br><br></br>

        <p>開催時間を選択して下さい</p>
        {/* 開催時間選択肢の入力ボックス */}
        <select value={selectedTime} onChange={(event) => {
          setSelectedTime(event.target.value);
        }}>
        <option value="" disabled>選択して下さい</option>
          {timeTable.map(time => (
            <option value={time} >{time}</option>
          ))}
        </select>

  <br></br><br></br>
                
        {/*詳細入力*/}

      
      <p>詳細を入力してください</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input />  
      </div>
    <br></br>

        {/* ボタン */}
        <button onClick={() => 
          handleClick()}>
          とうろく
        </button>

      </div>

               
    );
}

