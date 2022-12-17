import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  width: 600px;
  text-align: center;
  margin-left: 32%;
  margin-top: 2%;
  background-color: cyan;
  border-radius: 8px;
`;

export const StyledSelect = styled.select`
  max-width: 50%;
  margin: 10px 150px 10px 150px;
  text-align: center;
  height: 80%;
  font-size: 20px;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #022b12;
  color:white;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "white")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
  background-color: white;
  font-size: 18px;
`;
export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  margin: 10px 150px 10px 150px;
  display: flex;
  justify-content: center;
  background-color: grey;
  border: solid 1px #008080;
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 20px;
  color:white;
`;
