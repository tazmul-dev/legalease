'use client'
import { Card } from "@heroui/react";

export default function PaymentDetails({hirignData, id}) {
  const {fee,_id,lawyerName}=hirignData

  const handelPaymen = async()=>{
   const res = await fetch(`https://legalease-sigma.vercel.app/api/checkout-session`,{
    method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        lawyerId: _id,
        lawyerName:lawyerName,
        fee:fee,
        userId: id,




      })

   })
   const data = await res.json()

   window.location.href = data.url;

  }

  return (
    <section className="py-8 w-full max-w-lg mx-auto">
      <Card className="p-8 border border-gray-100 shadow-sm bg-white rounded-2xl">
        
        <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>

        {/* Payment Summary */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Service Fee</span>
            <span className="font-medium text-gray-900">{fee}</span>
          </div>
         
          <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-primary">{fee}</span>
          </div>
        </div>

        {/* Payment Method Selector */}
        {/* <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900">Select Payment Method</p>
          
          <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:border-primary transition-colors">
            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
            </div>
            <span className="font-medium text-gray-700">Credit / Debit Card</span>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:border-primary transition-colors">
            <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
            <span className="font-medium text-gray-700">Digital Wallet (bKash/Nagad)</span>
          </div>
        </div> */}

        {/* Confirm Button */}
        <button 
        onClick={handelPaymen}
         className="w-full mt-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
          Pay Now
        </button>
      </Card>
    </section>
  );
}