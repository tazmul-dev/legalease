import { DashboardSidebar } from '@/component/dashboard/DashboardSidebar';
import React from 'react';

const dashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen'>
            <DashboardSidebar></DashboardSidebar>
            <div className='flex-1'>{children}</div>
        </div>
    );
};

export default dashboardLayout;