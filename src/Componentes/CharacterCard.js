import React from "react";
import {
     CardContainer,
     CharacterImage,
    } from "./styled";

const CharacterCard = (props) => {
    return<>
        <CardContainer>
            <CharacterImage alt={props.name} src={props.image}/>
            <h2>{props.name}</h2>
            <p>{props.status}</p>
            <p>{props.species}</p>
        </CardContainer>
    </>
}

export default CharacterCard;


