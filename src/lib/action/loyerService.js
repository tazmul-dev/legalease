'use server'

import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { headers } from "next/headers";



const basUrl = process.env.SERVER_URL

export const createService = async (data) => {
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
    // const  tokenData = await auth.api.getToken({
    //     headers: await headers()
    // })
    //   console.log(tokenData.token,"token")

    const res = await fetch(`https://legalease-server-tau.vercel.app/service`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            // 'authorizartion': `Bearer ${tokenData.token}`
        },
        body:JSON.stringify(data),
    });

    revalidatePath('/dashboard/layer/manageProfile')
    return res.json();
}




export const getLowyaer = async (id) => {
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
     
    const res = await fetch(`https://legalease-server-tau.vercel.app/maneg/profile/${id}`,{
        headers:{
             ...(token && { 'Authorization': `Bearer ${token}` }),
        }
    })

    return await res.json()
}

//delet:

export const deleteLowyer = async (id) => {
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
    
    const res = await fetch(`https://legalease-server-tau.vercel.app/maneg/profile/${id}`, {
        method: "DELETE",
          headers:{
             ...(token && { 'Authorization': `Bearer ${token}` }),
        }
    })
    const data = res.json()

    revalidatePath('/dashboard/layer/manageProfile')

    return data
}


// hiringhistory related:

export const rejectRequest = async (id) => {

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

    const res = await fetch(`https://legalease-server-tau.vercel.app/requestReject/${id}`, {
        method: 'PATCH',
        headers:{
             ...(token && { 'Authorization': `Bearer ${token}` }),
        }
        
    })
    revalidatePath('/dashboard/layer')
    return await res.json()


}
export const acceptRequest = async (id) => {
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

    const res = await fetch(`https://legalease-server-tau.vercel.app/requestAccept/${id}`, {
        method: 'PATCH',
         headers:{
             ...(token && { 'Authorization': `Bearer ${token}` }),
        }


    })
    revalidatePath('/dashboard/layer')
    return await res.json()


}


export const getRequestData = async (id) => {
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

    
    const res = await fetch(`https://legalease-server-tau.vercel.app/api/request/${id}`,{
         headers:{
             ...(token && { 'Authorization': `Bearer ${token}` }),
        }


    })
    return await res.json()
}

export const editeServece = async (data) => {
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
   
    const res = await fetch(`https://legalease-server-tau.vercel.app/edit/service`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
        },
        body: JSON.stringify(data),
    })

    return res.json()
}