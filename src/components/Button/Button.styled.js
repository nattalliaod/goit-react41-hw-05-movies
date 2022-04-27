import styled from "@emotion/styled";

export const ButtonGoBack = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  background-color: #b4c9c9;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
  color: white;
  background-color: darkslateblue;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;