"use client";

import { Table, Button } from "@heroui/react";

export default function HiringHistoryTable({ rejectRequest, requests = [], acceptRequest }) {
  
  const rejectHandler = async (id) => {
    await rejectRequest(id);
  };

  const acceptHandler = async (id) => {
    await acceptRequest(id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      case "Pending":
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 w-full">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 md:p-6 w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Hiring Requests
        </h2>

        {/* ========================= */}
        {/* Desktop Table View (md and up) */}
        {/* ========================= */}
        <div className="hidden md:block overflow-x-auto">
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Hiring Requests"
                className="min-w-[900px]"
              >
                <Table.Header>
                  <Table.Column isRowHeader>Client Name</Table.Column>
                  <Table.Column>Lawyer</Table.Column>
                  <Table.Column>Specialisation</Table.Column>
                  <Table.Column>Fee</Table.Column>
                  <Table.Column>Request Date</Table.Column>
                  <Table.Column>Status</Table.Column>
                  <Table.Column>Actions</Table.Column>
                </Table.Header>

                <Table.Body>
                  {requests.map((request) => (
                    <Table.Row key={request._id} className="hover:bg-gray-50 transition-colors">
                      <Table.Cell className="font-medium text-gray-900">
                        {request.clientName}
                      </Table.Cell>
                      <Table.Cell>{request.lawyerName}</Table.Cell>
                      <Table.Cell>{request.specialisation}</Table.Cell>
                      <Table.Cell className="font-medium">
                        ৳ {request.fee}
                      </Table.Cell>
                      <Table.Cell>{request.hiringDate}</Table.Cell>
                      <Table.Cell>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            request.status
                          )}`}
                        >
                          {request.status}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        {/* Only show actions if the request is pending to match mobile behavior */}
                        {request.status === "Pending" ? (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              color="success"
                              variant="flat"
                              onPress={() => acceptHandler(request._id)}
                            >
                              Accept
                            </Button>
                            <Button
                              size="sm"
                              color="danger"
                              variant="flat"
                              onPress={() => rejectHandler(request._id)}
                            >
                              Reject
                            </Button>
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm italic">
                            Resolved
                          </span>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>

        {/* ========================= */}
        {/* Mobile Card View (below md) */}
        {/* ========================= */}
        <div className="md:hidden space-y-4">
          {requests.length === 0 && (
            <p className="text-center text-gray-500 py-4">No requests found.</p>
          )}
          {requests.map((request) => (
            <div
              key={request._id}
              className="border border-gray-100 bg-gray-50/50 rounded-2xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {request.clientName}
                  </h3>
                  <p className="text-sm text-gray-500">Hiring Request</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(
                    request.status
                  )}`}
                >
                  {request.status}
                </span>
              </div>

              <div className="space-y-3 text-sm bg-white p-3 rounded-xl border border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lawyer</span>
                  <span className="font-medium text-right text-gray-900">{request.lawyerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Specialisation</span>
                  <span className="text-right text-gray-900">{request.specialisation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fee</span>
                  <span className="font-medium text-right text-gray-900">৳ {request.fee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Request Date</span>
                  <span className="text-right text-gray-900">{request.hiringDate}</span>
                </div>
              </div>

              {request.status === "Pending" && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Button
                    color="success"
                    variant="flat"
                    onPress={() => acceptHandler(request._id)}
                  >
                    Accept
                  </Button>
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={() => rejectHandler(request._id)}
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