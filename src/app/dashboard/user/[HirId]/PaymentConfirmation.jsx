import { Card } from "@heroui/react";

export default function PaymentConfirmation() {
  return (
    <section className="py-12 w-full flex justify-center">
      <Card className="w-full max-w-md p-8 border border-gray-100 shadow-xl bg-white rounded-2xl">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
            <span className="text-3xl">✅</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Payment Successful!</h2>
          <p className="text-gray-500 mt-2">Thank you for your transaction.</p>
        </div>

        {/* Details List */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between py-3 border-b border-gray-50">
            <span className="text-gray-500">Transaction ID</span>
            <span className="font-semibold text-gray-900">#LEG-884291</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-50">
            <span className="text-gray-500">Amount Paid</span>
            <span className="font-semibold text-gray-900">$450.00</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-500">Date</span>
            <span className="font-semibold text-gray-900">June 29, 2026</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
          View Receipt
        </button>
      </Card>
    </section>
  );
}