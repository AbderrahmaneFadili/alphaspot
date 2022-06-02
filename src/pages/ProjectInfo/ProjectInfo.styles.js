import styled from "styled-components";
import { Wrapper } from "../pages.styles";
import banner from "../../assets/images/banner-image.png";

export const ProjectInfoWrapper = styled(Wrapper)`
  margin-left: 2.5rem;
`;

export const ProjectInfoForm = styled.form``;

export const FormProjectProfile = styled.div`
  height: 250px;
  position: relative;
`;

export const FormProjectAvatarContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0.4rem;
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
  right: 0;
  top: 1.5rem;
  color: white;
`;

export const ChangeAvatarBtnContainer = styled.div`
  align-self: flex-end;
  position: relative;
  bottom: 0.6rem;
  left: 1.5rem;
`;

export const InputsContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
  top: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const FormTitle = styled.h2`
  font-size: var(--font-lg);
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: var(--ebony);
`;

export const FormParagraph = styled.p`
  margin-bottom: 0.6rem;
  color: var(--pale-sky);
  line-height: 1.5;
`;

export const FormCheckContainer = styled.div`
  display: flex;
`;

export const FormCheckBox = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const CheckTitle = styled(FormTitle)`
  font-size: var(--font-md);
`;
export const FormCheckText = styled.div``;
