
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { getUserSession } from '@/lib/core/session';

export async function POST(req) {

    try {
        const body = await req.json()
        const {
            lawyerId,
            lawyerName,
            fee,
            userId,
        } = body;
        const headersList = await headers()
        const user = await getUserSession()
        
        // const origin = headersList.get('origin')

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
             
           customer_email: user.email,
             
            line_items: [
                {
                    // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                    price_data: {
                        currency: "usd",

                        product_data: {
                            name: lawyerName,
                        },

                        unit_amount: Number(fee) * 100,
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                lawyerName,
                lawyerId,
                userId,
            },
            mode: 'payment',
            success_url: `https://legalease-sigma.vercel.app/success?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.json({
            url: session.url,
        });
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}