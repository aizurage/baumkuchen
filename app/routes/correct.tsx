import { Link } from "@remix-run/react";
import { useEffect, useState } from 'react';
import Dashboard from './dashboard';
import { useNavigate } from '@remix-run/react';
import { redirect } from '@remix-run/node';
import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, LoaderFunction } from '@remix-run/node';


export let loader: LoaderFunction = async ({request}) => {
    const url = new URL(request.url);
    const answer = url.searchParams.get("answer");
    console.log(answer);
    if (!answer) {
        return redirect('/test');
    }
    return { answer };
};

export default function Correct(props) {
    const [answer, setAnswer] = useState(props.answer);
    const [hasDashboardBeenShown, setHasDashboardBeenShown] = useState(false);  // Dashboardが表示されたかどうかを追跡するステート
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const retrievedAnswer = new URLSearchParams(window.location.search).get("answer");
            if (answer === retrievedAnswer) {
                navigate('/test');
            }
            if (!retrievedAnswer) {
                throw new Error('Answer not found');
            }
            setAnswer(retrievedAnswer);
            
            // answerが"A"であり、Dashboardがまだ表示されていない場合のみ、Dashboardが表示されたことを示す
            if (!hasDashboardBeenShown) {
                setHasDashboardBeenShown(true);
            } else {
                navigate("/test");
            }
        } catch (error) {
            console.error('Error occurred:', error.message);
            navigate('/test');
        }
    }, []);
    console.log(hasDashboardBeenShown);
    

    return (
        <>
            <Link to="/test" className="text-red-600 underline text-3xl">
                {'<<<'}- ホームへ戻るset
            </Link>
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center">
                    <div className="text-9xl">当たり</div>
                    {hasDashboardBeenShown && <Dashboard className="text-5xl"/>}
                </div>
            </main>
        </>
    );
}
