import React from 'react';
import ManageUsers from './ManageUsers';
import { allusers } from '@/lib/api/admin';

const mageUserpage = async() => {
    const users = await allusers()
    // console.log(users)
    return (
        <div>
            <ManageUsers users={users}></ManageUsers>
        </div>
    );
};

export default mageUserpage;