import React from "react";
import {Box,
    Image,
    Heading,
 } from '@chakra-ui/react'

const CharacterCard = (props) => {
    return<>
    <Box
      p={5}
      shadow='md'
      borderWidth='1px'
      flex='1'
      borderRadius='md'
    >
     <Image alt={props.name} src={props.image}/>
      <Heading fontSize='xl'>{props.name}</Heading>
      
    </Box>
    </>
}

export default CharacterCard;


