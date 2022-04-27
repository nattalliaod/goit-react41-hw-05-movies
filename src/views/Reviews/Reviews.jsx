import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import * as reviewsMovie from 'services/api';
import { Spinner } from "components/Loader/Loader";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function fetchReviewsMovies() {
            try {
                reviewsMovie.getReviewsMovie(movieId).then(({ results }) => {
                    if (results.length === 0) {
                        toast.error('No such information');
                        return
                    }
                    setReviews(results);
        
                })
            } catch {
                toast.error('Nothihg found', {
                    theme: 'colored',
                });
            }
        }
        fetchReviewsMovies();
        setIsLoading(false);
    }, [movieId]);

    return <>
        {isLoading && <Spinner />}
        {reviews.length > 0 && <ul>
            {reviews.map(({ author, content, id }) =>
                <li key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                </li>
            )}
        </ul>}
    </>;
}

export default Reviews;