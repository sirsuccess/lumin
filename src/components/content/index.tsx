import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Spacer,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import Modal from "../drawer"
import "./styles.css"

export default function Content({products, cart, setCart}:any){
  const addToCard = (cartItem:any)=>{
    setCart([...cart, cartItem])
  }

  return (
    <Flex color="white" justifyItems="" className="content" flexWrap={"wrap"} pt="100px"  >
      {products.map((product: any) => (
        <Box
          // bg="black"
          color="black"
          h="350px"
          key={product.id}
          p={6}
          maxW={"430px"}
          w="300px"
          mx="30px"
          mb="30px"
          className="product"
          
          // w={'full'}
        >
          <Image
            boxSize="100px"
            objectFit="contain"
            src={product.image_url}
            alt={product.title}
          />
          <Text mt="20px">{product.title}</Text>
          <Text mt="10px" mb="10px">From ${product.price}</Text>
          <Modal addToCard={addToCard} cartItem={product}/>
          <Spacer />
        </Box>
      ))}
    </Flex>
  );
};
