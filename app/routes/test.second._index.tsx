import { Link } from "@remix-run/react";

export default function AdminIndex() {
  return (
    <main>
        <h1 style={{ color: 'blue', fontSize : 50}}>Test Second Page</h1>
        <Link to="/test" className="text-red-600 underline">
        {'<<<'}- Link to Test First Page
        </Link>
        <p></p>
        <Link to="third" className="text-red-600 underline">
                Link to Test Third Page -{'>>>'}
        </Link>

        <p>test/second</p>
      </main>
  );
}