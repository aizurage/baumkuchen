import { Link } from "@remix-run/react";

export default function AnswerPage() {
  return (
    <main>
        
        <h1 style={{ color: 'green', fontSize : 50}}>Answer Page</h1>
        <p style={{fontSize : 30 }}> 回答画面 </p>

        <Link to="/test/game/cardPage" className="text-red-600 underline">
        - カード画面へ
        </Link>
        
        <p></p>

        <p>test.game.cardPage</p>
        <p>カードを表示する画面になる予定です</p>
        
      </main>
  );
}