import React from "react";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle, { AppContainer } from "./themes/GlobalStyle";
import Sidebar from "./components/Sidebar/Sidebar";
import ProjectInfo from "./pages/ProjectInfo/ProjectInfo";

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppContainer>
        {/* Side Bar */}
        <Sidebar />
        {/* Project Info */}
        <ProjectInfo />
      </AppContainer>
    </>
  );
};

export default App;
