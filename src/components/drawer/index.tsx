import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  DrawerContent,
  Flex,
  Grid,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  Drawer,
  DrawerFooter,
  Button,
  Select,
  useDisclosure,
} from "@chakra-ui/react";

export default function DrawerExample({ addToCard, cartItem }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        bg="rgb(75, 85, 72)"
        color="white"
        rounded={0}
        w={"150px"}
        onClick={() => {
          onOpen();
          addToCard(cartItem);
        }}
      >
        Add to cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Shoping Cart</DrawerHeader>

          <DrawerBody>
            <Select w="50px" ml="auto">
              <option value="option1"> 1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
            </Select>
            <Box >

            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
