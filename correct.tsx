import { Link } from "@remix-run/react";
export default function Correct() {
    return (
            <main>
                <h1>正解！</h1>
                <p></p>
                <Link to="/test" className="text-red-600 underline">
                {'<<<'}- ホームへ戻る
                </Link>
            </main>        
     );
}