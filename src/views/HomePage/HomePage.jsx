import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

import * as moviesApi from 'services/api';
import { PageHeading } from "components/PageHeading/PageHeading";
import { FilmList } from "components/FilmList/FilmList";
import { Spinner } from "components/Loader/Loader";

export const HomePage = () => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        async function fetchMovies() {
            try {
                moviesApi.getMovies(page).then(({ results }) => {
                    setMovie(state => [...state, ...results])
                    setIsLoading(false);
                })
            
            } catch {
                toast.error('Enter other query', {
                    theme: 'colored',
                });
            }
        }
        
        fetchMovies();
    }, [page]);

    const loadMore = () => {
        setPage(state => state +1)
    }
    
    return (
        <>
            <PageHeading text='Trending today' />
            {isLoading && <Spinner />}
            <FilmList film={movie} addPage={loadMore} />
        </>
    );
}