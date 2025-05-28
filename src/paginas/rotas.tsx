// importacoes
import { Route, Routes } from 'react-router-dom'
// paginas
import Home from './home/Home'
import Restaurante from './restaurante/Restaurante'

// componente
const Rotas = () => {
  // def retorno
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id/*" element={<Restaurante />} />
    </Routes>
  )
}

// exportacoes
export default Rotas
