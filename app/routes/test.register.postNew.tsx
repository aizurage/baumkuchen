import { Link } from "@remix-run/react";

export default function PostNew() {
  return (
    <main>
        
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
        
      </main>
  );
}