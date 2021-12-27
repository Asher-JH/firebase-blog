import * as React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Navbar from '@components/nav-bar';

export const App = () => (
    <ChakraProvider theme={theme}>
        <Navbar />
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack spacing={8}>
                    <Text>
                        Edit <Code fontSize="xl">src/App.tsx</Code> and save to
                        reload.
                    </Text>
                    <Link
                        color="teal.500"
                        href="https://chakra-ui.com"
                        fontSize="2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Chakra
                    </Link>
                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
);
