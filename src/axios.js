import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
// https://api.themoviedb.org/3/movie/550?api_key=136b638c5beb3a351b1632c6291d5f56
    
});
// instance.get("/movie/top_rated"); 

export default instance;