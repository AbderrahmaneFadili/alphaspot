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
  InputsContainer,
} from "./ProjectInfo.styles";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

const ProjectInfo = () => {
  return (
    <ProjectInfoWrapper>
      <ProjectInfoForm method="post" onSubmit={(e) => e.preventDefault()}>
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
        {/* Inputs  */}
        <InputsContainer>
          <InputField type={"text"} label="Name" />
          <InputField type={"text"} label="Slug" formatText="waffles.xyz/" />
        </InputsContainer>
        {/* Save Button */}
        <Button title="Save Settings" primary size={"small"} type="submit" />
      </ProjectInfoForm>
    </ProjectInfoWrapper>
  );
};

export default ProjectInfo;
