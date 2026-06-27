"use client";

import { useState } from "react";
import { Table, Button } from "@heroui/react";

export default function ManageUsers() {
   const [users, setUsers] = useState([
    {
      _id: "1",
      name: "Tazmul Hossain",
      email: "tazmul@gmail.com",
      role: "user",
    },
    {
      _id: "2",
      name: "Rahim Uddin",
      email: "rahim@gmail.com",
      role: "lawyer",
    },
    {
      _id: "3",
      name: "Admin User",
      email: "admin@gmail.com",
      role: "admin",
    },
  ]);

  const handleRoleChange = async (id, role) => {
    try {
      const res = await fetch(
        `http://localhost:5000/users/${id}/role`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role }),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        setUsers((prev) =>
          prev.map((user) =>
            user._id === id
              ? { ...user, role }
              : user
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this user?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/users/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        setUsers((prev) =>
          prev.filter((user) => user._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const roleBadge = (role) => {
    if (role === "admin")
      return "bg-purple-100 text-purple-700";

    if (role === "lawyer")
      return "bg-blue-100 text-blue-700";

    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-5">
      <h2 className="text-2xl font-bold mb-6">
        Manage Users
      </h2>

      {/* Desktop Table */}
      <div className=" overflow-x-auto">
        <Table>
          <Table.ScrollContainer>
            <Table.Content className="min-w-[800px]">
              <Table.Header>
                <Table.Column isRowHeader>
                  Name
                </Table.Column>

                <Table.Column>
                  Email
                </Table.Column>

                <Table.Column>
                  Role
                </Table.Column>

                <Table.Column>
                  Change Role
                </Table.Column>

                <Table.Column>
                  Action
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {users.map((user) => (
                  <Table.Row key={user._id}>
                    <Table.Cell>
                      {user.name}
                    </Table.Cell>

                    <Table.Cell>
                      {user.email}
                    </Table.Cell>

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
                    <Button >Role change</Button>;
                    </Table.Cell>

                    <Table.Cell>
                      <Button
                        size="sm"
                        color="danger"
                        variant="flat"
                        onPress={() =>
                          handleDeleteUser(user._id)
                        }
                      >
                        Delete
                      </Button>
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