import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Spacer,
  Flex,
  Grid,
  theme,
  Image,
  Button,
} from "@chakra-ui/react";
import Navbar from "./components/navbar/index";
import Modal from "./components/modal";
import Drawer from "./components/drawer";
import Content from "./components/content";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const App = () => {
  const client = new ApolloClient({
    uri: "https://pangaea-interviews.now.sh/api/graphql",
    cache: new InMemoryCache(),
  });

  const [products, setProducts] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    queryProductAPI("NGN")
    queryCurrencyAPI()
  }, []);

  const queryProductAPI = (currency:string)=>{
    client
    .query({
      query: gql`
        {
          products {
            id
            image_url
            title
            price(currency: ${currency})
          }
        }
      `,
    })
    .then((result) => setProducts(result.data.products));
  }
  const queryCurrencyAPI = ()=>{
    client
    .query({
      query: gql`
        {
          currency
        }
      `,
    })
    .then((result) => setCurrencies(result.data));
  }

  console.log("hello", currencies);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" w="100%">
        <Navbar cart={cart.length}/>

        {/* <Grid minH="100vh"> */}
          <Content products={products} setCart={setCart} cart={cart}/>
        {/* </Grid> */}
      </Box>
    </ChakraProvider>
  );
};
