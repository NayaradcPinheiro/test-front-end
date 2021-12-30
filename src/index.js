import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme ( { 
  color : { 
    marca : { 
      100 : "# f7fafc" , 
      900 : "# 1a202c" , 
    } ,
  } ,
} )

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
