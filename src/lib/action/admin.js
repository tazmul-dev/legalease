'use server'

import { revalidatePath } from "next/cache"

export const roleChange = async(id)=>{
 const res = await fetch(`http://localhost:5000/user/role/change/${id}`,{
         method:'PATCH',

 })
  revalidatePath('/dashboard/admin/manage-users')
 return await res.json()
}
export const usetDelet = async(id)=>{
 const res = await fetch(`http://localhost:5000/user/delete/${id}`,{
         method:'DELETE',

 })
  revalidatePath('/dashboard/admin/manage-users')
 return await res.json()
}
