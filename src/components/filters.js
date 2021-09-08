import {Select, Button, Stack, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import React, {useState, initialState} from "react";
import { FaList, FaTable } from "react-icons/fa";
import languages from '../data/languages';

export function Filters(){
    const [viewType, setViewType] = useState( initialState );
   
    return(
        <Stack isInline>
            <Select bg='white'>
                {languages.map((language) => (
                    <option value={language.value}>{language.label}</option>
                ))}
            </Select>

            <Menu>
                <MenuButton as={Button} bg='white' borderWidth={1} px='30px' fontWeight={400}>
                 DATE
                </MenuButton>
                <MenuList>
                    <MenuItem>Daily</MenuItem>
                    <MenuItem>Weekly</MenuItem>
                    <MenuItem>Monthly</MenuItem>
                    <MenuItem>Yearly</MenuItem>
                </MenuList>
            </Menu>

            <Stack isInline spacing={0} borderWidth={1} bg='white' rounded='5px' alignItems='center' ml='10px'>
                    <Button 
                        h='100%' 
                        fontWeight={400} 
                        roundedRight={0} 
                        bg={ viewType === 'grid' ? 'gray.200' : 'white'}
                        leftIcon={FaTable}>
                            Grid
                    </Button>
                    <Button
                        
                        h='100%' 
                        fontWeight={400} 
                        roundedRight={0} 
                        bg={ viewType === 'list' ? 'gray.200' : 'white'} 
                        leftIcon={FaList}>List
                        </Button>
            </Stack>
        </Stack>
    );
}