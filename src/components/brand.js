import React from "react";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

export function Brand() {
    return (
        <Flex alignItems='center'>
                <Image src='/logo.svg' />
                <Box ml='10px'>
                    <Heading fontSize='24px'>GitHunt</Heading>
                    <Text color='gray.600'>Most starred project on GitHub</Text>
                </Box>
            </Flex>
    );
}