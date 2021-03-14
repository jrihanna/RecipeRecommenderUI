import {useState, useEffect} from 'react';
import * as api from './api';

export function useRecipeSearch(path, crit) {
    const [recipes, setRecipes] = useState([]);
    const [searchParams, setSearchParams] = useState(crit);

    useEffect(() => {
        setRecipes([]);
        const fetchData = async () => {
            try {
                if(searchParams != null) {
                    const rawData = await api.get(path, searchParams.searchParam, true);
                    const resp = await rawData.json();
                    setRecipes(resp.recipes);
                }
            }
            catch(e) {
                console.log(e);
            }
        };
        fetchData();
    }, [searchParams, path]);
    
    return [recipes, searchParams, setSearchParams];
}