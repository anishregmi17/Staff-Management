import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import StaffList from "./components/StaffList";
import AddStaffForm from "./components/AddStaffForm";
import EditStaffForm from "./components/EditStaffForm";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  color: #007bff;
  margin-bottom: 20px;
`;

const Navbar = styled.nav`
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: #007bff;
    margin: 0 10px;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Header>Staff Management</Header>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/add">Add Staff</Link>
      </Navbar>
      <Routes>
        <Route path="/" element={<StaffList />} />
        <Route path="/add" element={<AddStaffForm />} />
        <Route path="/edit/:id" element={<EditStaffForm />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
