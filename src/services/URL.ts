import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';

interface TMDbResponse {
  results: any[];
  total_pages: number;
  total_results: number;
}

const TMDbAPI = {
  getNowPlaying: async (apiKey: string, page: number = 1): Promise<TMDbResponse> => {
    const response = await axios.get(
      `${API_BASE_URL}/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=${page}`
    );
    return response.data;
  },
  
  getPopular: async (apiKey: string, page: number = 1): Promise<TMDbResponse> => {
    const response = await axios.get(
      `${API_BASE_URL}/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`
    );
    return response.data;
  },
  
  searchMovies: async (apiKey: string, query: string, page: number = 1): Promise<TMDbResponse> => {
    const response = await axios.get(
      `${API_BASE_URL}/search/movie?api_key=${apiKey}&language=ko-KR&query=${query}&page=${page}`
    );
    return response.data;
  }
};

export default TMDbAPI;
