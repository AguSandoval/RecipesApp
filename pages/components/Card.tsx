import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Avatar,
    Box,
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

const Card = () => {
    return (
        <Container
            w="auto"
            shadow="lg"
            h="auto"
            borderRadius="8px"
            bg="white"
            transition="all .2s ease"
            _hover={{
                background: "gray.50",
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
                    Recipe's name
                </Heading>

                <Image
                    src="https://spoonacular.com/recipeImages/640352-312x231.jpg"
                    alt="Input the info here"
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
                        <TagLabel>5 Likes</TagLabel>
                    </Tag>
                    <Tag size="md" colorScheme="blue" borderRadius="full">
                        <TagLabel>Type</TagLabel>
                    </Tag>
                </HStack>
                <Text align="center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa illum natus aspernatur laudantium, omnis ut eaque
                    voluptatem quis provident, recusandae fugit odit hic soluta
                    est quibusdam nesciunt quasi distinctio repudiandae.
                </Text>
                <Accordion w="100%" allowToggle my={4}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="center">
                                    More info
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Container>
    );
};

export default Card;
