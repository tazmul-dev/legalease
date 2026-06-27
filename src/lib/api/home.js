
export const feature = async()=>{
    const res = await fetch('http://localhost:5000/featured-lawyers')
    return res.json()
}