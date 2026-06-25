'use server'

const basUrl = process.env.SERVER_URL

export const createService =async (data)=>{
 const res = await fetch(`http://localhost:5000/service`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res.json();
}


//get api;

export const getLowyaer = async (id)=>{
    console.log(id, 'Id')
 const res = await fetch(`http://localhost:5000/maneg/profile/${id}`)
  
 return await res.json()
}