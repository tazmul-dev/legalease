import Link from 'next/link';
import React from 'react';

const NotPound = () => {
    return (
        <div>
            <div className='h-[80vh] flex justify-center items-center flex-col gap-4'>
            <h1 className="text-3xl font-bold text-purple-500">This page is not pound</h1>

            <Link href={'/'} className="btn btn-primary">Home</Link>
            
        </div>
        </div>
    );
};

export default NotPound;