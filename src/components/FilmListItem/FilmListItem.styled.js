import styled from "@emotion/styled";

export const ImgPoster = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
  transform: scale(1.03);
  cursor: zoom-in;
}
`;

export const TitleFilm = styled.h2`
  font-size: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 0;
  text-align: center;
`;