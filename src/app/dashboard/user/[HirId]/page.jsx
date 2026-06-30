import React from 'react';
import PaymentConfirmation from './PaymentConfirmation';
import PaymentDetails from './PaymentDetails';
import { forPayment } from '@/lib/api/payment';
import { getUserSession } from '@/lib/core/session';

const paymentPage = async({params}) => {
    const {HirId} = await params
    const hirignData = await forPayment(HirId)
    const Userid = await getUserSession()
        const id =  Userid.id
        
  
    return (
        <div>
         <PaymentDetails hirignData={hirignData} id = {id} ></PaymentDetails>
        </div>
    );
};

export default paymentPage;