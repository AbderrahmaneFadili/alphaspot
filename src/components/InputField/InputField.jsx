import React from "react";
import {
  FieldContainer,
  FieldFormat,
  FieldWrapper,
  Input,
  Label,
} from "./InputField.styles";

const InputField = ({ type, label, icon, formatText }) => {
  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <FieldContainer>
        {formatText && (
          <FieldFormat hasFormat={formatText && true}>{formatText}</FieldFormat>
        )}
        <Input type={type} hasFormat={formatText && true} />
      </FieldContainer>
    </FieldWrapper>
  );
};

export default InputField;
