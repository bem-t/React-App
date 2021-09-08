import { Box, Flex, Image, Heading, Text, Link, Stack, Button} from "@chakra-ui/react";
import React from "react";
import { FaAccessibleIcon, FaAmazon, FaGofore } from "react-icons/fa";

export function Repo(props){
    const {isListView} = props;

    return (
        <Flex borderWidth={1} bg='white' p='15px' rounded='5px'>
            <Flex flex={1} flexDir="column">
                {!isListView &&(
                    <Flex mb='15px'>
                <Image 
                src=''
                w={'35px'}
                h={'35px'}
                rounded='5px'
                />
                <Box ml='10px'>
                    <Heading fontSize='16px'>Avatar</Heading>
                    <Text fontSize='13px'>View profile</Text>
                </Box>
            </Flex>
        )}
            <Box mb='15px'>
                <Box mb='10px'>
                        <Flex fontSize='19px' fontWeight={700} mb="3px" color='purple.700'>
                            {isListView &&(
                                <>
                                <Text 
                                as='a'
                                href="github"
                                target="_blank"
                                >
                                    Avatar
                                </Text>
                                &nbsp;/&nbsp;
                                </>
                            )}
                            <Text 
                                as='a'
                                href="github"
                                target="_blank"
                                >
                                    Avatar
                            </Text>
                        </Flex>

                            
                        <Text 
                            fontSize='14px' 
                            color='gray.600'>
                                Built by &middot; 
                            <Link fontWeight={600}
                                href='' target='_blank'>
                                    avatar
                            </Link> 
                                    &middot; 
                                    September 8, 2021
                        </Text>
                </Box>

                <Text 
                    fontSize='14px' 
                    color='gray.900'>
                        Let's start to watch movie...
                </Text>
            </Box>

            <Stack isInline spacing="10px">
                <Button 
                    as='a' 
                    cursor='pointer' 
                    leftIcon={FaAccessibleIcon} 
                    variant='link' 
                    fontSize='14px' 
                    iconSpacing='4px' 
                    _hover={{textDecor: 'none'}}>
                        123
                </Button>
                <Button 
                    as='a' 
                    cursor='pointer' 
                    leftIcon={FaAccessibleIcon} 
                    variant='link' 
                    fontSize='14px' 
                    iconSpacing='4px' 
                    _hover={{textDecor: 'none'}}>
                        123
                </Button>
                <Button 
                    as='a' 
                    cursor='pointer' 
                    leftIcon={FaAccessibleIcon} 
                    variant='link' 
                    fontSize='14px' 
                    iconSpacing='4px' 
                    _hover={{textDecor: 'none'}}>
                        123
                </Button>
            </Stack>
        </Flex>
        {isListView && (
            <Image
            src = "data:image/jpeg;base64,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"
            w={"185px"}
            h={"185px"}
            rounded="100%"
            />
        )}
        </Flex>
    );
}