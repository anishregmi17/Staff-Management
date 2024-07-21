import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const StaffCard = ({ member }) => {
  return (
    <Card>
      <Avatar src={member.avatar} alt={member.name} />
      <div>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </Card>
  );
};

export default StaffCard;
