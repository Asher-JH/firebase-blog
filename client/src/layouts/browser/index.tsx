import React from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '@components/nav-bar';

const Browser: React.FC = ({ children }) => {
    return (
        <Flex direction="column">
            <Navbar />
            <main>{children}</main>
        </Flex>
    );
};

export default Browser;
