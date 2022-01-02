import {useState, useEffect} from "react";
import { getCharacters, getCharacterById, goToPage } from "../API/RickAndMorty";
import CharacterCard from "../Componentes/CharacterCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';


function Home() {
  const [charactersList, setCharactersList] = useState([]);
  const [infoPage, setInfoPage] = useState({});
  // const [characterModal, setCharacter] = useState(0);
  //  const { isOpen, onOpen, onClose } = useDisclosure()


  useEffect(() => {
    getCharacters(setCharactersList, setInfoPage)
  }, []);

  const handleSizeClick = (id) => {
    getCharacterById(id, setCharacter);
      onOpen();
  }


  //let { charId } = useParams();
  //import {useParams} from "react-router-dom";


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
                status={character.status}
                species={character.species}
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
      <h1>The Rick and Morty</h1>
      {infoPage.count != undefined && 
        <div>{infoPage.pages}</div>
      }
      {infoPage.prev != null ? <button onClick={()=> changePage(infoPage.prev) }>Retorna Página</button> : <span></span> }
      {infoPage.next != null ? <button onClick={()=> changePage(infoPage.next) }>Próxima Página</button> : <span></span> }
      {showCharacters()}

      {/* <Modal blockScrollOnMount={false} characterModal={characterModal?.i} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
             
              </ModalBody>
                   
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
               
              </ModalFooter>
            </ModalContent>
          </Modal> */}
      </div>



    );
}

export default Home;