import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
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
      <Button type="submit">Update Staff Details</Button>
    </Form>
  );
};

export default EditStaffForm;
