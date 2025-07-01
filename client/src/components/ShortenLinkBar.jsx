import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { mutate } from "../fetcher";

import Loading from "../components/Loading.jsx";
import LinkResult from "./LinkResult.jsx";
import Error from "./Error.jsx";

export default function ShortenLinkBar(){
    const [link, setLink] = useState("");

    const shortenLink = useMutation({
        mutationFn: data => mutate("POST", "/api/shorten", data),
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
        <form onSubmit={handleFormSubmit} className="flex justify-center">
            <label htmlFor="url" className="sr-only">Url</label>
            <input type="text" name="url" id="url" placeholder="www.example.com/ultra-mega-super-incredibly-long-slug"
                className="bg-white rounded-l-md h-12 w-140 px-5 focus:outline-none"
            />
            <button
                className="cursor-pointer bg-blue-500 h-12 rounded-r-md px-8 font-bold text-white hover:bg-blue-700 hover:px-10 transition-all duration-400"
            >Shorten</button>
        </form>

        {shortenLink.isPending && <Loading/>    /* Loading placeholder */}

        {shortenLink.isSuccess && <LinkResult link={link} />    /* Shows the new link */}

        {shortenLink.isError && <Error />   /* Shows an error message */}
    </>);
}