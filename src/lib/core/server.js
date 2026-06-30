import { getUserToken } from "./session";

 
 const baseUrl = process.env.SERVER_URL

 export const getToken = async()=>{
     let token = null;
        try {
            const tokenData = await auth.api.getToken({
                headers: await headers()
    
            });
            token = tokenData?.token;
            return token
            console.log(token, "token")
        } catch (err) {
            console.warn("Could not retrieve access token:", err.message);
        }
 }


export const serverMutation = async (path, data, method = 'POST') => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(data),
    });


    return res.json();
}