'use server'



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