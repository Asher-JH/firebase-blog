import React from 'react';
import {
    Popover,
    PopoverTrigger,
    Stack,
    Box,
    Link,
    useColorModeValue,
    PopoverContent,
} from '@chakra-ui/react';

import { NAV_ITEMS } from '../nav-items';

import SubNav from './sub-nav';

const DesktopNav: React.FC = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction="row" spacing={4}>
            {NAV_ITEMS.map((item) => (
                <Box key={item.label}>
                    <Popover trigger="hover" placement="bottom-start">
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={item.href || '#'}
                                fontSize="sm"
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                {item.label}
                            </Link>
                        </PopoverTrigger>

                        {item.children && (
                            <PopoverContent
                                border={0}
                                boxShadow="xl"
                                bg={popoverContentBgColor}
                                p={4}
                                rounded="xl"
                                minW="sm"
                            >
                                <Stack>
                                    {item.children.map((childItem) => (
                                        <SubNav
                                            key={childItem.label}
                                            {...childItem}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

export default DesktopNav;
