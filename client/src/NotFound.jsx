import { Link } from "react-router";

export default function NotFound(){
    return (<>
        <main className="grow flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-8xl mb-6"><span className="text-blue-500">404</span> NOT FOUND</h1>
            <Link to="/" className="text-white font-semibold text-2xl underline">Click to go home</Link>
        </main>
    </>);
}