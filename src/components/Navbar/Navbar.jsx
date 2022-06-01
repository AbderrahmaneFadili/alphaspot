import React from "react";
import Button from "../Button/Button";
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
  NavBarBottomContainer,
  NavBarMenu,
  NavBarMenuItem,
  NavBarMenuLink,
  NavBarPublicPageLink,
} from "./Navbar.styles";
import { HiPlusSm } from "react-icons/hi";
import { ImLink } from "react-icons/im";

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
          <NavBarButtons>
            {/* add project button */}
            <Button
              primary
              title="New project"
              size="large"
              icon={
                <HiPlusSm
                  size={25}
                  style={{
                    marginRight: ".4rem",
                  }}
                />
              }
            />
          </NavBarButtons>
        </NavBarContainer>
      </NavBarTop>
      {/* Nav bar bottom */}
      <NavBarBottom>
        {/* Container */}
        <NavBarBottomContainer>
          {/* Project Name */}
          <ProjectName>Azuki</ProjectName>
          {/* Menu */}
          <NavBarMenu>
            <NavBarMenuItem>
              <NavBarMenuLink to="analytics">Analytics</NavBarMenuLink>
            </NavBarMenuItem>
            <NavBarMenuItem>
              <NavBarMenuLink active={true} to="project">
                Project
              </NavBarMenuLink>
            </NavBarMenuItem>
            <NavBarMenuItem>
              <NavBarMenuLink to="participants">Participants</NavBarMenuLink>
            </NavBarMenuItem>
            <NavBarMenuItem>
              <NavBarMenuLink to="settings">Settings</NavBarMenuLink>
            </NavBarMenuItem>
            <NavBarMenuItem>
              <NavBarMenuLink to="collabs">Collabs</NavBarMenuLink>
            </NavBarMenuItem>
            <NavBarMenuItem>
              <NavBarPublicPageLink to="public-page">
                <ImLink
                  style={{
                    marginRight: ".4rem",
                  }}
                />
                Public Page
              </NavBarPublicPageLink>
            </NavBarMenuItem>
          </NavBarMenu>
        </NavBarBottomContainer>
      </NavBarBottom>
    </NavBarWrapper>
  );
};

export default Navbar;
