'use server'

import { revalidatePath } from "next/cache";

const basUrl = process.env.SERVER_URL

export const createService =async (data)=>{
 const res = await fetch(`http://localhost:5000/service`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res.json();
}


//get api;

export const getLowyaer = async (id)=>{
    console.log(id, 'Id')
 const res = await fetch(`http://localhost:5000/maneg/profile/${id}`)
  
 return await res.json()
}

//delet:

export const deleteLowyer = async(id)=>{
const res = await fetch(`http://localhost:5000/maneg/profile/${id}`,{
    method: "DELETE"
})
const data = res.json()
console.log(data)
if(data?.deletedCount>=0){
    revalidatePath('/dashboard/layer/manageProfile')
}
 return data
}


// hiringhistory related:

export const rejectRequest = async(id)=>{
    const res = await fetch(`http://localhost:5000/requestReject/${id}`,{
        method:'PATCH'
    })
    return await res.json()


}
export const acceptRequest = async(id)=>{
    const res = await fetch(`http://localhost:5000/requestAccept/${id}`,{
        method:'PATCH'
    })
    return await res.json()


}


export const getRequestData=async(id)=>{
    const res = await fetch(`http://localhost:5000/api/request/${id}`)
    return await res.json()
}

