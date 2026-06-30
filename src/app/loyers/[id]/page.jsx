import React from 'react';
import LawyerDetailCard from './LawyerDetailCard';
import { detailsLawyer, hireRequest } from '@/lib/action/lawyerDetails';
import { getUserSession } from '@/lib/core/session';

const LawyerDetailPage = async({params}) => {
    const {id} =await params;
    // console.log(id)
    const lawyer = await detailsLawyer(id)
    // console.log(lawyer)
    const user= await getUserSession()
    // console.log(user)
    return (
        <div>
            Lawyer detail page
            <LawyerDetailCard lawyer={lawyer} user ={user} hireRequest={hireRequest} ></LawyerDetailCard>
        </div>
    );
};

export default LawyerDetailPage;