import React, { useState, useEffect } from "react";
import StaffCard from "./StaffCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StaffListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StaffList = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const allStaff = JSON.parse(localStorage.getItem("staff")) || [];
    setStaff(allStaff);
  }, []);

  const handleDelete = (id) => {
    const allStaff = JSON.parse(localStorage.getItem("staff")) || [];
    const updatedStaff = allStaff.filter((s) => s.id !== id);
    localStorage.setItem("staff", JSON.stringify(updatedStaff));
    setStaff(updatedStaff);
  };

  return (
    <StaffListContainer>
      {staff.map((member) => (
        <StaffCard key={member.id} member={member} onDelete={handleDelete} />
      ))}
    </StaffListContainer>
  );
};

export default StaffList;
