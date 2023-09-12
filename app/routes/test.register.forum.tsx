import { Link } from "@remix-run/react";

export default function Forum() {
  return (
    <main>
        
        <h1 style={{ color: 'green', fontSize : 50}}>Forum Page</h1>
        <p style={{fontSize : 30 }}>掲示板</p>

        <Link to="/test/game/cardPage" className="text-red-600 underline">
        - ゲーム新規登録へのリンク
        </Link>
        
        <p></p>

        <Link to="/test/register" className="text-red-600 underline">
        - ゲーム登録入口へのリンク
        </Link>

        <p>test.postNew.tsx</p>
        <p>登録されたゲーム登録を表示する掲示板です</p>
        
      </main>
  );
}