import ShortenLinkBar from "./components/ShortenLinkBar.jsx";

export default function Landing(){
    return <>
        <header className="py-8">
            <span className="flex items-center">
                <h1
                    className="
                        text-2xl text-white font-bold
                        md:text-4xl
                "><span className="text-blue-500">Simple</span> Link Shortener</h1>
            </span>
        </header>

        <main className="
            grow flex flex-col items-start mt-6 mb-20
            md:items-center md:mt-16
            lg:mt-30
        ">
            <h2 className="
                    font-bold font-1 text-5xl text-white
                    lg:text-6xl
                    xl:text-7xl
            ">
                Shorten your links <span className="text-blue-500">for free</span>.
            </h2>
            <h3 className="
                text-white font-semibold text-xl  mt-3 mb-12
                lg:text-2xl
            ">Shorten and share your URL's to the world in just one click.</h3>
            <ShortenLinkBar/>

            <div className="
                grid grid-cols-1 mt-20 gap-20
                xl:grid-cols-3 xl:mt-30
            
            ">
                <div className="flex flex-col items-center">
                    <h3 className="text-white font-semibold text-xl mb-4 sm:text-4xl md:text-3xl 2xl:text-4xl">🔗Clean shareable URLs</h3>
                    <p className="text-white text-base text-center sm:text-xl">Our URL shortener lets you instantly convert long, messy links into clean, custom short URLs. Ideal for sharing on social media, emails, or anywhere online. Fast and reliable link shortener.</p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-white font-semibold text-xl mb-4 sm:text-4xl md:text-3xl 2xl:text-4xl">📊Real-time analytics</h3>
                    <p className="text-white text-base text-center sm:text-xl">Monitor the performance of your links with our built-in link tracker. See detailed analytics like click counts, time, device, and location. All updated in real time. Track every URL you shorten with precision.</p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-white font-semibold text-xl mb-4 sm:text-4xl md:text-3xl 2xl:text-4xl">🔒Secure and ad free</h3>
                    <p className="text-white text-base text-center sm:text-xl">We’re a privacy-focused link shortener. No ads, no tracking, no spam. Just fast, secure URL shortening with full control over your data. Shorten links confidently with a clean and safe experience.</p>
                </div>
            </div>
        </main>
    </>;
}