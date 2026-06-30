'use server'

export const storePaymentHistory = async (data) => {
   
    const res = await fetch(`https://legalease-server-tau.vercel.app/payment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body:JSON.stringify(data),
    });

  
    return res.json();
}
