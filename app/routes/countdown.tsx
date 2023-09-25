import { useEffect, useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { Meta } from '@remix-run/react';

export default function Countdown() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            const answer = new URLSearchParams(window.location.search).get("answer");
            if (answer === 'A') {
                navigate("/correct?answer=A");
            } else {
                navigate("/incorrect");
            }
        }, 3000);
    }, [navigate]);

    //カウントダウン
    const [count, setCount] = useState('3');
    const [step, setStep] = useState(1);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (step === 1) {
                setCount('2');
                setStep(2);
            } else if (step === 2){
                setCount('1');
            }
        }, 1000);
        return () => clearTimeout(timer);
    },[step]);

    return (
        <div style={containerStyle}>
            <Meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Meta>
            <div style={numberStyle}>{count}</div>
        </div>
    )
}

// スタイルの定義
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // viewport height で高さを100%に設定
    fontSize: '30rem' // 3を大きく表示するためのフォントサイズ
}

const numberStyle = {
    fontSize: 'inherit'
}