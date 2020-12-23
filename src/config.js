export const COMMUNITYCONTENTAPI = `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`;

//board 카테고리 Api
export const BOARDSAPI = `http://192.168.219.191:8000/boards`;
export const BOARDSEARCHAPI = `http://192.168.219.191:8000/boards?&category=${category}&search_key=${key}search=${searchInput}`;
