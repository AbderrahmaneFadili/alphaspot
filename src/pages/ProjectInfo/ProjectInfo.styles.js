import styled from "styled-components";
import { Wrapper } from "../pages.styles";
import banner from "../../assets/images/banner-image.png";

export const ProjectInfoWrapper = styled(Wrapper)`
  margin-left: 2.5rem;
  position: relative;
`;

export const ProjectInfoForm = styled.form``;

export const FormProjectProfile = styled.div`
  height: 250px;
`;

export const FormProjectAvatarContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 4rem;
  left: 3rem;
`;

export const FormProjectAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: var(--border-radius-lg);
  border: 5px solid var(--white);
  object-fit: scale-down;
`;

export const FormProjectBanner = styled.div`
  height: 180px;
  background: url(${banner}) no-repeat center/100% 100%;
  position: relative;
`;

export const ChangeBannerBtnContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: white;
`;

export const ChangeAvatarBtnContainer = styled.div`
  align-self: flex-end;
  position: relative;
  bottom: 1rem;
  left: 1rem;
`;
