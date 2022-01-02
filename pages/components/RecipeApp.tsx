import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

const RecipeApp = () => {
    const [data, setData] = useState<any[]>([]);
    console.log(data?.length);
    return (
        <>
            <SearchBar setData={setData} />
            <Flex
                direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                }}
                // align="center"
                justify="center"
            >
                {data?.length > 0 ? (
                    data.map((recipe: any) => (
                        <Card key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <Alert
                        status="error"
                        variant="subtle"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        h="auto"
                        w="auto"
                        borderRadius="8px"
                    >
                        <AlertIcon boxSize="40px" mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize="lg">
                            Oops! No recipes found...
                        </AlertTitle>
                        <AlertDescription maxWidth="md">
                            We're sorry to say that no recipes were found for
                            your search, maybe try a different search term?
                            Please, also be sure to separate
                            ingredients, like "eggs" *hit enter*, "onions" *hit
                            enter*... and so on.
                        </AlertDescription>
                    </Alert>
                )}
            </Flex>
        </>
    );
};

export default RecipeApp;
