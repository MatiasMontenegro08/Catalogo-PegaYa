import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { CartProvider } from './context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App