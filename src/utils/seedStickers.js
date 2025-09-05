import { collection, addDoc } from 'firebase/firestore';
import database from '../database/database.js';

const stickers = [
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Kiojuro Rengoku comiendo",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745886/1_imjvnk.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Rengoku Umai!"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Zenitsu primera postura",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745888/10_ccyjju.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Zenitsu Postura"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Inosuke mostrando su flexibilidad",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745889/11_a0hkca.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Inosuke Flexible"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Los prota descansando uno arriba del otro",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745886/2_djy6ax.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Team Demon Slayer"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Zenitsu gritando de miedo",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745886/3_qhsmug.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Zenitsu Grita"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Kanao con un vaso de agua en la cabeza",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745886/4_ryoybh.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Kanao Vaso"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Nezuko con bambu en la boca",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745886/5_ktb9lo.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Nezuko Bambú"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Nezuko modo kawaii",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745886/6_gf5uec.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Nezuko Kawaii"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Tanjiro y Nezuco en la mochila",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745888/7_wltjjc.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Tanjiro y Nezuko"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Mitsuri aguantando la risa",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745888/8_inw1td.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Mitsuri Risa"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Inosuke con dos espadas",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756745888/9_xk9rsx.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Inosuke Postura"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Goku en la nube voladora",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757074/1_eys4cu.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Goku Nube"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Goku Super Saiyan 3",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757074/4_wnhmoa.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Goku SSJ3"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Maestro Roshi con gafas de sol",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757074/2_jtqpqz.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Roshi Cool"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Goku en pose heroica",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757075/3_uqcmel.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Goku"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Vegeta espiando",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757075/5_yjmzhs.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Vegeta Espía"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Goku muerde a majin boo",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757075/6_dzlupe.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Goku vs Boo"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Logo de Dragon Ball Z",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757076/7_kfmzyl.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "DBZ Logo"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Roshi, Krilin y Goku entrenando",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757077/8_ij6ome.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Maestro y alumnos"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Goku haciendo el kamehameha en super saiyan blue",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757077/10_y5j5yj.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Goku Kamehameha"
    },
    {
        "activo": true,
        "categoriaId": "Anime",
        "codigo": "",
        "descripcion": "Boo ataque a los titanes",
        "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1756757078/9_p6lcli.svg",
        "precio": 700,
        "stock": 23,
        "titulo": "Boo Titanes"
    }
]

const seedStickers = () => {
    stickers.map(({ id, ...rest }) => {
        const stickersRef = collection(database, "stickers");
        addDoc(stickersRef, rest);
    });

    console.log("stickers subidos correctamente");
}

seedStickers();