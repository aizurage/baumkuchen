import { Link } from "@remix-run/react";

export default function AdminIndex() {
  return (
    <main>
        <h1 style={{ color: 'green', fontSize : 50}}>Test Third Page</h1>
        <Link to="/test/second" className="text-red-600 underline">
        {'<<<'}- Link to Test Second Page
        </Link>
        <p></p>
        <Link to="/test" className="text-red-600 underline">
          ,Link to Test First Page-{'>>>'}
        </Link>

        <p>test.second.third</p>
        <p>名前はてきとうです</p>
        
      </main>
  );
}