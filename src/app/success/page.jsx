import { redirect } from 'next/navigation';
import { stripe } from '../../lib/stripe'; // Adjust this path if necessary
import { Card } from "@heroui/react";
import Link from 'next/link';
import { storePaymentHistory } from '@/lib/action/payment';

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error('Please provide a valid session_id (`cs_test_...`)');
  }

  // Fetch session details from Stripe
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  });

  const {
    status,
    customer_details: { email: customerEmail },
    amount_total,
    currency,
    metadata
  } = session;

  // If payment isn't finished, send them back
  if (status === 'open') {
    return redirect('/');
  }

  // If payment is successful, render the UI
  if (status === 'complete') {
    
    const paymentDatails = {
      email: customerEmail,
      lawyerName:metadata.lawyerName,
      userId:metadata.userId,
      lawyerId:metadata.lawyerId,
      transactionId:session.payment_intent.id,
      amount: amount_total,
    }

    const result = await storePaymentHistory(paymentDatails)
    console.log(result)

    // Format the Stripe amount (Stripe returns amounts in cents, so we divide by 100)
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'usd',
    }).format((amount_total || 0) / 100);

    return (
      <section className="py-12 md:py-24 w-full flex justify-center px-4 bg-gray-50 min-h-screen">
        <Card className="w-full max-w-md p-8 border border-gray-100 shadow-xl bg-white rounded-2xl h-fit">
          
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
              <span className="text-3xl">✅</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Payment Successful!</h2>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              We appreciate your business. A confirmation email has been sent to <br/>
              <span className="font-semibold text-gray-800">{customerEmail}</span>.
            </p>
          </div>

          {/* Details List */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center py-3 border-b border-gray-50">
              <span className="text-gray-500 text-sm">Transaction ID</span>
              <span 
                className="font-mono text-gray-900 text-xs truncate max-w-[160px] bg-gray-50 px-2 py-1 rounded"
                title={session_id}
              >
                {/* Truncating the long Stripe ID for UI purposes */}
                {session_id.substring(0, 16)}...
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-50">
              <span className="text-gray-500 text-sm">Amount Paid</span>
              <span className="font-bold text-gray-900 text-lg">{formattedAmount}</span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-500 text-sm">Status</span>
              <span className="font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs tracking-wide">
                COMPLETED
              </span>
            </div>
          </div>

          {/* Action Button */}
          <Link href="/dashboard/user" className="block w-full">
            <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
              Return to Dashboard
            </button>
          </Link>
          
          {/* Support Footer */}
          <div className="mt-6 text-center">
             <p className="text-xs text-gray-400">
               If you have any questions, please email <br/>
               <a href="mailto:orders@example.com" className="text-primary hover:underline font-medium">orders@example.com</a>.
             </p>
          </div>
          
        </Card>
      </section>
    );
  }
}