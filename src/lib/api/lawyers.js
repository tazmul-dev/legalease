'use server'

export const browsLawyers = async(queryString)=>{
   console.log(queryString)
   const res = await fetch(`http://localhost:5000/lawyers?${queryString}`)
   return await res.json()
}