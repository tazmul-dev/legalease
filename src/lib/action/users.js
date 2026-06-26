 "use server"
export const getmyRequerst =async(id)=>{
    const res = await fetch(`http://localhost:5000/myRequest/${id}`)
    return res.json()
}