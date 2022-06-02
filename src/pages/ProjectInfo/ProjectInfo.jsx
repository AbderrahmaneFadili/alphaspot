import React from "react";
import FileInput from "../../components/FileInput/FileInput";
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
import Button from "../../components/Button/Button";

const ProjectInfo = () => {
  return (
    <ProjectInfoWrapper>
      <ProjectInfoForm method="post">
        {/* Project Profile */}
        <FormProjectProfile>
          {/* Form Project Banner */}
          <FormProjectBanner>
            <ChangeBannerBtnContainer>
              <FileInput
                title="Change Project Page Banner Image"
                size={"large"}
                outline
              />
            </ChangeBannerBtnContainer>
          </FormProjectBanner>
          {/* Avatar Container */}
          <FormProjectAvatarContainer>
            {/* Avatar */}
            <FormProjectAvatar
              src={require("../../assets/images/avatar.jpg")}
              alt="avatar"
            />
            {/* Change Avatar Btn Container */}
            <ChangeAvatarBtnContainer>
              <FileInput title="Change Image" size={"small"} />
            </ChangeAvatarBtnContainer>
          </FormProjectAvatarContainer>
        </FormProjectProfile>
      </ProjectInfoForm>
    </ProjectInfoWrapper>
  );
};

export default ProjectInfo;
