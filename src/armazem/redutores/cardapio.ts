// importacoes
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProps } from '../../globais'

// tipos
type carrinhoEstado = {
  item: ItemProps
  estaSelecionado: boolean
}

// inicia estado da parte
const initialState: carrinhoEstado = {
  item: {
    descricao: '',
    imagem: '',
    preco: 0,
    titulo: '',
    tipo: 'heroi',
    categorias: []
  },
  estaSelecionado: false
}

// parte
const itemCardapioParte = createSlice({
  name: 'itemCardapio',
  initialState,
  reducers: {
    selecionar: (estado, acao: PayloadAction<ItemProps>) => {
      estado.item = acao.payload
      estado.estaSelecionado = !estado.estaSelecionado
    }
  }
})

// exportacoes
export default itemCardapioParte.reducer // redutor
// acoes
export const { selecionar } = itemCardapioParte.actions
