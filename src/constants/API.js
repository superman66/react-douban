export const MOVIE_TYPE = {
    IN_THEATERS: 'in_theaters',
    COMING_SOON: 'coming_soon'
}
const HOST = process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:8081';

// 电影榜单信息
export const FETCH_MOVIE_LIST = `${HOST}/movie`

// 获取电影详情
export const FETCH_MOVIE_BY_ID = `${HOST}/movie/subject`

// 搜索电影
export const SEARCH_MOVIE = `${HOST}/movie/search`


export const MUSIC = {
    // 获取音乐详情
    FETCH_MUSIC_BY_ID: `${HOST}/music`,
    /**
        * 搜索音乐
        * q 和 tag 作为查询关键字，二者必传其一
        * start 取结果的offset，默认为0
        * count 取结果的条数
     */
    SEARCH_MUSIC: `${HOST}/search`
}

export const BOOK = {
    FETCH_BOOK_BY_ID: `${HOST}/book`,
    SEARCH_BOOK: `${HOST}/search`
}