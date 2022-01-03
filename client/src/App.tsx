import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import RootRouter from './routes';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <RootRouter />
            </ChakraProvider>
        </BrowserRouter>
    );
};

export default App;
