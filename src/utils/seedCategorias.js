import { collection, addDoc } from "firebase/firestore";
import database from '../database/database.js';


const categorias = [
    { titulo: "Todas"},
    { titulo: "Anime"},
    { titulo: "Animales"},
    { titulo:"Capibara"},
    { titulo:"Futbol Argentino"},
    { titulo:"Gatos"},
    { titulo:"Gaming"},
    { titulo:"Handball"},
    { titulo:"Los Simpsons"},
    { titulo:"Mate"},
    { titulo:"Messi"},
    { titulo:"Motos"},
    { titulo:"Perros"},
    { titulo:"Seleccion"},
    { titulo:"Stitch"},
]

const seedCategoria = () => {
    categorias.map(({ id, ...rest }) => {
        const categoriasRef = collection(database, "categorias");
        addDoc(categoriasRef, rest);
    });

    console.log("categorias subidas correctamente");
}

seedCategoria();