import { 
        Box,Flex, Avatar,Grid, GridItem,
        HStack, Link, IconButton, Button, Menu, MenuButton, MenuList,
        MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack
    } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {motion} from 'framer-motion';

const Links = {Home: '/',Service: '/Service',About: '/About', Products: '/Products', Signup: '/Signup', Blogs: '/Blogs', Contact: '/Contact'}

const NavLink = ({ children }) => (
  <Link
    px={5}
    py={4}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')}}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
    
  return (
    <>
      <Box bg={useColorModeValue('#500494', '#500494')} px={8} style={{zIndex:1000,boxShadow:"5px 5px 8px #888888"}}>
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}/>
          <HStack spacing={36} alignItems={'center'} style={{zIndex:1000}}>
            <Box style={{zIndex:1000}}><a href="/"><img src="/logo2.png" alt="Logo" style={{marginLeft:"-10px"}} width="160px" height="120px"/></a></Box>
            <HStack
              as={'nav'}
              spacing={5}
              display={{ base: 'none', md: 'flex' }}
              style={{zIndex:1000}}
              color="white"
              >
              
                <a href="/"> <NavLink key="Home">Home</NavLink></a>
                <a href="/service"> <NavLink key="/service">Service</NavLink></a>
                <a href="/about"> <NavLink key="/about">About</NavLink></a>
                <div class="dropdown">
                <span><Grid templateColumns='repeat(2, 0fr)' gap={0}>
                <GridItem><a href="/products">Products</a></GridItem>
                <GridItem><ChevronDownIcon/></GridItem>
                </Grid></span>
                <div class="dropdown-content">
                    <motion.div >
                    <ul>
                <li className="productLinks"><a style={{color:"black"}} href="/product?id=safemate" align={"center"}>SafeMet 1.0</a><br/></li>
                <li className="productLinks"><a style={{color:"black"}} href="/product?id=shield52">Shield 52</a><br/></li>
                <li className="productLinks"><a style={{color:"black"}} href="/product?id=shield71">Shield 71</a><br/></li>
                    </ul>
                    </motion.div>
                </div>
                </div>
                <a href="/signup"> <NavLink key="/signup">Signup</NavLink></a>
                <a href="/blogs"> <NavLink key="/blogs">Blogs</NavLink></a>
                <a href="/contact"> <NavLink key="/contact">Contact</NavLink></a>
                
            </HStack>
          </HStack>
          <Flex alignItems={'center'} style={{zIndex:1000}}>
            <Menu style={{zIndex:1000}}>
              <MenuButton
              style={{zIndex:1000}}
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                zIndex={1000}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'Assets/avatar.png'
                  }
                />
              </MenuButton>
              <MenuList style={{zIndex:1000}}>
                <MenuItem>Login</MenuItem>
                <MenuItem>Sign up</MenuItem>
                <MenuDivider />
                <MenuItem>Let's Contract</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} style={{color:'white'}}>
                {Object.keys(Links).map((key,index,value) => (
                <a href={key}> <NavLink key={value}>{key}</NavLink></a>
                ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
