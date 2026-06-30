'use server'

export const browsLawyers = async(queryString)=>{
   console.log(queryString)
   const res = await fetch(`https://legalease-server-tau.vercel.app/lawyers?${queryString}`)
   return await res.json()
}
export const Lawyers = async()=>{
   // console.log(queryString)
   const res = await fetch(`https://legalease-server-tau.vercel.app/lawyers`)
   return await res.json()
}