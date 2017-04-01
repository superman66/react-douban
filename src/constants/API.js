export const MOVIE_TYPE = {
    IN_THEATERS: 'in_theaters',
    COMING_SOON: 'coming_soon'
}
const HOST =process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:8081';
export const FETCH_MOVIE_LIST = `${HOST}/movie`

export const FETCH_MOVIE_BY_ID = `${HOST}/movie/subject`