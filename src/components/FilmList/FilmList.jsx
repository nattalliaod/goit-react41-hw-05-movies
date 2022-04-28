import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FilmListItem } from 'components/FilmListItem/FilmListItem';
import { MovieList, MovieItem } from './FilmList.styled';

export const FilmList = ({ film, addPage }) => {
    const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 100,
    });
    
  useEffect(() => {
    if (!inView) {
      return;
    }
    addPage();
  });
    
    return <MovieList>
    {film.map(({ id, original_title, poster_path, original_name }, idx) => (
        <MovieItem key={idx} ref={ref}>
          <FilmListItem
            id={id}
            title={original_title}
            poster={poster_path}
            name={original_name}
          />
        </MovieItem>
      ))}
    </MovieList>
}

FilmList.propTypes = {
  film: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
      original_name: PropTypes.string,
    }),
  ),
  addPage: PropTypes.func,
};
