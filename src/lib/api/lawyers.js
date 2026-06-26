'use server'

export const browsLawyers = async()=>{
   const res = await fetch(`http://localhost:5000/lawyers`)
   return await res.json()
}