import PropTypes from 'prop-types';
import { MovieInfoCard, ImgBox, Image, Title,Score, Text, Vote, GenresList, GenresItem } from './FilmDetailInfo.styled';
import defaultImg from 'images/no image.jpg';

const FilmDetailInfo = ({ movie }) => {
  const { title, release_date, vote_average, poster_path, overview, genres } = movie;

    return (
        <MovieInfoCard>
            <ImgBox>
                <Image
                    src={poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : defaultImg}
                    alt={title}
                />
            </ImgBox>

            <div>
                <Title>{title} <span>({release_date.substring(0, 4)})</span></Title>

                <Score>User score: <Text>{vote_average * 10}%</Text>
                    <Vote>{vote_average}</Vote></Score>

                <Score>Overview: <Text>{overview}</Text></Score>

                <GenresList>
                    {genres.map(({ id, name }) => (
                        <GenresItem key={id}>
                            <span>{name}</span>
                        </GenresItem>
                    ))}
                </GenresList>
            </div>
        </MovieInfoCard>
    );
};

FilmDetailInfo.defaultProps = {
  movie: PropTypes.shape({
    release_date: '',
    vote_average: 0,
    poster_path: defaultImg,
    overview: '',
    genres: [],
  }),
};

FilmDetailInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  }),
};

export default FilmDetailInfo;