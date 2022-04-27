import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const InfoThumb = styled.div`
  margin-bottom: 10px;
`;

export const TitleInfo = styled.h2`
  font-size: 32px;
`;

export const LinkList = styled.ul`
  display: flex;
`;

export const LinkItem = styled.li`
  margin-right: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;

  color: currentColor;
  background-color: #929197;

  transition: 250ms linear;

  :hover,
  :focus {
  text-decoration: underline;
  color: white;
  background-color: darkslateblue;
}

  &.active {
  color: #fff;
  background-color: darkslateblue;
}
`;
