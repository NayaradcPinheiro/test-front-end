import { useEffect,useState } from "react";
import { getCharacterById } from "../API/RickAndMorty";
import CharacterCard from "./CharacterCard";
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
  } from '@chakra-ui/react'

// const Modal = (props) => {
//     const [character, setCharacter] = useState({});
//     const {className, modalRef} = props;

//     useEffect(() => {
//         getCharacterById(localStorage.getItem(`id`), setCharacter);
//       }, [props]);

     
//     return<>
//         <div key={modalRef} className={`${className} modal`} >
//             <div>
//                 {character?.image && 
//                      <CharacterCard
//                         key={character.id}
//                         image={character.image}
//                         name={character.name}
//                         status={character.status}
//                         species={character.species}
//                     />
//                 }
//             </div>
//         </div>
//         </>
// }

// export default Modal;

// function CharacterModal() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
  
//     return (
//       <>
        
//       </>
//     )
//   }

// export default CharacterModal