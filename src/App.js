import {useState, useEffect} from "react";
import { getCharacters } from "./API/RickAndMorty";
import styled from "styled-components";

const CharacterCard = styled.div`
    border: 1px solid black;
    color:black;
    background: white;
    padding: 10px;
    margin: 10px;
    width: 300px;
   `

function App() {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    getCharacters(setCharactersList)
  }, []);

  function showCharacters() {
    return charactersList.map((character) => {
        return <CharacterCard>{character.name}</CharacterCard>
    })
  }
    return(
      <div>
      <h1>The Rick and Morty</h1>
      {showCharacters()}
      </div>
    );
}

export default App;
