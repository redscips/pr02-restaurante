import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCardapio } from '../../globais'

// tipos
type carrinhoEstado = {
  itens: ItemCardapio[]
  estaAberto: boolean
}

// inicia estado da parte
const initialState: carrinhoEstado = {
  itens: [],
  estaAberto: false
}

// partes 'slices'
const carrinhoParte = createSlice({
  name: 'carrinho',
  initialState,
  // redutores = acoes que manipula a parte 'slice'
  reducers: {
    adicao: (estado, acao: PayloadAction<ItemCardapio>) => {
      estado.itens.push(acao.payload)
    },
    remover: (estado, acao: PayloadAction<number>) => {
      estado.itens = estado.itens.filter((item) => item.id !== acao.payload)
    },
    abrirFechar: (estado, acao: PayloadAction<boolean>) => {
      estado.estaAberto = acao.payload
    },
    esvaziar: (estado) => {
      estado.itens = []
    }
  }
})

// exportacoes
export default carrinhoParte.reducer // exporta o redutor
// redutores = acoes
export const { adicao, remover, abrirFechar, esvaziar } = carrinhoParte.actions
