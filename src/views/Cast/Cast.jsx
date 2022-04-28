import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import * as castMovie from 'services/api';
import { Spinner } from "components/Loader/Loader";
import defaultImg from 'images/no image.jpg';
import { CastList, CastItem, NameCharacter, ImgCharacter, DefaultText } from "./Cast.styled";

const Cast = () => {
    const { slug } = useParams();
    const movieId = slug.match(/[a-zA-Z0-9]+$/)[0];
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function fetchCastMovies() {
            try {
                castMovie.getCastMovie(movieId).then(({ cast }) => {
                    setCharacters(cast);
                    setIsLoading(false);
                })
            } catch {
                toast.error('Nothing found', {
                    theme: 'colored',
                });
            }
        }
        fetchCastMovies();
    }, [movieId]);
    
    return <>
        {isLoading && <Spinner />}
     { characters.length > 0 ?  (<CastList>
            {characters.map(({ id, character, name, profile_path }) => 
                <CastItem key={id}>
                    <ImgCharacter src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg} alt={name} />
                    <NameCharacter>{name}</NameCharacter>
                    <p>Character: <b>{character}</b></p>
                </CastItem>)}

        </CastList>) :  (
        <DefaultText>
          There is no information about actors for this movie.
        </DefaultText>
      )}
    </>
}

export default Cast;