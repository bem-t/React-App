import {Select, Button, Stack, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import React from "react";
import { FaList, FaTable } from "react-icons/fa";
import languages from '../data/languages';

export function Filters(){
    return(
        <Stack isInline>
            <Select bg='white'>
                {languages.map((language) => (
                    <option value={language.value}>{language.label}</option>
                ))}
            </Select>

            <Menu>
                <MenuButton as={Button} bg='white' borderWidth={1} px='30px' fontWeight={400}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>

            <Stack isInline spacing={0} borderWidth={1} bg='white' rounded='5px' alignItems='center' ml='10px'>
                    <Button h='100%' fontWeight={400} roundedRight={0} bg='white' leftIcon={FaTable}>Grid</Button>
                    <Button h='100%' fontWeight={400} roundedRight={0} bg='white' leftIcon={FaList}>List</Button>
            </Stack>
        </Stack>
    );
}