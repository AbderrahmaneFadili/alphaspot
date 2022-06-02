import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../themes/GlobalStyle";

export const NavBarWrapper = styled.nav`
  background: var(--white);
`;

export const NavBarTop = styled.div`
  border-bottom: 2px solid var(--athens-gray);
`;

export const NavBarContainer = styled.div`
  width: 100%;
  max-width: var(--container-mxw-lg);
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  @media screen and (min-width: 1300px) {
    max-width: var(--container-mxw-xlg);
  }
`;

export const NavBarBottom = styled.div``;

export const NavBarBottomContainer = styled(Container)`
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  padding: 1rem 0;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const LogoText = styled.h2`
  font-size: var(--font-xlg);
`;

export const NavBarTopTitle = styled(Link)`
  margin-left: 2rem;
  color: var(--ebony);
  text-decoration: none;
  position: relative;
  padding: 1rem 0;

  &::before {
    content: "";
    position: absolute;
    height: 2.2px;
    width: 100%;
    background-color: var(--cornflower-blue);
    bottom: -0.5rem;
    left: 0;
  }
`;

export const NavBarButtons = styled.div`
  margin-left: auto;
`;

export const AddProjectButton = styled.div``;

export const ProjectName = styled.h2`
  font-size: var(--font-xlg);
`;

export const NavBarMenu = styled.ul`
  display: flex;
  list-style: none;
  width: 670px;
  justify-content: space-between;
`;

export const NavBarMenuItem = styled.li``;

export const NavBarMenuLink = styled(Link)`
  color: var(--pale-sky);
  text-decoration: none;
  padding: 0.5rem 0.7rem;
  border-radius: var(--border-radius-sm);
  background-color: ${({ active }) => (active ? "var(--athens)" : "none")};
  color: ${({ active }) => (active ? "var(--oxford-blue)" : "var(--pale-sky)")};

  &:hover {
    background-color: var(--athens);
    color: var(--oxford-blue);
  }
`;

export const NavBarPublicPageLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--portage);
  text-decoration: none;
`;
