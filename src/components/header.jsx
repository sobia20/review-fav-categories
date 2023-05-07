import { Box, Button, useDisclosure, Drawer, DrawerContent, DrawerOverlay ,DrawerHeader, DrawerBody,DrawerCloseButton, } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
import {useRef} from 'react'


export default function Header(){
    const {isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <Box p={2} className="bg-amber-900">
            <Button ref={btnRef} variant='flat' onClick={onOpen} leftIcon={<HamburgerIcon/>} ><span className="text-yellow-50">Categories</span></Button>
            
            <Drawer finalFocusRef={btnRef} size='xs' placement='left' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    Title
                </DrawerHeader>
                <DrawerBody>
                    Hello and welcome to the Categories App I have yet to name
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </Box>
    )
}