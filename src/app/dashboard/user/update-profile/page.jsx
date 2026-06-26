import React from 'react';
import UpdateProfileForm from './UpdateProfileForm';
import { getUserSession } from '@/lib/core/session';

const UpdateUserPrfilepage = async() => {
    const user = await getUserSession()
    return (
        <div>
           <UpdateProfileForm user ={user} ></UpdateProfileForm>
        </div>
    );
};

export default  UpdateUserPrfilepage;