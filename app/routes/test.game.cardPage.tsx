import { Link } from "@remix-run/react";
import './CSS/CardPage.css';

export default function CardPage() {
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

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>方言</div>
          <div style={{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>気候</div>
          <div style={{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>たべもの</div>
        </div>
      </main>
  );
}
