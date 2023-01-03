import styled from "styled-components";

export const TitleH2 = styled.h2`
  background-color:${({ theme }) => theme.surface };
  color:${({ theme }) => theme.text};;
  font-size: 3em;
  padding: 4px 12px;
  text-align: center;
  border-radius: 5px;
  border: 4px inset ${({ theme }) => theme.border };
`

export const TitleH6 = styled.h6`
  font-size: 20px;
  background-color: ${({ theme }) => theme.surface };
  text-align: center;
  border: 2px inset ${({ theme }) => theme.border };
  border-radius: 5px;
`
export const TodoTitle = styled.p`
  font-size: 20px;
  text-align: center;
  margin-right: 10px;
  border-radius: 5px;
`
export const TodoDescription = styled.p`
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
`