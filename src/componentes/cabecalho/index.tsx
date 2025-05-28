// importacoes
import { Imagem } from '../../globais'
// imagens
import logo from '../../ativos/imagens/logo_heroi.png'
import CabContainer, { LinkMarca } from './estilos'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../armazem'
// acoes
import { abrirFechar } from '../../armazem/redutores/carrinho'
import { useParams } from 'react-router-dom'

// componente
const Cabecalho = () => {
  // parametros da URL
  const { id } = useParams()
  // carrinho
  const { itens, estaAberto } = useSelector(
    (estado: RootReducer) => estado.carrinho
  )
  // cria o despacho de acoes p/ armazem redux
  const despacho = useDispatch()

  // funcoes
  const abrirCarrinho = () => {
    // executa acao
    despacho(abrirFechar(!estaAberto))
  }

  // def retorno
  return (
    <CabContainer>
      <div className="container">
        <LinkMarca to="/">Restaurantes</LinkMarca>
        <Imagem
          margem_topo={0}
          margem_baixo={0}
          src={logo}
          alt="Logo do E-FOOD"
        />
        <LinkMarca to={`/restaurante/${id}/carrinho`} onClick={abrirCarrinho}>
          {itens.length} produto(s) no carrinho
        </LinkMarca>
      </div>
    </CabContainer>
  )
}

// exportacoes
export default Cabecalho
