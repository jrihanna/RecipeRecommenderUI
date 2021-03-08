import queryString from 'query-string';
import {RECIPE_API_BASE_URL} from './config';

export function get(path, queryParam) {
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

export function post(path, queryBody) {
    const body = JSON.stringify(queryBody);
    console.log(body)
    return fetch(`${RECIPE_API_BASE_URL}/${path}`, {
        method: 'POST',
        headers: {
            Origin: 'http://localhost:3000',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
        },
        body: body
    });
}