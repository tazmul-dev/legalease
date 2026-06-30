"use client";

import { Table, Button } from "@heroui/react";
import Link from "next/link";

export default function HiringHistory({hiringHistory}) {
 

  const getStatusStyle = (status) => {
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
          Hiring History
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <Table>
            <Table.ScrollContainer>
              <Table.Content
                aria-label="Hiring History"
                className="min-w-[900px]"
              >
                <Table.Header>
                  <Table.Column isRowHeader>
                    Lawyer Name
                  </Table.Column>

                  <Table.Column>
                    Specialisation
                  </Table.Column>

                  <Table.Column>
                    Fee
                  </Table.Column>

                  <Table.Column>
                    Hiring Date
                  </Table.Column>

                  <Table.Column>
                    Status
                  </Table.Column>

                  <Table.Column>
                    Action
                  </Table.Column>
                </Table.Header>

                <Table.Body>
                  {hiringHistory.map((item) => (
                    <Table.Row key={item._id}>
                      <Table.Cell>
                        {item.lawyerName}
                      </Table.Cell>

                      <Table.Cell>
                        {item.specialisation}
                      </Table.Cell>

                      <Table.Cell>
                        ৳ {item.fee}
                      </Table.Cell>

                      <Table.Cell>
                        {item.hiringDate}
                      </Table.Cell>

                      <Table.Cell>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        {item.status === "Accepted" ? (
                          <Link
                          href={`/dashboard/user/${item._id}`}
                            color="success"
                            size="sm"
                          >
                            Pay Now
                          </Link>
                        ) : (
                          "-"
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {hiringHistory.map((item) => (
            <div
              key={item._id}
              className="border rounded-2xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">
                    {item.lawyerName}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.specialisation}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Fee
                  </span>

                  <span>
                    ৳ {item.fee}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Hiring Date
                  </span>

                  <span>
                    {item.hiringDate}
                  </span>
                </div>

              </div>

              {item.status === "Accepted" && (
                <Button
                  color="success"
                  className="w-full mt-4"
                >
                  Pay Now
                </Button>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}