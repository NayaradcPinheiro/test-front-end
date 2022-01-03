import axios from "axios";
import { BASE_URL } from "../Constantes/RickAndMorty";

export const getCharacters = async (characterData, pageData) => {
    try {const {data} = await  axios.get(`${BASE_URL}/character/`)
        .then((res) =>{
            characterData(res.data.results);
            pageData(res.data.info);
        });
        return data;
    }catch(err){
        console.error("Erro" + err)
    };
 }

 export const getPages = async (url, characterData, pageData) => {
    try {const {data} = await  axios.get(url)
        .then((res) =>{
            characterData(res.data.results);
            pageData(res.data.info);
        });
        return data;
    }catch(err){
        console.error("Erro" + err)
    }; 
 }

 export const getCharacterById = async (id, characterData) => {
    try {const {data} = await  axios.get(`${BASE_URL}/character/${id}`)
        .then((res) =>{
            characterData(res.data);
        });
        return data;
    }catch(err){
        console.error("Erro" + err)
    }; 
 }

 export const goToPage = async (url, characterData, pageData) => {
    try {const {data} = await  axios.get(url)
        .then((res) =>{
            characterData(res.data.results);
            pageData(res.data.info);
        });
        return data;
    }catch(err){
        console.error("Erro" + err)
    }; 
 }

