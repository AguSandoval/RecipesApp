import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchInstructions = async (url: string) => {
    const res = await axios.get(url),
        data = await res.data;
    return data;
};

const useGetRecipeInstructions = (id: string) => {
    const apiKey = "a3e095152b6740e3bec220131e593575",
        url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`;

    const query = useQuery("getInstructions", () => fetchInstructions(url), {
        refetchOnWindowFocus: false,
    });

    return query;
};

export default useGetRecipeInstructions;
