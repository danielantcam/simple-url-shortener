import ShortenLinkBar from "./components/ShortenLinkBar.jsx";

export default function App(){
    return <>
        <header className="px-20 py-8">
            <span className="flex items-center">
                <h2 className="text-4xl text-white font-bold"><span className="text-blue-500">Simple</span> Link Shortener</h2>
            </span>
        </header>

        <main className="w-screen grow flex flex-col items-center mt-24">
            <h1 className="font-bold font-1 text-7xl text-white">
                Shorten your links <span className="text-blue-500">for free</span>.
            </h1>
            <h3 className="text-white font-semibold text-2xl  mt-3 mb-12">Shorten and share your URL's to the world in just one click.</h3>
            <ShortenLinkBar/>
        </main>

        <footer className="flex justify-center items-center h-36">
            <p className="text-white">&copy;2025 All rights reserved.</p>
        </footer>
    </>;
}