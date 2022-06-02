import React from "react";
import {
  SideBarList,
  SideBarListItem,
  SideBarListLink,
  SideBarListLinkText,
  SideWrapper,
} from "./Sidebar.styles";
import { BsBookmark } from "react-icons/bs";
import { SiHackthebox } from "react-icons/si";
import { HiOutlineUserAdd } from "react-icons/hi";
import { BsPatchCheck } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const sideBarList = [
  {
    Icon: ({ size, style }) => <BsBookmark size={size} style={style} />,
    link: "Project Info",
    to: "project-info",
    active: true,
  },
  {
    Icon: ({ size, style }) => <SiHackthebox size={size} style={style} />,
    link: "Registration Flow",
    to: "registration-flow",
    active: false,
  },
  {
    Icon: ({ size, style }) => <HiOutlineUserAdd size={size} style={style} />,
    link: "Signup Access",
    to: "signup-access",
    active: false,
  },
  {
    Icon: ({ size, style }) => <BsPatchCheck size={size} style={style} />,
    link: "Transparency",
    to: "transparency",
    active: false,
  },
  {
    Icon: ({ size, style }) => <RiTeamLine size={size} style={style} />,
    link: "Team",
    to: "team",
    active: false,
  },
  {
    Icon: ({ size, style }) => <FaRegTimesCircle size={size} style={style} />,
    link: "Black liste",
    to: "black-list",
    active: false,
  },
  {
    Icon: ({ size, style }) => <BiEnvelope size={size} style={style} />,
    link: "Message",
    to: "message",
    active: false,
  },
];

const Sidebar = () => {
  return (
    <SideWrapper>
      <SideBarList>
        {sideBarList.map(({ Icon, link, to, active }) => {
          return (
            <SideBarListItem active={active}>
              <SideBarListLink active={active} to={to}>
                <Icon
                  size={19}
                  style={{
                    color: active ? "var(--ebony)" : "var(--gray-chateau)",
                  }}
                />
                <SideBarListLinkText>{link}</SideBarListLinkText>
              </SideBarListLink>
            </SideBarListItem>
          );
        })}
      </SideBarList>
    </SideWrapper>
  );
};

export default Sidebar;
