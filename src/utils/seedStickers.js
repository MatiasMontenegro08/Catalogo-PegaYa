/**
 * Script para poblar la colección "stickers" en Firebase Firestore.
 * 
 * Este archivo define un array de objetos "stickers" y una función asíncrona
 * que recorre el array y sube cada sticker a la base de datos.
 * 
 * Uso:
 * 1. Asegúrate de tener configurada la conexión a Firebase en database.js.
 * 2. Ejecuta este archivo una vez para cargar los stickers en Firestore.
 * 3. Si necesitas actualizar los stickers, vacía la colección y vuelve a ejecutar el script.
 * 
 * NOTA: Este script está pensado para cargas iniciales o de desarrollo.
 *       No incluye lógica para evitar duplicados ni para actualizar stickers existentes.
 */

import { collection, addDoc } from 'firebase/firestore';
import database from '../database/database.js';

// Array de stickers a cargar en la base de datos.
// Cada objeto representa un sticker con sus propiedades.
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
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Soy canalla gritando",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522350/1_uva9do.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Soy Canalla"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Marcos Ruben festejo avion",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522351/3_ggk3ot.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Rubén Avión"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Foto desde arriba del estadio de Rosario Central",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522351/2_ehdxtv.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gigante de Arroyito"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Guerrero Canalla",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522353/5_gfgseu.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Guerrero Canalla"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Escudo con la palabra campeón",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522353/4_n8iuir.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Escudo Campeón"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Foto campeones",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522354/6_jkxya5.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Campeones"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Escudo de River Plate",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522101/1_goqqkv.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Escudo River"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Gallardo y jugadores levantando la copa",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522103/5_nozvj5.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Campeón libertadores"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "De tal palo tal astilla",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522103/3_dzbbu7.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "De tal palo"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Escudo y copa libertadores",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522103/2_fznxqk.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Escudo y copa"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Julian con la mascara del hombre araña",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757522104/4_al6nfc.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Julián Spiderman"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Escudo de Boca Juniors",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757521921/1_giir4e.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Escudo Boca"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Boca la mitad mas uno",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757521922/2_yubcje.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "La Mitad Más Uno"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Riquelme haciendo el topoyiyo",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757521923/3_ikqxko.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Riquelme Topoyiyo"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Diego Maradona con la camiseta de Boca",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757521923/5_jtacdh.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Diego Boca"
        },
        {
            "activo": true,
            "categoriaId": "Futbol Argentino",
            "codigo": "",
            "descripcion": "Martin Palermo festejando un gol",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757521923/4_ckkc3n.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Palermo"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Llegue tarde porque no queria venir",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701089/6_g5ofun.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "No quería venir"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Mother of cats",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701089/5_mzjtug.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Mother of cats"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Antisocial book club",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701089/3_gdobeb.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gato antisocial"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Tricolor haciendo corazones con las patas",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701090/4_cnptxd.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Tricolor Corazón"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito elijo la violencia",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701089/1_jrepin.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Elijo violencia"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito estoy bien",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701089/2_ki9iib.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Im ok!"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito negro en una caja",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701091/7_hqcm6x.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Cat box"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito negro espiando",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701091/8_i2xakr.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Vigilando"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatitos haciendo un totem",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701093/11_fd99ox.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gatitos tótem"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gato de mal humor",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701092/10_yiws31.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Mal humor"
        },{
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Tres gatitos superestrellas",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701093/12_mdlhgn.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gatitos cool"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatitos con lentes oscuros",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701094/14_xn3mvk.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Bad cats"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito usando una computadora",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701093/9_cqgxhu.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gato programador"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gato haciendo un corazon con las patas",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701094/13_lezrxp.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gato corazón"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito viendo tiktok",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701095/16_jfhwj4.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gato TikTok"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Frasco con gatitos anti depresión",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701096/17_sjpugi.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Anti depresión"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito con auriculares saludando con el pulgar",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701096/15_hgvq8q.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gatito ok"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito blanco durmiendo",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701097/20_ahffiu.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gatito blanco"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito negro estirandose",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701097/21_kvwtpm.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "La estiración"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gato comiendo pizza",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701097/19_l471sh.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Roba pizza"
        },{
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito negro comiendo pizza",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701098/22_rauj13.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Pizza love"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito negro asombrado",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701099/23_lna4es.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gato love"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito negro con llamas en los ojos",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701099/24_f7vjli.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Gatito travieso"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatitos estoy sensible",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701098/18_wxhy3o.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Estoy sensible"
        },
        {
            "activo": true,
            "categoriaId": "Gatos",
            "codigo": "",
            "descripcion": "Gatito negro durmiendo",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757701100/25_vasns9.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Negrito durmiendo"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi levantando la copa con su numbre en el fondo por 4 veces",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868356/3_deyvha.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 04"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi de brazos cruzado, goat",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868356/1_q5lbhc.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Goat"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi animado, con camiseta argentina",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868356/5_hkvmy2.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 01"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi levantando la copa con una mano",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868356/2_a3ogiq.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 02"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi, hoy juega la selección",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868356/6_s98kg5.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Juega la selección"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi con la camiseta del inter miam tomando mate",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868356/4_cxzuhd.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Goat Inter"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi anime",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868358/8_hpckim.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 03"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi con camiseta de argentina, dibujo",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868358/10_qjapxd.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 05"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi con los laureles y la copa",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868359/11_pe2dxz.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Escudo messi"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi besando la copa dibujo",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868359/12_by6zku.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Beso soñado"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi mostrando la camiseta del barcelona",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868359/7_qp3zpu.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 06"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Dibujo de messi acostado tomando mate con la copa",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868360/13_ogs4uk.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 07"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Estampita de messi",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868359/9_w3nlth.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 08"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi himno nacional",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868361/15_x4b8lw.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi 09"
        },
        {
            "activo": true,
            "categoriaId": "Messi",
            "codigo": "",
            "descripcion": "Messi tomando mate con la copa",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757868360/14_c0lhhv.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Messi campeón"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Calmate y tomate un mate",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965433/2_fncmxv.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Calmate"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Exceso en chisme",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965433/3_rhhqrc.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Exceso chisme"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Corazón, mis problemas, matecito",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965433/1_i7cane.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Matecito"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Matesito y chisme",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965434/4_suwaat.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Mate y chisme"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Yerba con poco polvo como vos",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965434/5_ucqoxz.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Con poco polvo"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Termo y mate, dibujo",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965435/7_x8rmpa.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Juego de mate"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Churros",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965435/8_rxxhuo.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Churros"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Una medialuna",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965435/9_oo9bfd.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Medialuna 01"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Amargos como tu vida",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965436/11_kj5emu.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Amargos"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Carpincho tomando mate",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965435/10_mxu4gx.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Carpincho mate 01"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Carpincho tomando mate 2",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965436/12_mg7f0s.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Carpincho mate 02"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Carasucia",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965437/14_ccjm8z.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Carasucia"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Alfajores de maicena",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965438/16_garef7.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Alfajor maicena"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Yerba cayadito",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965437/13_skvk79.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Cayadito"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Masitas don satur animado",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965438/17_ep2tcx.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Don Satur"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Alfajor de chocolate",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965438/15_akgoon.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Alfajor negro"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Juego de mate",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965439/18_vuvlum.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Juego mate 02"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Escudo compartiendo el mate",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757965439/19_dfnzel.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Mate 01"
        },
        {
            "activo": true,
            "categoriaId": "Mate",
            "codigo": "",
            "descripcion": "Love mate",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1757966160/6_ep6ilv.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Mate Love"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Lisa tomando cafe",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054313/4_rzvktw.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Lisa 01"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Lisa nueva identidad",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054313/3_sow1bv.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Lisa 02"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Lisa looser",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054313/1_qhbo8q.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Lisa looser"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Lisa abrazando dinero",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054313/2_qg5s51.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Lisa 03"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Homero comiendo pared",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054313/5_kah0th.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Homero 01"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Homero diciendo woohoo",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054314/6_hz7x2o.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Woohoo"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Homero inteligente",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054315/7_di8l4g.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Homero 02"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Homero buda",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054315/8_aj1ipl.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Homero buda"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Homero con dona de fondo",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054315/9_bdou3j.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Homero 03"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Bart de niño golpeando una olla",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054315/10_a1yrpj.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Soy fabuloso"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Bart grabando yo no fui",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054316/11_g8zmsy.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Yo no fui"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Bart elegante",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054316/12_ymflz2.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Bart 01"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Homero pelicula",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054317/15_umxgxm.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Homero 04"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Homero sin pizza y cerveza pierde la cabeza",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054317/14_tcmjob.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Sin cerveza"
        },
        {
            "activo": true,
            "categoriaId": "Los Simpsons",
            "codigo": "",
            "descripcion": "Bart garrote",
            "imagenUrl": "https://res.cloudinary.com/dvettmkur/image/upload/v1758054317/13_rw0eoz.svg",
            "precio": 700,
            "stock": 23,
            "titulo": "Bart 02"
        },
    ]

/**
 * Función principal para poblar la colección "stickers".
 * 
 * Recorre el array de stickers y sube cada uno a Firestore.
 * Si ocurre un error durante la carga, lo muestra en consola.
 */
const seedStickers = async () => {
    const stickersRef = collection(database, "stickers");
    try {
        for (const { id, ...rest } of stickers) {
            // Sube el sticker a Firestore (sin el campo id, si existiera)
            await addDoc(stickersRef, rest);
        }
        console.log("Stickers subidos correctamente");
    } catch (error) {
        console.error("Error subiendo stickers:", error);
    }
};

// Ejecuta la función para cargar los stickers.
seedStickers();