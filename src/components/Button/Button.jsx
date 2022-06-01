import React from "react";
import { ButtonElement } from "./Button.styles";
const Button = ({ title, primary, secondary, size, onClick, icon }) => {
  return (
    <ButtonElement
      primary={primary}
      secondary={secondary}
      size={size}
      onClick={onClick}
    >
      {icon && icon} {title}
    </ButtonElement>
  );
};

export default Button;
