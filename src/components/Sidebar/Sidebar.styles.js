import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideWrapper = styled.div`
  width: 250px;
`;

export const SideBarList = styled.ul`
  list-style-type: none;
`;

export const SideBarListItem = styled.li`
  color: ${({ active }) => (active ? "var(--ebony)" : "var(--river-bed)")};
  padding: 0.6rem;
  display: flex;
  align-items: center;
  background: ${({ active }) =>
    active ? "var(--athens-gray)" : "transparent"};
  border-radius: var(--border-radius-sm);
  margin-bottom: 0.3rem;
`;

export const SideBarListLink = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? "var(--ebony)" : "var(--river-bed)")};
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SideBarListLinkText = styled.span`
  margin-left: 0.8rem;
`;
