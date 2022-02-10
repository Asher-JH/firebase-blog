import React from 'react';
import { Stack, useColorModeValue } from '@chakra-ui/react';

import { NAV_ITEMS } from '../nav-items';
import SubNav from './sub-nav';

const MobileNav: React.FC = () => (
    <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}
    >
        {NAV_ITEMS.map((item) => (
            <SubNav key={item.label} {...item} />
        ))}
    </Stack>
);

export default MobileNav;
