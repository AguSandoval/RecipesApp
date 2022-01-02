import React from "react";
import Axios from "axios";
import axios from "axios";

const fetchRecipes = async (url: string) => {
    const res = await axios.get(url),
        data = res.data;
    console.log(data);
};

const useGetRecipesByIngredients = (ingredients: string) => {
    const apiKey = "a3e095152b6740e3bec220131e593575",
        quantityOfRecipes = "2",
        url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${quantityOfRecipes}&apiKey=${apiKey}`;

    fetchRecipes(url);
};

export default useGetRecipesByIngredients;
