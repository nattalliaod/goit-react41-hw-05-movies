import styled from "@emotion/styled";

export const Search = styled.header`
top: 20;
  left: 0;
  margin: auto;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  min-height: 54px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 10px;
  color: #fff;
  background-color: grey;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
 display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
  font: inherit;
  font-size: 18px;
  padding-bottom: 10px;
}
`;

export const SearchIcon = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  :hover {
  opacity: 1;
}
`;