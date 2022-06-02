import styled from "styled-components";

export const FileInputWrapper = styled.div``;

export const Input = styled.input`
  color: transparent;
  user-select: none;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    content: "${(props) => props.title}";
    display: inline-block;
    background: ${({ outline }) => (outline ? "transparent" : "var(--white)")};
    border: 1px solid
      ${({ outline }) => (outline ? "var(--white)" : "var(--mischka)")};
    border-radius: var(--border-radius-sm);
    padding: ${({ size }) =>
      size === "large" ? ".5rem 1rem" : size === "small" ? ".5rem .7rem" : "0"};
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    font-size: var(--font-md);
    color: ${({ outline }) =>
      outline ? "var(--white)" : "var(--oxford-blue)"};
  }
`;
