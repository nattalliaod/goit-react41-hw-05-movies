import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import slugify from 'slugify';
import { ImgPoster, TitleFilm } from './FilmListItem.styled';
import defaultImg from 'images/no image.jpg';

export const FilmListItem = ({ id, title, poster, name }) => {
    const location = useLocation();

    return <>
        <Link
            to={`/movies/${slugify(`${name ? name : title} ${id}`, { lower: true })}`}
            state={{ from: location }}
            style={{
                color: 'inherit',
                textDecoration: 'none'
            }}>
            <ImgPoster src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultImg} alt={title} title={title} />
            <TitleFilm>{name ? name : title}</TitleFilm>
        </Link>
    
    </>;
}

FilmListItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster: PropTypes.string,
    name: PropTypes.string,
}