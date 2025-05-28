// importacoes
import * as E from './estilos'
// -------------------------------------
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../../armazem'
// --------------------------------------
import { Titulo } from '../../../item/estilos'
import { BotaoLink, Descricao, formataNumero } from '../../../../globais'
// acoes
import { remover } from '../../../../armazem/redutores/carrinho'
import { adicionarItens } from '../../../../armazem/redutores/pedidos'
// imagens
import delecao from '../../../../ativos/imagens/lixeira-de-reciclagem.png'
import { useParams } from 'react-router-dom'

// componente
const Carrinho = () => {
  // parametros da URL
  const { id } = useParams()
  // itens do carrinho + controle se esta aberto
  const { itens } = useSelector((estado: RootReducer) => estado.carrinho)
  // despacho de acoes p/ armazem
  const despacho = useDispatch()

  // variaveis
  let quantidade: number, valorTotal: number

  // funcoes
  const retornaValorTotal = (): string => {
    // variavel temp
    let qtdTemp: number
    // ----------------------------------------------
    const valorTotal = itens.reduce((soma, atual) => {
      // quantidade
      qtdTemp = atual.qtd ? atual.qtd : 1
      // def retorno
      return (soma += qtdTemp * atual.preco)
    }, 0)
    // def retorno
    return formataNumero(valorTotal)
  }

  const removerItem = (id: number) => {
    // executa acao
    despacho(remover(id))
  }

  const retornaQtdTotal = (): number => {
    // variavel temp
    let qtdTemp: number
    // ----------------------------------------------
    const qtdTotal = itens.reduce((soma, atual) => {
      // quantidade
      qtdTemp = atual.qtd ? atual.qtd : 1
      // def retorno
      return (soma += qtdTemp)
    }, 0)
    // def retorno
    return qtdTotal
  }

  const adicionarItensPedido = () => {
    // verifica se este id ja existe
    despacho(adicionarItens(itens))
  }

  // chamada da funcao
  const qtdTotal = retornaQtdTotal()

  // def retorno
  return (
    <E.default>
      <div>
        <ul>
          {itens.map((item, ind) => {
            // calculos
            quantidade = item.qtd ? item.qtd : 1
            valorTotal = quantidade * item.preco
            // def retorno
            return (
              <E.ItemLista key={ind}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <Titulo>{item.nome}</Titulo>
                  <Descricao tamanho={14} tipo="heroi">
                    {quantidade} Und. x {formataNumero(item.preco)} ={' '}
                    {formataNumero(valorTotal)}
                  </Descricao>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    removerItem(item.id)
                  }}
                >
                  <img src={delecao} alt="Icone para deletar um item" />
                </button>
              </E.ItemLista>
            )
          })}
        </ul>
        <E.Total>
          <div>
            <p>Quantidade</p>
            <span>Valor total</span>
          </div>
          <div>
            <p>{qtdTotal <= 1 ? `${qtdTotal} item` : `${qtdTotal} itens`}</p>
            <span>{retornaValorTotal()}</span>
          </div>
        </E.Total>
        <BotaoLink
          to={`/restaurante/${id}/entrega`}
          onClick={adicionarItensPedido}
          type="button"
          className={itens.length > 0 ? 'visivel' : ''}
        >
          {itens.length > 0
            ? 'Continuar com a entrega'
            : 'Adicione itens antes de continuar com a entrega'}
        </BotaoLink>
      </div>
    </E.default>
  )
}

// exportacoes
export default Carrinho
