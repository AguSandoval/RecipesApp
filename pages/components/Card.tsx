import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Avatar,
    Box,
    Button,
    Center,
    Circle,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Tag,
    TagLabel,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { BiLike } from "react-icons/bi";

const Card: React.FC<{ recipe: any }> = ({ recipe }) => {
    const handleGetInstructions = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.value);
    };

    return (
        <Container
            bg="white"
            borderRadius="8px"
            h="auto"
            m={2}
            shadow="lg"
            transition="all .2s ease"
            w="auto"
            _hover={{
                background: "gray.50",
                shadow: "md",
            }}
        >
            <Flex
                align="center"
                justify="center"
                w="100%"
                h="auto"
                direction="column"
                py={4}
            >
                <Heading size="md" textAlign="center" color="gray.600">
                    {recipe.title}
                </Heading>

                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    borderRadius="full"
                    boxSize="8em"
                    boxShadow="lg"
                    objectFit="cover"
                    mt={2}
                />
                <HStack my={4}>
                    <Tag size="md" colorScheme="green" borderRadius="full">
                        <Circle bg="green.400" p="2px" ml={-1} mr={2}>
                            <BiLike />
                        </Circle>
                        <TagLabel>
                            {recipe.likes} {recipe.likes > 1 ? "likes" : "like"}
                        </TagLabel>
                    </Tag>
                    <Tag size="md" colorScheme="blue" borderRadius="full">
                        <TagLabel>Type</TagLabel>
                    </Tag>
                </HStack>
                <Divider my={4} />
                {recipe.missedIngredients.length > 0 ? (
                    <>
                        <Heading size="md" textAlign="center" color="gray.600">
                            Missed Ingredients
                        </Heading>
                        <Flex
                            direction={{
                                base: "column",
                                sm: "column",
                                md: "row",
                                lg: "row",
                            }}
                            maxWidth="400px"
                            align="center"
                            justifyContent="center"
                            flexWrap="wrap"
                            w="auto"
                            h="auto"
                            pt={1}
                        >
                            {recipe.missedIngredients.map((ingredient: any) => (
                                <Tag
                                    size="md"
                                    colorScheme="red"
                                    borderRadius="full"
                                    m={1}
                                >
                                    <TagLabel>
                                        <Text casing="capitalize">
                                            {ingredient.name}
                                        </Text>
                                    </TagLabel>
                                </Tag>
                            ))}
                        </Flex>
                    </>
                ) : (
                    <Heading size="md" textAlign="center" color="green.600">
                        You have all the ingredients!
                    </Heading>
                )}
                <Divider my={4} />
                <Button
                    colorScheme="green"
                    onClick={handleGetInstructions}
                    value={recipe.id}
                >
                    Get instructions
                </Button>
            </Flex>
        </Container>
    );
};

export default Card;
