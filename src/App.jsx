import React from "react";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./themes/GlobalStyle";

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
};

export default App;
