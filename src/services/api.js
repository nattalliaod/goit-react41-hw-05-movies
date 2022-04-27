import axios from 'axios';

const API_KEY = '9a0f1edce66e2fe04b87c142a0eb5eeb';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const getMovies = async page => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}&page=${page}`);
  return response.data;
};

export const getSearchMovie = async (query, page) => {
  const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
  return response.data;

}

export const getMoviesById = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export const getCastMovie = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export const getReviewsMovie = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
}