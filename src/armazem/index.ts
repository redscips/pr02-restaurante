// importacoes
import { configureStore } from '@reduxjs/toolkit'
import api from '../servicos/api'
// acoes
import carrinhoRedutor from '../armazem/redutores/carrinho'
import itemCardRedutor from '../armazem/redutores/cardapio'
import pedidoRedutor from '../armazem/redutores/pedidos'

// 'store' do redux
const armazem = configureStore({
  reducer: {
    // redutores
    carrinho: carrinhoRedutor,
    itemCard: itemCardRedutor,
    pedidos: pedidoRedutor,
    [api.reducerPath]: api.reducer // trazer a responsabilidade das conexoes p/ o redux
  },
  middleware: (gdm) => gdm().concat(api.middleware) // tratamento p/ conexoes url
})

// exportacoes
export default armazem
// exporta o tipo de dado sendo armazenado na 'store'
export type RootReducer = ReturnType<typeof armazem.getState>
