 "use server"

import { auth } from "../auth"



export const getmyRequerst =async(id)=>{
    
    const res = await fetch(`https://legalease-server-tau.vercel.app/myRequest/${id}`)
    return res.json()
}

export const updateProfile = async(data)=>{
     
    const res = await fetch(`https://legalease-server-tau.vercel.app/update/profile`,{
         method:'PATCH',
          headers: {
            'Content-Type': 'application/json',
             
          
        },
        body: JSON.stringify(data),
    })
    
    return res.json()
 }