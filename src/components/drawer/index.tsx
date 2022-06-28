import React, { useEffect, useState } from "react";
import {
  Box,
  DrawerContent,
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
import getSymbolFromCurrency from "currency-symbol-map";
import "./styles.css";

export default function DrawerExample({
  addToCard,
  cartItems,
  currencies,
  queryProductAPI,
  products,
  cart,
  currencySymbol,
  removeFromCard,
}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  const [cartProduct, setCartProduct] = useState([]);

  const handleCurrencyChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    queryProductAPI(value);
  };
  useEffect(() => {
    let unique = cart.filter(
      (x: any, i: any, a: string | any[]) => a.indexOf(x) === i
    );
    const cartToDisplay = unique.map((item: any) => {
      const filteredItem = products.filter((filter: any) => filter.id === item);
      const count = cart.filter((filter: any) => filter === item).length;
      return {
        ...filteredItem[0],
        count,
      };
    });
    setCartProduct(cartToDisplay);
  }, [cart, products]);
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
          addToCard(cartItems.id);
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
        <DrawerContent bg="rgb(242, 242, 239)">
          <DrawerCloseButton />
          <DrawerHeader>My Shoping Cart</DrawerHeader>

          <DrawerBody>
            <Select w="50px" ml="auto" onChange={handleCurrencyChange}>
              {currencies.map((currency: string, index: number) => (
                <option value={currency} key={index}>
                  {" "}
                  {currency}
                </option>
              ))}
            </Select>

            {cartProduct.map((item: any) => (
              <Box bg="#fff" key={item} className="card">
                <div className="title-section">
                  <div className="tile">{item.title}</div>
                  <div className="add-section">
                    <div
                      className="add"
                      onClick={() => removeFromCard(item.id)}
                    >
                      -
                    </div>{" "}
                    {item.count}
                    <div className="add" onClick={() => addToCard(item.id)}>
                      +
                    </div>
                  </div>
                </div>
                <div className="image-section">
                  <img src={item.image_url} alt="" />
                  <div className="price">
                    {getSymbolFromCurrency(currencySymbol)}
                    {item.price*item.count}
                  </div>
                </div>
              </Box>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
