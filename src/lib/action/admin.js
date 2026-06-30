'use server'

import { revalidatePath } from "next/cache"


export const roleChange = async(id)=>{
 const res = await fetch(`https://legalease-server-tau.vercel.app/user/role/change/${id}`,{
         method:'PATCH',
        

 })
  revalidatePath('/dashboard/admin/manage-users')
 return await res.json()
}
export const usetDelet = async(id)=>{
        
        //  const  tokenData = await auth.api.getToken({
        //     headers: await headers()
        // })
        // console.log(tokenData.token)
 const res = await fetch(`https://legalease-server-tau.vercel.app/user/delete/${id}`,{
         method:'DELETE',
          headers:{
          
        }
        //    headers:{
        //               'authorizartion': `Bearer ${tokenData.token}`
        //          }

 })
  revalidatePath('/dashboard/admin/manage-users')
 return await res.json()
}
