 "use server"



export const getmyRequerst =async(id)=>{
    const res = await fetch(`http://localhost:5000/myRequest/${id}`)
    return res.json()
}

export const updateProfile = async(data)=>{
    const res = await fetch(`http://localhost:5000/update/profile`,{
         method:'PATCH',
          headers: {
            'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(data),
    })
    
    return res.json()
 }