import React from 'react';
import UpdateProfileForm from './UpdateProfileForm';
import { getUserSession } from '@/lib/core/session';
import { updateProfile } from '@/lib/action/users';

const UpdateUserPrfilepage = async() => {
    const user = await getUserSession()
    return (
        <div>
           <UpdateProfileForm user ={user} updateProfile={updateProfile} ></UpdateProfileForm>
        </div>
    );
};

export default  UpdateUserPrfilepage;