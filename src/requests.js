const API_KEY = 'ecfaaed89cfbc68f027db531f7486239';

const requests = [
    {fetch : `/movie/popular?api_key=${API_KEY}`, type : 'popular'},
    {fetch : `/movie/top_rated?api_key=${API_KEY}`, type : 'top_rated'},
    {fetch : `/movie/upcoming?api_key=${API_KEY}`, type : 'upcoming'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=28`, type : 'action'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=12`, type : 'adventure'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=16`, type : 'animation'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=35`, type : 'comedy'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=80`, type : 'crime'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=99`, type : 'documentary'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=18`, type : 'drama'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=10751`, type : 'family'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=14`, type : 'fantasy'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=36`, type : 'history'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=27`, type : 'horror'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=10402`, type : 'music'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=9648`, type : 'mystery'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=10749`, type : 'romance'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=878`, type : 'sciencefiction'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=10770`, type : 'tvmovie'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=53`, type : 'thriller'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=10752`, type : 'war'},
    {fetch : `/discover/movie?api_key=${API_KEY}&with_genres=37`, type : 'western'},
]


export default requests;