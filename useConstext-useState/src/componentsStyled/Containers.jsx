import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top:15px;
  width: 100%;
  max-width: 700px;
  width: 600px;
  padding: 40px;
  background-color: ${({theme})=> theme.backgroundWraper};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

export const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: black;
`

export const StyledDivForm = styled.div`
  width:80%;
  max-width: 700px;
  margin-bottom: 10px;
  padding: 12px;
  background-color: ${({theme})=> theme.backgroundForm};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  color:${({theme})=> theme.text};
  display: flex;
  justify-content: space-between;
`
export const TodoListDivStly = styled.div`
  background-color: ${({theme})=> theme.backgroundForm};
  color:${({theme})=> theme.text};
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 10px 0; 
`
export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const DivFlexColunm = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`