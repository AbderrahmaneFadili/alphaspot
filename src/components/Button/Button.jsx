import React from "react";
import { ButtonElement } from "./Button.styles";
const Button = ({ title, primary, secondary, size, onClick, icon, type }) => {
  return (
    <ButtonElement
      primary={primary}
      secondary={secondary}
      size={size}
      onClick={onClick}
      type={type}
    >
      {icon && icon} {title}
    </ButtonElement>
  );
};

export default Button;
