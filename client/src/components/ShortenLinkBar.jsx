import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { mutate } from "../fetcher";

import Loading from "../components/Loading.jsx";
import LinkResult from "./LinkResult.jsx";
import Error from "./Error.jsx";

export default function ShortenLinkBar(){
    const [link, setLink] = useState("");

    const shortenLink = useMutation({
        mutationFn: data => mutate("POST", "/shorten", data),
        onSuccess: result => setLink(result.shortenedLink),
        onError: error => console.error("An error has occured: " + error)
    });

    function handleFormSubmit(event){
        event.preventDefault();

        const data = new FormData(event.target);
        const link = data.get("url");

        if(!link) return;   // In case the input is empty

        shortenLink.mutate({ link });

        event.target.reset();   // Clears the input
    }


    return (<>
        <form onSubmit={handleFormSubmit}
            className="
                flex flex-col w-full gap-4 justify-center
                md:flex-row md:gap-0
        ">
            <label htmlFor="url" className="sr-only">Url</label>
            <input type="text" name="url" id="url" placeholder="www.example.com/ultra-mega-super-incredibly-long-slug"
                className="
                    w-full bg-white rounded-md h-12 px-5 focus:outline-none
                    md:rounded-r-none md:w-150
            "/>
            <button
                className="
                    cursor-pointer bg-blue-500 h-12 rounded-md px-8 font-bold text-white hover:bg-blue-700 hover:px-10 transition-all duration-400
                    md:rounded-l-none
            ">Shorten</button>
        </form>

        {shortenLink.isPending && <Loading/>    /* Loading placeholder */}

        {shortenLink.isSuccess && <LinkResult link={link} />    /* Shows the new link */}

        {shortenLink.isError && <Error />   /* Shows an error message */}
    </>);
}