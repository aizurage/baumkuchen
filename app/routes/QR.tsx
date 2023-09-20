import { useState } from 'react';
import QRCode from 'qrcode.react';

export default function QRCodePage() {
    const [showQR, setShowQR] = useState(false);
    const targetURL = 'http://192.168.10.101:3000/test/game/CardPage';

    return (
        <div>
            {showQR ? 
                (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <QRCode value={targetURL} alt="QR code for Card Page" />
                    </div>
                ) :
                (
                    <button 
                        onClick={() => setShowQR(true)} 
                        style={{
                            backgroundColor: '#D7EEFF', 
                            width: 50,
                            height: 25,
                            marginLeft: 250,
                            borderRadius: 50,
                            border: 'none',
                            cursor: 'pointer',
                            outline: 'none'
                        }}
                    >
                        QR
                    </button>
                )
            }
        </div>
    )
}
