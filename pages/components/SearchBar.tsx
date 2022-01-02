import {
    Button,
    Center,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useGetRecipesByIngredients from "../hooks/useGetRecipesByIngredients";
import Chips from "./Chips";

const SearchBar: React.FC<{setData: React.Dispatch<React.SetStateAction<any[]>>}> = ({setData}) => {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [searchTerms, setSearchTerms] = useState<string>("");
    const { data, error, isLoading } = useGetRecipesByIngredients(searchTerms);
    setData(data);
    // const query = useGetRecipesByIngredients(searchTerms);

    const handleEnterIngredients = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        var keyCode = e.code || e.key;
        if (
            keyCode == "Enter" &&
            e.currentTarget.value &&
            !ingredients.includes(e.currentTarget.value)
        ) {
            setIngredients([...ingredients, e.currentTarget.value]);
            e.currentTarget.value = "";
        }
    };

    const handleSearch = () => {
        setSearchTerms(ingredients.join(",+"));
        // useGetRecipesByIngredients(ingredientsStr);
    };

    // console.log(data.length);
    // console.log(isLoading);

    return (
        <Flex py={4} align="center" justify="center" direction="column">
            <InputGroup size="lg" w="auto" pb={2}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<BiSearch color="gray.300" />}
                />
                <Input
                    type="text"
                    placeholder="Search by ingredients..."
                    onKeyPress={handleEnterIngredients}
                />
            </InputGroup>
            <Chips ingredients={ingredients} setIngredients={setIngredients} />
            <Button
                isDisabled={ingredients.length < 1}
                colorScheme="blue"
                my={2}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Flex>
    );
};

export default SearchBar;
