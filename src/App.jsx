import React from "react";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle, { AppContainer } from "./themes/GlobalStyle";

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppContainer>App</AppContainer>
    </>
  );
};

export default App;
