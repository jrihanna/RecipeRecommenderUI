import queryString from 'query-string';
import {RECIPE_API_BASE_URL} from './config';

export function get(path, queryParam) {

    //queryParam = "Cashew";//'{"name": "sfsf","ingredients":[{"ingredient":{"name":"Egg"}}],"tag": ["KETO"]}'
    const query = queryString.stringify(queryParam);

    return fetch(`${RECIPE_API_BASE_URL}/${path}?${query}`, {
        headers: {
            // Authorization: 'Basic dXNlcjoxMjM=',
            Origin: 'http://localhost:3000',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
            // withCredentials: true
        }
    });

}