import React, { useState, useEffect } from "react";
import StaffList from "./components/StaffList";
import AddStaffForm from "./components/AddStaffForm";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const App = () => {
  const [staff, setStaff] = useState([]);
  const [totalStaff, setTotalStaff] = useState(0);

  useEffect(() => {
    setTotalStaff(staff.length);
  }, [staff]);

  const addStaff = (newStaff) => {
    setStaff([...staff, newStaff]);
  };

  return (
    <AppContainer>
      <h1>Staff Management</h1>
      <AddStaffForm addStaff={addStaff} />
      <StaffList staff={staff} />
      <p>Total Staff: {totalStaff}</p>
    </AppContainer>
  );
};

export default App;
