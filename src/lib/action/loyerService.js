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

    const res = await fetch(`http://localhost:5000/service`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            // 'authorizartion': `Bearer ${tokenData.token}`
        },
        body: JSON.stringify(data),
    });

    revalidatePath('/dashboard/layer/manageProfile')
    return res.json();
}


//get api;

export const getLowyaer = async (id) => {
    console.log(id, 'Id')
    const res = await fetch(`http://localhost:5000/maneg/profile/${id}`)

    return await res.json()
}

//delet:

export const deleteLowyer = async (id) => {
    const res = await fetch(`http://localhost:5000/maneg/profile/${id}`, {
        method: "DELETE"
    })
    const data = res.json()

    revalidatePath('/dashboard/layer/manageProfile')

    return data
}


// hiringhistory related:

export const rejectRequest = async (id) => {


    const res = await fetch(`http://localhost:5000/requestReject/${id}`, {
        method: 'PATCH'
    })
    revalidatePath('/dashboard/layer')
    return await res.json()


}
export const acceptRequest = async (id) => {
    const res = await fetch(`http://localhost:5000/requestAccept/${id}`, {
        method: 'PATCH',


    })
    revalidatePath('/dashboard/layer')
    return await res.json()


}


export const getRequestData = async (id) => {
    const res = await fetch(`http://localhost:5000/api/request/${id}`)
    return await res.json()
}

export const editeServece = async (data) => {
    const res = await fetch(`http://localhost:5000/edit/service`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    return res.json()
}