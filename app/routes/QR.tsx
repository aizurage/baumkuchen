import {useState} from 'react';
import QRCode from 'qrcode.react';


export default function QRCodePage() {
    const [showQR, setShowQR] = useState(false);
    const targetURL = 'http://192.168.10.101:3000/test/game/CardPage';

    return (
        <div>
            {showQR ? (<QRCode value={targetURL}/>
            ):(
                <button onClick={() => setShowQR(true)} className='place-content-center'>QRコードを表示</button>
            )}
        </div>
    )
}
