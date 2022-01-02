import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchRecipes = async (url: string) => {
    const res = await axios.get(url),
        data = await res.data;
    return data;
};

const useGetRecipesByIngredients = (ingredients: string) => {
    // const [query, setQuery] = useState<any>();
    const apiKey = "a3e095152b6740e3bec220131e593575",
        quantityOfRecipes = "2",
        url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${quantityOfRecipes}&apiKey=${apiKey}`,
        url2= `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${ingredients}&number=${quantityOfRecipes}`;
    // console.log(ingredients)
    const query = useQuery("getRecipes", () => fetchRecipes(url), {
        refetchOnWindowFocus: false,
    });
    useEffect(() => {
        query.refetch();
    }, [ingredients]);

    return query;
};

export default useGetRecipesByIngredients;
