import { Link } from "@remix-run/react";
import { redirect } from "@remix-run/node";

let game = '';
let location = '';
let time = '';
let description = '' ;


//postNewで登録が押されると値を代入する
export function RegisterInfo(gm : string, loc : string, t : string, des : string){
        game = gm;
        location = loc;
        time = t;
        description = des;

        return redirect("/posts/admin");
};

export default function Forum() {
  return (
    <main>
        
        <h1 style={{ color: 'green', fontSize : 50}}>Forum Page</h1>
        <p style={{fontSize : 30 }}>掲示板</p>

        <Link to="/test/register/postNew" className="text-red-600 underline">
        - ゲーム新規登録へのリンク
        </Link>
        
        <p></p>

        <Link to="/test/register" className="text-red-600 underline">
        - ゲーム登録入口へのリンク
        </Link>

        <p>test.postNew.tsx</p>
        <p>登録されたゲーム登録を表示する掲示板です</p>
        
        <br></br><br></br><br></br>

        <p>{location}</p>
        <p>{game}</p>
        <p>{time}</p>
        <p>{description}</p>
      </main>
  );
}