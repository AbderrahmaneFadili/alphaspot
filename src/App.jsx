import React from "react";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle, { AppContainer } from "./themes/GlobalStyle";
import Sidebar from "./components/Sidebar/Sidebar";
import ProjectInfo from "./pages/ProjectInfo/ProjectInfo";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppContainer>
        {/* Side Bar */}
        <Sidebar />
        {/* Routes */}
        <Routes>
          <Route path="project-info" element={<ProjectInfo />} />
        </Routes>
        {/* Project Info */}
      </AppContainer>
    </>
  );
};

export default App;
