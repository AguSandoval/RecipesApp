import {
    Flex,
    HStack,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
} from "@chakra-ui/react";
import React from "react";

const Chips: React.FC<{
    ingredients: string[];
    setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ ingredients, setIngredients }) => {
    const handleRemoveIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIngredients(
            ingredients.filter(
                (ingredient: string) => ingredient !== e.currentTarget.value
            )
        );
    };

    return (
        <Flex
            justify="center"
            align="center"
            w="auto"
            maxW="600px"
            flexWrap="wrap"
        >
            {ingredients?.map((ingredient) => (
                <Tag
                    size="md"
                    key={ingredient}
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                    m={1}
                >
                    <TagLabel>
                        <Text casing="capitalize">{ingredient}</Text>
                    </TagLabel>
                    <TagCloseButton
                        value={ingredient}
                        onClick={handleRemoveIngredient}
                    />
                </Tag>
            ))}
        </Flex>
    );
};

export default Chips;
