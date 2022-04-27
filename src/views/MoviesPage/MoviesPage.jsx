import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Searchbar } from "components/Searchbar/Searchbar";
import { FilmList } from "components/FilmList/FilmList";
import { Spinner } from "components/Loader/Loader";
import * as detailApi from 'services/api';

export const MoviesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('query') ?? '';

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const handleSubmit = order => {
        if (order !== query) {
            setMovies([]);
            setPage(1);
            setIsLoading(false);
            navigate({ ...location, search: `query=${order}` });
        }
    };

    const loadMore = () => {
        setPage(state => state + 1);
    };

    useEffect(() => {
        if (query === '') {
            setMovies([]);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);

        async function fetchMovies() {
            try {
                detailApi.getSearchMovie(query, page).then(({ results }) => {
                    if (results.length === 0) {
                        setIsLoading(false);
                        setMovies([]);
                        toast.error('Not found!');
                        return;
                    }
                    setMovies(prevState => [...prevState, ...results]);
                    setIsLoading(false);
                })
            } catch {
                toast.error('Enter other query', {
                    theme: 'colored',
                });
            }
        }
        fetchMovies();
     
    }, [page, query]);
    
    return (
        <>
            <Searchbar onSubmit={handleSubmit} />
            {isLoading && <Spinner />}
            {movies && <FilmList film={movies} addPage={loadMore} />}
        </>
    );
}