import { Link } from "@remix-run/react";
export default function Incorrect() {
    return (
            <main>
                <h1>残念、不正解</h1>
                <p></p>
                <Link to="/test" className="text-red-600 underline">
                {'<<<'}- ホームへ戻る
                </Link>
            </main>        
     );
}