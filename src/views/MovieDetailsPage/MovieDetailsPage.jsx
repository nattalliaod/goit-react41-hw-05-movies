import { useState, useEffect, lazy, Suspense } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import * as detailFilmApi from 'services/api';
import { Spinner } from "components/Loader/Loader";
import { Button } from 'components/Button/Button';

const FilmDetailInfo = lazy(() => import('views/FilmDetailInfo/FilmDetailInfo' /* webpackChunkName: "film-detail"*/));
const FilmAdditionalInfo = lazy(() =>
  import('views/FilmAdditionalInfo/FilmAdditionalInfo' /* webpackChunkName: "film-cast-review"*/),
);

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [film, setFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function fetchMovies() {
            try {
                detailFilmApi.getMoviesById(movieId).then(setFilm)
            } catch {
                toast.error('Enter other query', {
                    theme: 'colored',
                });
            }
        }
        fetchMovies();
        setIsLoading(false);

    }, [movieId]);
    
    const onGoBack = () => {
        navigate(location?.state?.from || '/');
    };
    
    return <>
        {isLoading && <Spinner />}
        <Button onClick={onGoBack} />
        
        <Suspense fallback={<Spinner />}>
            {film && <FilmDetailInfo movie={film} />}
            {film && <FilmAdditionalInfo />}
        </Suspense>
        
        <Suspense fallback={<Spinner />}>
            <Outlet />
        </Suspense>
    </>;
}