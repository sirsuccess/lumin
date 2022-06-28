import { Box, Text, Spacer, Flex, Image } from "@chakra-ui/react";
import getSymbolFromCurrency from "currency-symbol-map";
import Modal from "../drawer";
import "./styles.css";

export default function Content({
  products,
  cart,
  setCart,
  currencies,
  queryProductAPI,
  currencySymbol,
}: any) {
  const addToCard = (cartItem: any) => {
    setCart([...cart, cartItem]);
  };
  const removeFromCard = (id: any) => {
    const cartWithIds = cart.filter((item: number) => item === id);
    const cartWithOutIds = cart.filter((item: number) => item !== id);
    cartWithIds.pop();

    setCart([...cartWithIds, ...cartWithOutIds]);
  };
  return (
    <Flex
      color="white"
      justifyItems=""
      className="content"
      flexWrap={"wrap"}
      pt="100px"
    >
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
          <Text mt="10px" mb="10px">
            From {getSymbolFromCurrency(currencySymbol)}
            {product.price}
          </Text>
          <Modal
            addToCard={addToCard}
            cartItems={product}
            currencies={currencies}
            queryProductAPI={queryProductAPI}
            products={products}
            cart={cart}
            currencySymbol={currencySymbol}
            removeFromCard={removeFromCard}
          />
          <Spacer />
        </Box>
      ))}
    </Flex>
  );
}
