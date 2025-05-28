// importacoes
import { RootReducer } from '../../armazem'
import { useDispatch, useSelector } from 'react-redux'
// acoes
import { abrirFechar } from '../../armazem/redutores/carrinho'
// sessoes
import RotasSessoes from './paginasSessoes/rotasSessoes'
// estilos
import CarrinhoCaixa, { CarrinhoOpaco, Sessoes } from './estilos'

// componente
const SessoesCompras = () => {
  // itens do carrinho + controle se esta aberto
  const { estaAberto } = useSelector((estado: RootReducer) => estado.carrinho)

  // despacho de acoes p/ armazem
  const despacho = useDispatch()

  // funcoes
  const fecharCarrinho = () => {
    // executa acao
    despacho(abrirFechar(!estaAberto))
  }

  // def retorno
  return (
    <CarrinhoCaixa className={estaAberto ? 'visivel' : ''}>
      <CarrinhoOpaco onClick={fecharCarrinho} />
      <Sessoes>
        {/* rotas */}
        <RotasSessoes />
      </Sessoes>
    </CarrinhoCaixa>
  )
}

// exportacoes
export default SessoesCompras
