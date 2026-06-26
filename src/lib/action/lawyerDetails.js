'use server'

export const detailsLawyer = async(id)=>{
const res = await fetch(`http://localhost:5000/lawyer/details/${id}`)
return await res.json()
}

export const hireRequest = async(data)=>{
    const res = await fetch(`http://localhost:5000/lawyer/request`,{
         method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res.json();
  
}