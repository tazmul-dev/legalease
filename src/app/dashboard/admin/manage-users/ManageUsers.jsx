"use client";

import { useState } from "react";
import { Table, Button } from "@heroui/react";
import { roleChange, usetDelet } from "@/lib/action/admin";
// import { useRouter } from "next/navigation"; // Uncomment if you want to route dynamically

export default function ManageUsers({ users }) {
  // Initialize local state from props so we can update the UI when a user is deleted
 
  // const router = useRouter(); // Uncomment if using Next.js router

  const handleRoleChange = async(id) => {
    // Add your logic here for the role change button
    // For example, navigate to another page: router.push(`/user/${id}`)
    // console.log("Role change clicked for user ID:", id);
    await roleChange(id)
  };

  const handleDeleteUser = async (id) => {
    await usetDelet(id)
  };

  const roleBadge = (role) => {
    if (role === "admin") return "bg-purple-100 text-purple-700";
    if (role === "lawyer") return "bg-blue-100 text-blue-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-4 md:p-5">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Manage Users</h2>

      {/* --- MOBILE VIEW: Cards --- */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {users.map((user) => (
          <div
            key={user._id}
            className="border border-gray-100 rounded-xl p-4 flex flex-col gap-3 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${roleBadge(
                  user.role
                )}`}
              >
                {user.role}
              </span>
            </div>

            <div className="flex gap-2 mt-2 pt-3 border-t border-gray-50">
              <Button
                size="sm"
                color="primary"
                variant="flat"
                className="flex-1"
                onPress={() => handleRoleChange(user._id)}
              >
                Change Role
              </Button>
              <Button
                size="sm"
                color="danger"
                variant="flat"
                className="flex-1"
                onPress={() => handleDeleteUser(user._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
        {users.length === 0 && (
          <p className="text-gray-500 text-center py-4">No users found.</p>
        )}
      </div>

      {/* --- DESKTOP VIEW: Table --- */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <Table.ScrollContainer>
            <Table.Content className="min-w-[800px]">
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>

              <Table.Body>
                {users.map((user) => (
                  <Table.Row key={user._id}>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${roleBadge(
                          user.role
                        )}`}
                      >
                        {user.role}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          color="primary"
                          variant="flat"
                          onPress={() => handleRoleChange(user._id)}
                        >
                          Change Role
                        </Button>

                        <Button
                          size="sm"
                          color="danger"
                          variant="flat"
                          onPress={() => handleDeleteUser(user._id)}
                        >
                          Delete
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
    </div>
  );
}