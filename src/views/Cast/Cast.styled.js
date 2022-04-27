import styled from "@emotion/styled";

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(-1 * 20px);
  margin-top: calc(-1 * 20px);
  list-style: none;
`;

export const CastItem = styled.li`
  flex-basis: calc(100% / 3 - 170px);
  margin-left: 20px;
  margin-top: 35px;
`;

export const NameCharacter = styled.h3`
  font-size: 18px;
  font-weight: 800;
`;

export const ImgCharacter = styled.img`
  width: 250px;
  height: 85%;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DefaultText = styled.p`
  font-weight: 600;
  font-size: 18px;
`;