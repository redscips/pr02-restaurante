// importacoes
import { useDispatch, useSelector } from 'react-redux'
import { Botao, Descritivo, Titulo } from '../../../../globais'
import * as E from './estilos'
import { abrirFechar, esvaziar } from '../../../../armazem/redutores/carrinho'
import { confirmarPedido } from '../../../../armazem/redutores/pedidos'
import { useComprarMutation } from '../../../../servicos/api'
import { RootReducer } from '../../../../armazem'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Finalizacao = () => {
  const { itens, idAtual } = useSelector(
    (estado: RootReducer) => estado.pedidos
  )
  // despacho de acoes p/ armazem
  const despacho = useDispatch()

  // navegacao
  const navegar = useNavigate()

  // estado
  const [flgConfirmarPedido, setFlgConfirmarPedido] = useState(false)

  // constante com funcao 'POST' p/ compra
  const [comprar, { data, isSuccess, error, isError }] = useComprarMutation()

  // funcoes
  // busca o indice do id atual
  const retornaIdxAtual = () => {
    return itens.findIndex((item) => item.id === idAtual)
  }

  const idx = retornaIdxAtual()

  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(false))
    // recarrega pagina
    navegar('/')
    window.location.reload()
  }

  const efetuarCompra = () => {
    // efetua o 'POST' do pedido carregado
    comprar(itens[idx])
    setFlgConfirmarPedido(!flgConfirmarPedido)
  }

  useEffect(() => {
    if (isSuccess && data) {
      // confirma o pedido com o novo ID
      despacho(confirmarPedido(data.orderId))
      // esvazia + fecha modal
      despacho(esvaziar())
    }
  }, [data, despacho, isSuccess, flgConfirmarPedido])

  if (error) {
    console.error('Erro ao comprar:', error)
  }

  // def retorno
  return (
    <E.default>
      {isSuccess && data ? (
        <>
          <Titulo>Pedido realizado - {data.orderId}</Titulo>
        </>
      ) : (
        <Titulo>Pedido - 0000000</Titulo>
      )}
      <div>
        {isSuccess && data ? (
          <Descritivo tamanho={14}>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </Descritivo>
        ) : (
          <Descritivo tamanho={14}>
            {isError && data ? 'Reveja os dados enviados' : ''}
          </Descritivo>
        )}
        {isSuccess && data ? (
          <Botao type="button" onClick={fecharCarrinho}>
            Fechar
          </Botao>
        ) : (
          <Botao type="button" onClick={efetuarCompra}>
            Concluir
          </Botao>
        )}
      </div>
    </E.default>
  )
}

// exportacoes
export default Finalizacao
