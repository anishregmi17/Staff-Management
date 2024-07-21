import React from "react";
import StaffCard from "./StaffCard";
import styled from "styled-components";

const StaffListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StaffList = ({ staff }) => {
  return (
    <StaffListContainer>
      {staff.map((member, index) => (
        <StaffCard key={index} member={member} />
      ))}
    </StaffListContainer>
  );
};

export default StaffList;
