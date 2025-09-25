# Catálogo PegaYa

Catálogo PegaYa es una aplicación web SPA desarrollada en React que permite a los usuarios explorar un catálogo de stickers, filtrarlos por categorías, armar una lista de pedido y enviarla fácilmente por Instagram.

---

## 🚀 Características principales

- **Catálogo de stickers** con imágenes, precios y stock.
- **Filtrado por categorías** (con opción "Todas" y orden alfabético).
- **Carrito de compras**: agrega, elimina y ajusta cantidades de stickers.
- **Resumen de pedido**: muestra totales y permite copiar el pedido.
- **Envío rápido por Instagram**: copia el pedido y abre el chat de Instagram.
- **Modal de imagen**: visualiza cada sticker en grande.
- **Notificaciones** con [react-toastify](https://fkhadra.github.io/react-toastify/introduction).
- **Diseño responsive** y moderno con Bootstrap y CSS personalizado.
- **Datos persistidos en Firebase Firestore**.

---

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Bootstrap](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [ESLint](https://eslint.org/) para calidad de código

---

## 📦 Estructura del proyecto
src/ │ ├── assets/ # Imágenes y recursos estáticos ├── components/ # Componentes reutilizables y de UI │ ├── carrito/ # Carrito y subcomponentes │ ├── catalogo/ # Catálogo principal │ ├── categoriasListado/ # Listado de categorías │ ├── containerCard/ # Cards de stickers │ ├── drawer/ # Drawer flotante del carrito │ ├── footer/ # Footer de la app │ ├── header/ # Header de la app │ ├── info/ # Sección informativa │ ├── listaDesplegable/ # Dropdown de categorías (no usado por defecto) │ ├── main/ # Componente principal de la app │ └── modal/ # Componente modal reutilizable │ ├── context/ # Contexto global (carrito) ├── database/ # Datos locales y conexión a Firebase ├── pages/ # Páginas (si se agregan) ├── style/ # Variables y estilos globales ├── utils/ # Scripts de carga (seed) para Firestore │ ├── App.jsx # Componente raíz ├── main.jsx # Punto de entrada de la app └── index.css # Estilos globales

---

## ⚙️ Instalación y uso

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/MatiasMontenegro08/Catalogo-PegaYa.git
   cd Catalogo-PegaYa
   ```
2. **Instala las dependencias:**
    ```bash
    npm install
3. **Configura Firebase:**
    ```bash
    Crea un archivo src/database/database.js con tu configuración de Firebase.
    Asegúrate de tener las colecciones stickers y categorias en Firestore.
    ```
4. **Carga los datos iniciales (opcional):**
    ```bash
    Ejecuta los scripts de src/utils/seedCategorias.js y src/utils/seedStickers.js para poblar la base de datos.
    ```
5. **Inicia la app en modo desarrollo:**
    ```bash
    npm run dev
    ```
6. **Abre en tu navegador:**
    ```bash
    http://localhost:5173
    ```

## 📋 Notas
El proyecto está pensado para uso personal o de catálogo estático, sin panel administrativo.
Puedes personalizar las categorías y stickers editando los archivos JSON o la base de datos.
El componente Modal y el Dropdown de categorías están listos para ser usados si deseas ampliar la funcionalidad.

---

## 👨‍💻 Autor

Desarrollado por Montenegro Matias  
[Instagram](https://www.instagram.com/matias.montenegro.96/) | [LinkedIn](https://www.linkedin.com/in/matias-montenegro08/) | [Portfolio](https://portfolio-personal-sigma-seven.vercel.app/)

## 📄 Licencia
Este proyecto está bajo la licencia MIT.