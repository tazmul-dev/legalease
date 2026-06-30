'use client'

import {AlertDialog, Button} from "@heroui/react";



const LawyerDetailCard = ({ lawyer, user, hireRequest }) => {
const handelHire = async()=>{
    // if(!user){
    //     redirect
    // }
  const lawyerRequestData = {
    lawyerName:lawyer.name,
    fee:lawyer.consultationFee,
    specialisation: lawyer.category,
    hiringDate: new Date().toISOString().split("T")[0],
    clientName: user.name,
    userId: user.id,
    lawyerId: lawyer._id,
    status: 'Pending',
    pymentStatus: 'unpaid',
    lawyerUserId: lawyer.lawyerId,

  }
  console.log(lawyerRequestData)

    await hireRequest(lawyerRequestData)
}
    return (
        <div>
            <div className="max-w-5xl mx-auto p-6">

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                    <div className="grid md:grid-cols-3 gap-8 p-8">

                        {/* Image */}
                        <div>
                            <img
                                src={lawyer.image}
                                alt={lawyer.name}
                                className="w-full h-[350px] object-cover rounded-2xl"
                            />
                        </div>

                        {/* Info */}
                        <div className="md:col-span-2 flex flex-col justify-center">

                            <div className="flex items-center gap-3 mb-3">
                                <h1 className="text-4xl font-bold">
                                    {lawyer.name}
                                </h1>

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${lawyer.status === "Available"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {lawyer.status}
                                </span>
                            </div>

                            <p className="text-blue-600 font-semibold text-lg mb-4">
                                {lawyer.specialization}
                            </p>

                            <p className="text-gray-600 leading-7">
                                {lawyer.summary}
                            </p>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">

                                <div className="border rounded-xl p-4">
                                    <p className="text-sm text-gray-500">
                                        Consultation Fee
                                    </p>

                                    <h3 className="text-2xl font-bold">
                                        ৳ {lawyer.consultationFee}
                                    </h3>
                                </div>

                                <div className="border rounded-xl p-4">
                                    <p className="text-sm text-gray-500">
                                        Date Joined
                                    </p>

                                    <h3 className="text-lg font-semibold">
                                        {lawyer.dateJoined}
                                    </h3>
                                </div>

                            </div>

                            <div

                              
                            >
                                <AlertDialog>
                                    <Button   className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700" >Hire</Button>
                                    <AlertDialog.Backdrop>
                                        <AlertDialog.Container>
                                            <AlertDialog.Dialog className="sm:max-w-[400px]">
                                                <AlertDialog.CloseTrigger />
                                               
                                                <AlertDialog.Footer>
                                                    <Button slot="close" variant="tertiary">
                                                        Cancel
                                                    </Button>
                                                      <Button onClick={handelHire} slot="close">Confirm</Button>
                                                </AlertDialog.Footer>
                                            </AlertDialog.Dialog>
                                        </AlertDialog.Container>
                                    </AlertDialog.Backdrop>
                                </AlertDialog>
                            </div>


                        </div>
                    </div>
                </div>
            </div>




        </div>
    );

};

export default LawyerDetailCard;