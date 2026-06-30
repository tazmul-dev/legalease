'use server'

export const forPayment = async(id)=>{
    const res = await fetch(`https://legalease-server-tau.vercel.app/for/paymen/${id}`)
    return res.json()
}