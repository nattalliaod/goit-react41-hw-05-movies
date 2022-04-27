import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from 'components/Container/Container';
import { ToastContainer } from 'react-toastify';
export const Layout = () => {
    return (
        <>
            <AppBar />
            <Container>
                <Outlet />
                <ToastContainer autoClose={3000} />
            </Container>
        </>
     
    );
};