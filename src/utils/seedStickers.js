import { collection, getDocs } from 'firebase/firestore';
import database from '../database/database.js';

const seedStickers = async () => {
    try {
        const categoriasRef = collection(database, 'categorias');
        const dataDb = await getDocs(categoriasRef);
        const data = dataDb.docs.map((categoriasDb) => ({
            id: categoriasDb.id,
            ...categoriasDb.data()
        }));
        console.log("Se cargaron las categorias:", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

seedStickers();

const stickers = [
    {
        "activo": true,
        "categoriaId": "futbol",
        "codigo": "A7K9FJ2Q",
        "descripcion": "Sticker de Futbol número 1",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1755635870/IMG-20250724-WA0002_gnhi41.jpg",
        "precio": 700,
        "stock": 23,
        "titulo": "Futbol 1"
    }
]