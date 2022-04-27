import { Link } from 'react-router-dom';
import { TitleText } from 'components/PageHeading/PageHeading.styled';

export const NotFoundView = () => {
    return <TitleText>
            404 Page not found :(, go to{' '}
            <Link to="/">Home page</Link>
        </TitleText>
};