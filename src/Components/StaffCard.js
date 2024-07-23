import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const Details = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  margin: 0;
  color: #007bff;
`;

const Role = styled.p`
  margin: 5px 0 0;
  color: #666;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  &.edit {
    background-color: #ffc107;
    &:hover {
      background-color: #e0a800;
    }
  }
  &.delete {
    background-color: #dc3545;
    &:hover {
      background-color: #c82333;
    }
  }
`;

const StaffCard = ({ member, onDelete }) => {
  return (
    <Card>
      <Avatar src={member.avatar} alt={member.name} />
      <Details>
        <Name>{member.name}</Name>
        <Role>{member.role}</Role>
      </Details>
      <Actions>
        <Link to={`/edit/${member.id}`}>
          <Button className="edit">Edit</Button>
        </Link>
        <Button className="delete" onClick={() => onDelete(member.id)}>
          Delete
        </Button>
      </Actions>
    </Card>
  );
};

export default StaffCard;
