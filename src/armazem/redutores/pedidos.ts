// importacoes
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  DadosEndereco,
  DadosPagamento,
  ItemCardapio,
  Pedido
} from '../../globais'

// tipos
type PedidosEstado = {
  itens: Pedido[]
  idAtual: string
}

// inicia estado da parte
const initialState: PedidosEstado = {
  itens: [],
  idAtual: ''
}

export const retornaUltimoIdx = (): number => {
  return initialState.itens.length
}

export const retornaIdxAtual = (id: string): number => {
  return initialState.itens.findIndex((item) => item.id === id)
}

// parte
const pedidoParte = createSlice({
  name: 'pedido',
  initialState,
  reducers: {
    confirmarPedido: (estado, acao: PayloadAction<string>) => {
      // retorna ultimo indice
      const idx = retornaUltimoIdx()
      // adiciona endereco
      estado.itens[idx].id = acao.payload
      estado.itens[idx].confirmado = true
      estado.idAtual = ''
    },
    adicionarItens: (estado, acao: PayloadAction<ItemCardapio[]>) => {
      // validacao
      if (estado.idAtual === undefined || estado.idAtual === '') {
        // cria novo pedido
        const novoPedido: Pedido = {
          products: acao.payload,
          id: (retornaUltimoIdx() + 1) as unknown as string
        }
        // cria novo pedido
        estado.itens.push(novoPedido)
        estado.idAtual = novoPedido.id as string
      } else {
        // ultimo ID
        const idx = retornaUltimoIdx()
        // atualiza pedido atual
        estado.itens[idx].products = acao.payload
      }
    },
    adicionarEndereco: (estado, acao: PayloadAction<DadosEndereco>) => {
      // retorna ultimo indice
      const idx = retornaUltimoIdx()
      // adiciona endereco
      estado.itens[idx].delivery = acao.payload
    },
    adicionarPagamento: (estado, acao: PayloadAction<DadosPagamento>) => {
      // retorna ultimo indice
      const idx = retornaUltimoIdx()
      // adiciona endereco
      estado.itens[idx].payment = acao.payload
    }
  }
})

// exportacoes
export default pedidoParte.reducer // redutor
// acoes
export const {
  confirmarPedido,
  adicionarItens,
  adicionarEndereco,
  adicionarPagamento
} = pedidoParte.actions
