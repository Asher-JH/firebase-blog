import React from 'react';
import {
    Link,
    Stack,
    useDisclosure,
    Flex,
    Text,
    useColorModeValue,
    Icon,
    Collapse,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

type Props = {
    label: string;
    href: string;
    children?: {
        label: string;
        href: string;
    }[];
};

const SubNav: React.FC<Props> = ({ label, href, children }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href || '#'}
                justify="space-between"
                align="center"
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition="all .25s ease-in-out"
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: '0!important' }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle="solid"
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align="start"
                >
                    {children &&
                        children.map((item) => (
                            <Link key={item.label} py={2} href={item.href}>
                                {item.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

export default SubNav;
