'use server'

export const allusers = async()=>{
    const res = await fetch('http://localhost:5000/users')
    return res.json()
}