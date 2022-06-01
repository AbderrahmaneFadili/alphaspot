import styled from "styled-components";

export const ButtonElement = styled.button`
  outline: 0;
  cursor: pointer;
  border: 0;
  padding: ${({ size }) =>
    size === "large" ? ".5rem 1rem" : size === "small" ? ".5rem .7rem" : "0"};
  font-size: var(--font-md);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-sm);
  color: ${(props) =>
    props.primary
      ? "var(--white)"
      : props.secondary
      ? "var(--oxford-blue)"
      : "black"};
  background-color: ${(props) =>
    props.primary
      ? "var(--royal-blue)"
      : props.secondary
      ? "var(--white)"
      : "black"};
  border: 2px solid
    ${(props) =>
      props.primary ? "none" : props.secondary ? "var(--mischka)" : "black"};
`;
