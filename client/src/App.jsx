import ShortenLinkBar from "./components/ShortenLinkBar.jsx";

export default function App(){
    return <>
        <header className="py-8">
            <span className="flex items-center">
                <h2
                    className="
                        text-2xl text-white font-bold
                        md:text-4xl
                "><span className="text-blue-500">Simple</span> Link Shortener</h2>
            </span>
        </header>

        <main className="
            grow flex flex-col items-start mt-6
            md:items-center md:mt-16
            lg:mt-30
        ">
            <h1 className="
                    font-bold font-1 text-5xl text-white
                    lg:text-6xl
                    xl:text-7xl
            ">
                Shorten your links <span className="text-blue-500">for free</span>.
            </h1>
            <h3 className="
                text-white font-semibold text-xl  mt-3 mb-12
                lg:text-2xl
            ">Shorten and share your URL's to the world in just one click.</h3>
            <ShortenLinkBar/>
        </main>

        <footer className="flex justify-center items-center h-36">
            <p className="text-white">&copy;2025 All rights reserved.</p>
        </footer>
    </>;
}