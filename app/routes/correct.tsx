import { Link } from "@remix-run/react";
export default function Correct() {
    return (
            <main >
                <Link to="/test" className="text-red-600 underline text-3xl">
                {'<<<'}- ホームへ戻る
                </Link>
                <p></p>
                <div className="flex justify-center items-center h-140 text-12xl ">
                    <div style={{ writingMode: 'vertical-rl'}}>当たり<br/></div>
                </div>
            </main>        
     );
}


