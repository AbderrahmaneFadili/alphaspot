import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
`;

export const FieldContainer = styled.div`
  display: flex;
`;

export const Label = styled.label`
  font-size: var(--font-md);
  color: var(--oxford-blue);
  margin-bottom: 0.4rem;
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  border: 1px solid var(--mischka);
  border-radius: var(--border-radius-sm);
  border-top-left-radius: ${({ hasFormat }) => hasFormat && "0px"};
  border-bottom-left-radius: ${({ hasFormat }) => hasFormat && "0px"};
  padding: 0.8rem 1rem;
`;

export const FieldFormat = styled.div`
  height: 100%;
  padding: 0.8rem 1rem;
  color: var(--pale-sky);
  background: var(--athens);
  border: 1px solid var(--mischka);
  border-radius: var(--border-radius-sm);
  border-right: 0;
  border-top-right-radius: ${({ hasFormat }) => hasFormat && "0px"};
  border-bottom-right-radius: ${({ hasFormat }) => hasFormat && "0px"};
`;
