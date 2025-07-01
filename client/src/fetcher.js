const BASE_URL = "http://localhost:3000";

export const mutate = async (method, endpoint, body)=>{
    let fetchParams = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    }

    if(body) fetchParams.body = JSON.stringify(body);

    const response = await fetch(BASE_URL + endpoint, fetchParams);

    if(!response.ok) throw new Error("Error status: " + response.status);

    return await response.json();
}