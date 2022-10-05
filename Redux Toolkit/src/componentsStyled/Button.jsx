import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${({theme})=> theme.colorBoton};
  width: 150px;
  padding: 5px 3px;
  outline: none;
  border: 2px solid ;
  color: ${({theme})=> theme.text};
  border-radius: 5px;
  font-size: 15px;
`;

