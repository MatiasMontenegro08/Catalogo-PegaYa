/**
 * seedCategorias.js
 * 
 * Script para subir categorías predefinidas a Firestore.
 * Utiliza Firebase Firestore para agregar documentos a la colección "categorias".
 * 
 * Uso:
 * 1. Asegúrate de tener configurada la conexión a Firebase en database.js.
 * 2. Ejecuta este archivo una vez para cargar los stickers en Firestore.
 * 3. Si necesitas actualizar las categorías, vacía la colección "categorias" en Firestore y vuelve a ejecutar este script.
 * 
 * NOTA: Este script está pensado para cargas iniciales o de desarrollo.
 *       No incluye lógica para evitar duplicados ni para actualizar categorías existentes.
 */

import { collection, addDoc } from "firebase/firestore";
import database from '../database/database.js';

// Array de categorías a subir a Firestore

const categorias = [
    { titulo: "Todas" },
    { titulo: "Anime" },
    { titulo: "Animales" },
    { titulo: "Capibara" },
    { titulo: "Futbol Argentino" },
    { titulo: "Gatos" },
    { titulo: "Gaming" },
    { titulo: "Handball" },
    { titulo: "Los Simpsons" },
    { titulo: "Mate" },
    { titulo: "Messi" },
    { titulo: "Motos" },
    { titulo: "Perros" },
    { titulo: "Seleccion" },
    { titulo: "Stitch" },
]

/**
 * Función para subir las categorías a Firestore
 * 
 * Itera sobre el array de categorías y las sube a la colección "categorias"
 * en Firestore, omitiendo el campo 'id' ya que Firestore genera su propio ID automaticamente.
 * Maneja errores en caso de que la subida falle.
 */

const seedCategoria = async () => {
    const dbRef = collection(database, "categorias");
    try {
        for (const { id, ...rest } of categorias) {
            // Sube cada categoría a Firestore (sin el id)
            await addDoc(dbRef, rest);
        }
        console.log("Categorías subidas correctamente");
    } catch (error) {
        console.error("Error subiendo categorías: ", error);
    }
};

// Ejecuta la función para subir las categorías
seedCategoria();