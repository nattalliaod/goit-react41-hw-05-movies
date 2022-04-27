import { useLocation } from "react-router-dom";
import { scrollDownPages } from "utils/scrollPage";
import { InfoThumb, TitleInfo, LinkList, LinkItem, Link } from "./FilmAdditionalInfo.styled";

const FilmAdditionalInfo = () => {
    const { state } = useLocation();

    return (
        <InfoThumb>
            <TitleInfo>Additional information:</TitleInfo>
            <LinkList>
                <LinkItem>
                    <Link
                        to={`cast`}
                        state={{ ...state }}
                        onClick={scrollDownPages()}
                    >
                        Cast
                    </Link>
                </LinkItem>
                <LinkItem>
                    <Link
                        to={'reviews'}
                        state={{ ...state }}
                        onClick={scrollDownPages()}
                    >
                        Reviews
                    </Link>
                </LinkItem>
            </LinkList>
        </InfoThumb>
    );
}

export default FilmAdditionalInfo;