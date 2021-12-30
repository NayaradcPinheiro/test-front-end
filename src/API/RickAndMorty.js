import axios from "axios";
import { BASE_URL } from "../Constantes/RickAndMorty";

// export async function getCharacters () {
//     return new Promise((resolve) => {
//         axios.get(`${BASE_URL}/character`)
//             .then((res) => resolve(res))
//             .catch((err) => console.error("Erro", err.message))
//     });
// }

export function getCharacters(saveData) {
    axios.get(`${BASE_URL}/character/`)
    .then((res) => saveData(res.data.results))
    .catch((err) => console.log("Erro", err.message))
};