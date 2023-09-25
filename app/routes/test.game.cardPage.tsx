import { Link } from "@remix-run/react";
import { useState } from "react";
import './CSS/CardPage.css';

export default function CardPage() {

  const RADIO_VALUES = ["気候", "方言", "たべもの"];

  const [selectedRadioBtnValue, setSelectedRadioBtnValue] = useState("");
  
  const onRadioBtnChanged = (e) => setSelectedRadioBtnValue(e.target.value);
  return (
    <main>
        <h1 style={{ color: 'green', fontSize : 50}}>Card Page</h1>
        <p style={{fontSize : 30 }}> カード画面 </p>

        <Link to="/test/game" className="text-red-600 underline">
         - ゲーム入口へ戻る
        </Link>
        <p></p>

        <Link to="../quiz" className="text-red-600 underline">
        - クイズに進む  
        </Link>

        <p>test.game.cardPage</p>
        <p>カードを表示する画面になる予定です</p>

        <div className="block" style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <div style={{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>方言</div> */}
          {/* <div style={{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>気候</div> */}
          {/* <div style={{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>たべもの</div> */}
          
          <p>選択されたラジオボタン：{selectedRadioBtnValue}</p>
          {RADIO_VALUES.map((radioValue) => (
           <p>
           <label className="label" key={radioValue}>
            <input
              className="button"
              type="radio"
              value={radioValue}
              name="sample"
              onChange={onRadioBtnChanged}
            />
            {radioValue}
            </label>
          </p>
        ))}
        </div>
        <Link className="link" to="../test/game/AnswerPage">回答ページへ移動</Link>
      </main>
  );
}
