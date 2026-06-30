'use server'



export const allusers = async () => {
    

    const res = await fetch('https://legalease-server-tau.vercel.app/users', {
        cache: 'no-store',
       

    });

    if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", errorText);
        throw new Error("Failed to fetch users");
    }

    return res.json();
};