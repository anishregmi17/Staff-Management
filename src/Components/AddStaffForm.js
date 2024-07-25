import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
  }
`;

const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const AddStaffForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  const handleAddStaff = (e) => {
    e.preventDefault();
    if (name && role && avatar) {
      const newStaff = { id: Date.now(), name, role, avatar };
      const staff = JSON.parse(localStorage.getItem("staff")) || [];
      localStorage.setItem("staff", JSON.stringify([...staff, newStaff]));
      navigate("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Form onSubmit={handleAddStaff}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter staff name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          type="text"
          placeholder="Enter staff role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="avatar">Avatar URL</Label>
        <Input
          id="avatar"
          type="text"
          placeholder="Enter avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>
      <Button type="submit">Add Staff</Button>
    </Form>
  );
};

export default AddStaffForm;
