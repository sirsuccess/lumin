import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import "./styles.css"
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

const Links = ['Shop', 'Learn'];



export default function WithAction({cart=0}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box bg={"rgb(245, 245, 244)"} px={4} borderBottom="2px solid grey" position="fixed" top={0} right={0} left={0} zIndex="2">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box className='logo'>LUMIN</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box mr="2">Account</Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                  <div className='img-container'>
                    <span>{cart}</span>

                <img src={"https://www.luminskin.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fcart-icon.9a18855a8d385c345cdceb7f6b714177.png&w=64&q=75"} alt="cart" />
                  </div>
                {/* <Avatar
                  size={'sm'}
                  src={
                    'https://www.luminskin.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fcart-icon.9a18855a8d385c345cdceb7f6b714177.png&w=64&q=75'
                  }
                /> */}
              </MenuButton>
             
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

  );
}

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);