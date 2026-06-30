'use server'

import { headers } from "next/headers"
import { auth } from "../auth"

export const detailsLawyer = async(id)=>{
    
   
const res = await fetch(`https://legalease-server-tau.vercel.app/lawyer/details/${id}`)
return await res.json()
}

export const hireRequest = async(data)=>{
    let token = null;
        try {
            const tokenData = await auth.api.getToken({
                headers: await headers()
    
            });
            token = tokenData?.token;
            console.log(token, "token")
        } catch (err) {
            console.warn("Could not retrieve access token:", err.message);
        }
  
    const res = await fetch(`https://legalease-server-tau.vercel.app/lawyer/request`,{
         method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            headers:{
             ...(token && { 'Authorization': `Bearer ${token}` }),
        }
           
        },
        body: JSON.stringify(data),
    });

    return res.json();
  
}