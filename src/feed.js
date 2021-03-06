import react from "react";
import { Box, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import { PageHeader } from "./components/page-header";
import { GroupTitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";

export function Feed() {
    return <Box maxWidth='1200px' mx='auto'>
        <PageHeader />

        <Flex alignItems='center' justifyContent='space-between'>
            <GroupTitle />
            <Filters />
        </Flex>

        <SimpleGrid columns ={3} spacing='15px'>
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
            < Repo isListView={false} />
        </SimpleGrid>

        <Flex alignItems='center' justifyContent='center' my="20px">
            <Button colorScheme='blue'>Load next group</Button>
        </Flex>
    </Box>;
}