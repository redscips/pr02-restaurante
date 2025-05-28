// importacoes
import { selecionar } from '../../armazem/redutores/cardapio'
import { adicao, abrirFechar, remover } from '../../armazem/redutores/carrinho'
// ------------------------------
import {
  BotaoLink,
  formataNumero,
  ItemCardapio,
  ItemProps,
  ItemRestaurante
} from '../../globais'
import Item from '../item/Item'
import ListaContainer, { Caixa, Modal, ModalContainer } from './estilos'
// imagens
import fechar from '../../ativos/imagens/fechar.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../armazem'
import { useParams } from 'react-router-dom'

// tipo
type Props = {
  itens: ItemRestaurante[] | ItemRestaurante
  colunas: string
  colunagap: string
  gap: string
  tipo: 'heroi' | 'restaurante'
}

// componente
const ListaItens = ({ itens, colunas, colunagap, gap, tipo }: Props) => {
  // busca id parametro
  const { id } = useParams()

  // busca o estado do item selecionado
  const { item: itemSel, estaSelecionado } = useSelector(
    (estado: RootReducer) => estado.itemCard
  )

  const { itens: itensCarrinho } = useSelector(
    (estado: RootReducer) => estado.carrinho
  )

  // despacho
  const despacho = useDispatch()

  // funcoes
  const fechaModal = () => {
    // cria novo objeto vazio
    const itemVazio: ItemProps = {
      descricao: '',
      imagem: '',
      preco: 0,
      titulo: '',
      tipo: tipo,
      categorias: []
    }
    // executa acao
    despacho(selecionar(itemVazio))
  }

  const adicionarItemCarrinho = () => {
    // variavel controladora itens
    let qtdItens: number
    // verifica se ja existe item no carrinho
    const encontrado = itensCarrinho.find((item) => item.id === itemSel.id)
    //---------------------------
    if (encontrado) {
      // salva quantidade item
      qtdItens = (encontrado.qtd ? encontrado.qtd : 1) + 1
      // remove item primeiramente
      despacho(remover(encontrado.id))
    } else {
      qtdItens = 1
    }
    // cria um item cardapio
    const itemNovo: ItemCardapio = {
      descricao: itemSel.descricao,
      foto: itemSel.imagem,
      id: itemSel.id as number,
      nome: itemSel.titulo,
      porcao: itemSel.categorias?.join('') as string,
      preco: itemSel.preco as number,
      qtd: qtdItens
    }
    // executa acao
    despacho(adicao(itemNovo))
    fechaModal()
    // abre carrinho
    despacho(abrirFechar(true))
  }

  // def retorno
  return (
    <Caixa className="container">
      <ListaContainer colunas={colunas} colunagap={colunagap} gap={gap}>
        {itens === undefined ||
        (!Array.isArray(itens) && itens.cardapio.length === 0) ||
        (Array.isArray(itens) && itens.length === 0) ? (
          <h3>Carregando...</h3>
        ) : Array.isArray(itens) ? (
          itens.map((i, ind) => {
            // def retorno
            return (
              <Item
                key={ind}
                id={i.id}
                imagem={i.capa}
                titulo={i.titulo}
                categorias={i.tipoItem}
                nota={i.avaliacao}
                descricao={i.descricao}
                tipo={tipo}
              ></Item>
            )
          })
        ) : (
          itens.cardapio.map((j, indCard) => {
            return (
              <Item
                key={indCard}
                id={j.id}
                imagem={j.foto}
                titulo={j.nome}
                categorias={[j.porcao]}
                descricao={j.descricao}
                tipo={tipo}
                preco={j.preco}
              ></Item>
            )
          })
        )}
      </ListaContainer>
      {/* modal */}
      <Modal className={`modal ${estaSelecionado ? 'visivel' : ''}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModalContainer className="modal-body">
              <img src={itemSel.imagem} alt={itemSel.titulo} />
              <div>
                <h1 className="modal-title fs-5">{itemSel.titulo}</h1>
                <p>
                  {itemSel.descricao} <br /> <br />
                  {itemSel.categorias?.join('') !== undefined && (
                    <>Serve: {itemSel.categorias.join(' ')}</>
                  )}
                </p>
                <BotaoLink
                  to={`/restaurante/${id}/carrinho`}
                  type="button"
                  onClick={adicionarItemCarrinho}
                >
                  Adicionar ao carrinho -{' '}
                  {formataNumero(itemSel.preco as number)}
                </BotaoLink>
              </div>
              <button type="button" onClick={fechaModal}>
                <img src={fechar} alt="Icone para fechar o modal" />
              </button>
            </ModalContainer>
          </div>
        </div>
      </Modal>
    </Caixa>
  )
}

// exportacoes
export default ListaItens
