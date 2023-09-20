import { Link, } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import QRCodePage from './QR';
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
};

export default function Forum() {

  
  return (

    
    <main>        
        <h1 style={{ color: 'gray', fontSize : 50 , textAlign : 'center'}}>本日の開催予定</h1>
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
        { game !=="" && (
        <div style={{width :335,marginLeft : 'auto', marginRight: 'auto',borderRadius: 10,overflow:'hidden'}}>
          <p style={{ backgroundColor: '#D7EEFF', height: 50, fontSize: 30, textAlign: 'center',color:'#FFFFEE',}}>{game}</p>
          <div style={{ backgroundColor: '#EEFFFF',color:'dodgerblue'}}>
            <p style = {{ fontSize: 20, fontWeight:'bold'}}>{location}　　　　{time}~</p>
            <p style = {{margin: 20}}></p>
            <p style = {{margin: 20}}>{description}</p>
            <QRCodePage />
          </div>
        </div>
        )}

    </main>
  );
}