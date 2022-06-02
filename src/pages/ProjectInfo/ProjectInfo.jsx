import React from "react";
import {
  ProjectInfoForm,
  ProjectInfoWrapper,
  FormProjectProfile,
  FormProjectBanner,
  ChangeBannerBtnContainer,
  FormProjectAvatarContainer,
  FormProjectAvatar,
  ChangeAvatarBtnContainer,
} from "./ProjectInfo.styles";

const ProjectInfo = () => {
  return (
    <ProjectInfoWrapper>
      <ProjectInfoForm>
        {/* Project Profile */}
        <FormProjectProfile>
          {/* Form Project Banner */}
          <FormProjectBanner>
            <ChangeBannerBtnContainer>Change Banner</ChangeBannerBtnContainer>
          </FormProjectBanner>
          {/* Avatar Container */}
          <FormProjectAvatarContainer>
            {/* Avatar */}
            <FormProjectAvatar
              src={require("../../assets/images/avatar.jpg")}
              alt="avatar"
            />
            {/* Change Avatar Btn Container */}
            <ChangeAvatarBtnContainer>Change Image</ChangeAvatarBtnContainer>
          </FormProjectAvatarContainer>
        </FormProjectProfile>
      </ProjectInfoForm>
    </ProjectInfoWrapper>
  );
};

export default ProjectInfo;
