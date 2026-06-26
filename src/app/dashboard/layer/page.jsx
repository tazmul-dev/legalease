import React from 'react';
import HiringHistoryTable from './HiringHistoryTable';
import { acceptRequest, getRequestData, rejectRequest } from '@/lib/action/loyerService';
import { getUserSession } from '@/lib/core/session';

const layerpage = async() => {
    const lawyerUserId = await getUserSession()
    const id = lawyerUserId.id
    const lawyers= await getRequestData(id)
    return (
        <div>
            <HiringHistoryTable rejectRequest={rejectRequest} requests = {lawyers} acceptRequest={acceptRequest} ></HiringHistoryTable>
        </div>
    );
};

export default layerpage;