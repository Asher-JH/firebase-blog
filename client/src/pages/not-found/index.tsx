import React from 'react';
import { Center, Box, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

const NotFound: React.FC = () => {
    return (
        <Center h="100">
            <Box
                maxW="sm"
                p="6"
                display="flex"
                borderRadius="10px"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                backgroundColor="#F7FAFC"
            >
                <WarningTwoIcon w="32px" h="32px" color="teal" />
                <Text variant="h4">Page Not Found</Text>
            </Box>
        </Center>
    );
};

export default NotFound;
