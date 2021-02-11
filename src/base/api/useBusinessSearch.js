import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(recipeName, ingredients, tags) {
    const [recipes, setRecipes] = useState([]);
    const [searchParams, setSearchParams] = useState({recipeName, ingredients, tags});

    useEffect(() => {
        setRecipes([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/recipe/search', searchParams);
                const resp = await rawData.json();
                setRecipes(resp.recipes);
            }
            catch(e) {
                console.log(e);
            }
        };
        fetchData();
    }, [searchParams]);

    return [recipes, searchParams, setSearchParams];
}