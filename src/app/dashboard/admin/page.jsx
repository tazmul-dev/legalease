import { redirect } from 'next/navigation';
import React from 'react';

const adminpage = () => {
    redirect('/dashboard/admin/manage-users')
    return (
        <div>
            
        </div>
    );
};

export default adminpage;