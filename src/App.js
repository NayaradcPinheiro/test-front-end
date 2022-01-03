import {useState, useEffect} from "react";
import { getCharacters, getCharacterById, goToPage } from "./API/RickAndMorty";
import CharacterCard from "./Componentes/CharacterCard";
// import ModalCard from "./Componentes/Modal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  Box,
  Center,
  Flex,
  Spacer,
  Grid,
  Image,
  VStack,
  StackDivider,
  Divider
} from '@chakra-ui/react';

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [infoPage, setInfoPage] = useState({});
  const [character, setCharacter] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure()


  useEffect(() => {
    getCharacters(setCharactersList, setInfoPage);
    getCharacterById(setCharacter)
  }, []);

  const handleSizeClick = (id) => {
   getCharacterById(id, setCharacter);
    onOpen();
  }

  function showCharacters() {
    charactersList.sort(function (a, b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });
    return charactersList.map((character) => {
        return(
          <div >
            <div onClick={() => handleSizeClick(character.id)} key={character.id} >
              <CharacterCard
                key={character.id}
                image={character.image}
                name={character.name}
              />
            </div>
          </div>
        )
    })
  }

  function changePage(url) {
    goToPage(url, setCharactersList, setInfoPage)
  }
  

    return(
      <div>
        <Center> 
         <Box centerContent>
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
          >
           <Heading centerContent size='3xl'>The Rick and Morty</Heading>
            <Box>
              <Grid templateColumns='repeat(4, 1fr)' gap={6} >
              {showCharacters()}
              </Grid>
            </Box> 

            
           </VStack>
          </Box>
        </Center>
    
      <Box h='60px'centerContent>
         <Flex>
           
        {infoPage.prev != null ? <Button size='10px' colorScheme='blue' onClick={()=> changePage(infoPage.prev) }>Retorna Página</Button> : <span></span> }
      <Spacer spacing={20} />
        {infoPage.next != null ? <Button size='10px' colorScheme='blue' onClick={()=> changePage(infoPage.next) }>Próxima Página</Button> : <span></span> }
      </Flex>
      </Box>
   
      

     
      


    <Modal blockScrollOnMount={false} character={character.id}  key={character.id} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader alignItems="center" >Nome: {character.name}</ModalHeader>
        <ModalCloseButton size='sm' />
        <ModalBody>

       <Image alt={character.name} src={character.image}/>
        
        <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
          {character.species}•{character.status}
          </Box>
       
        <Box>
          Gênero: {character.gender}
        </Box>
        </ModalBody>
    
      </ModalContent>
    </Modal> 
    </div>



    );
}

export default App;

