"use client";

import { Table, Button } from "@heroui/react";

export default function HiringHistoryTable({rejectRequest, requests, acceptRequest}) {
    const rejecthandaler =async (id)=>{
      await rejectRequest(id)
     
    }
    const accepthandaler =async (id)=>{
      await acceptRequest(id)
     
    }
    
  console.log(requests)
  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-3xl shadow-sm border p-5 md:p-6">
        <h2 className="text-2xl font-bold mb-6">
          Hiring Requests
        </h2>

        {/* ========================= */}
        {/* Desktop Table */}
        {/* ========================= */}
        <div className="hidden md:block overflow-x-auto">
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Hiring Requests"
                className="min-w-[900px]"
              >
                <Table.Header>
                  <Table.Column isRowHeader>
                    Client Name
                  </Table.Column>

                  <Table.Column>
                    Lawyer
                  </Table.Column>

                  <Table.Column>
                    Specialisation
                  </Table.Column>

                  <Table.Column>
                    Fee
                  </Table.Column>

                  <Table.Column>
                    Request Date
                  </Table.Column>

                  <Table.Column>
                    Status
                  </Table.Column>

                  <Table.Column>
                    Actions
                  </Table.Column>
                </Table.Header>

                <Table.Body>
                  {requests.map((request) => (
                    <Table.Row key={request._id}>
                      <Table.Cell>
                        {request.clientName}
                      </Table.Cell>

                      <Table.Cell>
                        {request.lawyerName}
                      </Table.Cell>

                      <Table.Cell>
                        {request.specialisation}
                      </Table.Cell>

                      <Table.Cell>
                        ৳ {request.fee}
                      </Table.Cell>

                      <Table.Cell>
                        {request.hiringDate}
                      </Table.Cell>

                      <Table.Cell>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            request.status
                          )}`}
                        >
                          {request.status}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                       
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              color="success"
                              onClick={()=>accepthandaler(request._id)}
                            >
                              Accept
                            </Button>

                            <Button
                              size="sm"
                              color="danger"
                              variant="flat"
                              onClick={()=>rejecthandaler(request._id)}
                            >
                              Reject
                            </Button>
                          </div>
                       
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>

        {/* ========================= */}
        {/* Mobile Card View */}
        {/* ========================= */}
        <div className="md:hidden space-y-4">
          {requests.map((request) => (
            <div
              key={request._id}
              className="border rounded-2xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">
                    {request.clientName}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Hiring Request
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    request.status
                  )}`}
                >
                  {request.status}
                </span>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Lawyer
                  </span>

                  <span className="font-medium">
                    {request.lawyerName}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Specialisation
                  </span>

                  <span>
                    {request.specialisation}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Fee
                  </span>

                  <span>
                    ৳ {request.fee}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Request Date
                  </span>

                  <span>
                    {request.hiringDate}
                  </span>
                </div>
              </div>

              {request.status === "Pending" && (
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <Button
                    color="success"
                    onPress={() =>
                      handleAccept(request._id)
                    }
                  >
                    Accept
                  </Button>

                  <Button
                    color="danger"
                    variant="flat"
                    onClick={()=>{rejecthandaler(request?._id)}}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}