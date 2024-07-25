import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 2px solid #007bff;
`;

const Details = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #007bff;
`;

const Role = styled.p`
  margin: 5px 0 0;
  font-size: 1rem;
  color: #666;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;

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
