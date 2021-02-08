import queryString from 'query-string';

export function get(path, queryParam) {

    queryParam = "Cashew";//'{"name": "sfsf","ingredients":[{"ingredient":{"name":"Egg"}}],"tag": ["KETO"]}'
    const query = queryString.stringify(queryParam);

    console.log(query)
    return fetch(`http://localhost:8081/recipe/search2?recipeName=${queryParam}`, {
        headers: {
            // Authorization: 'Basic dXNlcjoxMjM=',
            Origin: 'http://localhost:3000',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
            // withCredentials: true
        }
    });

}