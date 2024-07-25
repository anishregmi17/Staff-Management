import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const EditStaffForm = () => {
  const { id } = useParams();
  const [staff, setStaff] = useState({});
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const allStaff = JSON.parse(localStorage.getItem("staff")) || [];
    const staffMember = allStaff.find((s) => s.id === parseInt(id));
    if (staffMember) {
      setStaff(staffMember);
      setName(staffMember.name);
      setRole(staffMember.role);
      setAvatar(staffMember.avatar);
    }
  }, [id]);

  const handleUpdateStaff = (e) => {
    e.preventDefault();
    const allStaff = JSON.parse(localStorage.getItem("staff")) || [];
    const updatedStaff = allStaff.map((s) =>
      s.id === parseInt(id) ? { ...s, name, role, avatar } : s
    );
    localStorage.setItem("staff", JSON.stringify(updatedStaff));
    navigate("/");
  };

  return (
    <Form onSubmit={handleUpdateStaff}>
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
      <Button type="submit">Update Staff Details</Button>
    </Form>
  );
};

export default EditStaffForm;
