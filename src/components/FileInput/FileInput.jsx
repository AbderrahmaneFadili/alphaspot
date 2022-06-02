import React from "react";
import { FileInputWrapper, Input } from "./FileInput.styles";

const FileInput = ({ title, size, outline }) => {
  return (
    <FileInputWrapper>
      <Input
        type="file"
        title={title}
        size={size}
        outline={outline}
        accept="image/*"
      />
    </FileInputWrapper>
  );
};

export default FileInput;
