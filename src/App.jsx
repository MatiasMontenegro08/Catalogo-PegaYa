/**
 * Componente principal de la aplicación SPA "Catalogo-PegaYa".
 *
 * - Envuelve toda la aplicación con el CartProvider para manejar el estado global del carrito.
 * - Incluye el Header, Main (contenido principal) y Footer.
 * - Integra react-toastify para mostrar notificaciones (ToastContainer).
 * - Importa estilos globales y de Bootstrap.
 */

import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" limit={1}/>
        <Main />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App