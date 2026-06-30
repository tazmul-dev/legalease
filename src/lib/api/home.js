
export const feature = async()=>{
    const res = await fetch('https://legalease-server-tau.vercel.app/featured-lawyers')
    return res.json()
}