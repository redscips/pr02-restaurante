// importacoes
import { Route, Routes } from 'react-router-dom'
// sessoes
import Carrinho from './carrinho/carrinho'
import Entrega from './entrega/entrega'
import Pagamento from './pagamentos/pagamento'
import Finalizacao from './finalizacao/finalizacao'

// componente
const RotasSessoes = () => {
  // def retorno
  return (
    <Routes>
      <Route path="/restaurante/:id/carrinho" element={<Carrinho />} />
      <Route path="/restaurante/:id/entrega" element={<Entrega />} />
      <Route path="/restaurante/:id/pagamento" element={<Pagamento />} />
      <Route path="/restaurante/:id/finalizar" element={<Finalizacao />} />
    </Routes>
  )
}

// exportacoes
export default RotasSessoes
