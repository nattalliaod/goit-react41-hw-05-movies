import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

import { HomePage } from 'views/HomePage/HomePage';
import { MoviesPage } from 'views/MoviesPage/MoviesPage';
import { NotFoundView } from 'views/NotFoundView/NotFoundView';
import { MovieDetailsPage } from 'views/MovieDetailsPage/MovieDetailsPage';

const Cast = lazy(() => import('views/Cast/Cast') /* webpackChunkName: "film-cast"*/);
const Review = lazy(() => import('views/Reviews/Reviews') /* webpackChunkName: "film-reviews"*/);
export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:slug' element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path='*' element={<NotFoundView />} />
        </Route>
      </Routes>
    </>
  );
};
