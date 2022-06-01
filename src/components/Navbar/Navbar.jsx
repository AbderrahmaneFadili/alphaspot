import React from "react";
import {
  Logo,
  LogoText,
  LogoWrapper,
  NavBarBottom,
  NavBarButtons,
  NavBarContainer,
  NavBarTop,
  NavBarTopTitle,
  NavBarWrapper,
  ProjectName,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavBarWrapper>
      {/* Nav bar top */}
      <NavBarTop>
        {/* Navbar container */}
        <NavBarContainer>
          {/* Logo container */}
          <LogoWrapper>
            <Logo
              src={require("../../assets/images/Mark.svg").default}
              alt="logo"
            />
            <LogoText>AlphaSpot</LogoText>
          </LogoWrapper>
          {/* Nav Bar Title */}
          <NavBarTopTitle to="your-projects">Your Projects</NavBarTopTitle>
          {/* Navbar Buttons */}
          <NavBarButtons>{/* add project button */}</NavBarButtons>
        </NavBarContainer>
      </NavBarTop>
      {/* Nav bar bottom */}
      <NavBarBottom>
        <ProjectName>Azuki</ProjectName>
      </NavBarBottom>
    </NavBarWrapper>
  );
};

export default Navbar;
