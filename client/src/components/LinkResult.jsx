import { useState, useRef, useEffect } from "react";

export default function LinkResult({ link }){
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(()=>{ return ()=> clearTimeout(timeoutRef.current) }, []);   // Clears the current timeout when the component is unmounted

    function handleCopyToClipboard(){
        navigator.clipboard.writeText(link)
        .then(()=>{
            clearTimeout(timeoutRef.current);
            setCopied(true);
            timeoutRef.current = setTimeout(()=> setCopied(false), 1_000);   // Show for 1s
        })
        .catch(()=> console.error("Error while copying."));
    }

    return <div 
                className="
                    w-full my-10 flex flex-col items-center gap-4 
                    md:flex-row md:justify-center md:my-20
        ">
        <p className="text-white text-xl font-semibold">Your new link:</p>
        <div className="flex items-center border-2 border-blue-600 bg-gray-950 rounded-sm px-4 py-2 gap-4 relative">
            <p className="text-white text-xs sm:text-sm lg:text-base">{link}</p>
            <button onClick={handleCopyToClipboard} className="cursor-pointer hover:opacity-70 transition-opacity">
                {copied
                    ? <svg fill="#fff" width="24px" height="24px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm49.53125,85.78906-58.67187,56a8.02441,8.02441,0,0,1-11.0625,0l-29.32813-28a8.00675,8.00675,0,0,1,11.0625-11.57812l23.79687,22.72656,53.14063-50.72656a8.00675,8.00675,0,0,1,11.0625,11.57812Z"/>
                    </svg>
                    : <svg fill="#fff" height="24px" width="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460 460" xmlSpace="preserve">
                        <path d="M425.934,0H171.662c-18.122,0-32.864,14.743-32.864,32.864v77.134h30V32.864c0-1.579,1.285-2.864,2.864-2.864h254.272 c1.579,0,2.864,1.285,2.864,2.864v254.272c0,1.58-1.285,2.865-2.864,2.865h-74.729v30h74.729 c18.121,0,32.864-14.743,32.864-32.865V32.864C458.797,14.743,444.055,0,425.934,0z"/>
                        <path d="M288.339,139.998H34.068c-18.122,0-32.865,14.743-32.865,32.865v254.272C1.204,445.257,15.946,460,34.068,460h254.272c18.122,0,32.865-14.743,32.865-32.864V172.863C321.206,154.741,306.461,139.998,288.339,139.998z M288.341,430H34.068 c-1.58,0-2.865-1.285-2.865-2.864V172.863c0-1.58,1.285-2.865,2.865-2.865h254.272c1.58,0,2.865,1.285,2.865,2.865v254.273h0.001 C291.206,428.715,289.92,430,288.341,430z"/>
                    </svg>}
            </button>
        </div>
    </div>;
}