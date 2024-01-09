import React from 'react';
import { Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, Menu, useDisclosure, Stack, VStack, HStack } from '@chakra-ui/react';
import {BiMenuAltLeft} from 'react-icons/bi'
import { Link } from 'react-router-dom';



const Header =()=> {

    const {isOpen,onOpen,onClose} = useDisclosure()

    return (
        <div>
            
            <Button
            zIndex={"overlay"}
            pos={'fixed'}
            top={'4'}
            left={'4'}
            colorScheme="purple"
            p={'0'}
            w={'10'}
            h={'10'}
            borderRadius={'full'}
            onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'}/>


            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
           <DrawerOverlay/>
           <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Game Hub</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'} marginTop={'30'}>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme={'purple'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button  onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    <Button  onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme={'purple'}>
                        <Link to={'/upload'}>Upload </Link>
                    </Button>





                </VStack>



                <HStack pos={"absolute"} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>

                <Button  onClick={onClose} colorScheme={'purple'}>
                    <Link to={'/login'} > LOg In</Link>
                </Button>

                <Button  onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                    <Link to={'./signup'} > Sign Up</Link>
                </Button>

                </HStack>
            </DrawerBody>
           </DrawerContent>
            </Drawer>
        </div>
    );
}

export default Header;