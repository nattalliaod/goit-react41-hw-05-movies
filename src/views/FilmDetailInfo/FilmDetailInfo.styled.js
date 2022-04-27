import styled from "@emotion/styled";

export const MovieInfoCard = styled.article`
  position: relative;
  display: flex;
  padding-bottom: 20px;
`;

export const ImgBox = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 300px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Score = styled.p`
  font-weight: 700;
  margin-bottom: 20px;
  margin-right: 5px;
`;

export const Text = styled.span`
  font-weight: normal;
`;

export const Vote = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #929197;
  color: #ffffff;
`;

export const GenresList = styled.ul`
  margin-top: 10px;
`;

export const GenresItem = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
  margin-bottom: 10px;
}

  ::before {
  content: ' ';
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 10px;

  background-color: #929197;
}
`;