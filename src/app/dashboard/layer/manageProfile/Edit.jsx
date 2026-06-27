"use client"
import Image from 'next/image';
import React from 'react';
import ModalUpdet from './ModalUpdete';

const Edit = ({loyerData, deleteLowyer,editeServece}) => {
    const hendelDelete = async(id)=>{
        await deleteLowyer(id)

    }
    return (
        <div className=' lg:px-10'>
          <div className="grid gap-5 ">

  {loyerData.map((service) => (
    <div
      key={service._id}
      className="border border-zinc-800 rounded-xl p-5 container mx-auto"
    >
      <div className="flex items-start justify-between">
        <div>
        <div className='flex gap-1 items-center'> 
            <Image 
            src={service.image}
            alt='image'
            width={50}
            height={50}
            >

            </Image>
            <h3 className="text-lg font-semibold ">
            {service.name}
          </h3>
        </div>
          

          <p className="text-sm text-blue-400 mt-1">
            {service.category}
          </p>

        </div>

        <span className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-400">
          {service.status}
        </span>
      </div>

      <p className="text-zinc-400 text-sm mt-4 line-clamp-2">
        {service.summary}
      </p>

      <div className="flex items-center justify-between mt-5">

        <div>
          <p className="text-zinc-500 text-xs">
            Consultation Fee
          </p>

          <p className="text-lg font-bold ">
            ৳ {service.consultationFee}
          </p>
        </div>

        <div className="flex gap-3">

         <ModalUpdet editeServece={editeServece} service={service}></ModalUpdet>

          <button
          onClick={()=>hendelDelete(service?._id)}
            className=" cursor-pointer px-4 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  ))}

</div>
        </div>
    );
};

export default Edit;