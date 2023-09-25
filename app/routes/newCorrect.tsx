import { useEffect, useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { Meta } from '@remix-run/react';
import { Link } from "@remix-run/react";


export default function newCorrect() {
    const navigate = useNavigate();
    let experiencePoint;
    try { 
        experiencePoint = new URLSearchParams(window.location.search).get("answer");
    } catch(error) {
        navigate('/test');
    }
    return (
        <>
            <Link to="/test" className="text-red-600 underline text-3xl">
                {'<<<'}- ホームへ戻る
            </Link>
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center">
                    <div className="text-9xl">当たり</div>
                    <p className='text-5xl '>経験値: {experiencePoint-1}から{experiencePoint}にup</p>
                </div>
            </main>
        </>
    );
}