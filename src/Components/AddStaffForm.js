import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const AddStaffForm = ({ addStaff }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleAddStaff = useCallback(
    (e) => {
      e.preventDefault();
      if (name && role && avatar) {
        addStaff({ name, role, avatar });
        setName("");
        setRole("");
        setAvatar("");
      }
    },
    [name, role, avatar, addStaff]
  );

  return (
    <Form onSubmit={handleAddStaff}>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <Button type="submit">Add Staff</Button>
    </Form>
  );
};

export default AddStaffForm;
