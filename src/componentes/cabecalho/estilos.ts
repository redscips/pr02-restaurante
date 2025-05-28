// importacoes
import styled from 'styled-components'
// imagens
import fundoHeroi from '../../ativos/imagens/fundo_heroi.png'
import { Link } from 'react-router-dom'
import { CORES } from '../../globais'

// estilos
const CabContainer = styled.header`
  background-image: url(${fundoHeroi});
  /* tamanho */
  height: 186px;
  /* espacamento */
  padding: 63px 171px;

  /* classes */
  .container {
    display: flex;
    justify-content: space-between;
  }

  /* == responsividades: tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* espacamento */
    padding: 63px 40px;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    /* espacamento */
    padding: 15px 42px;

    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`

const LinkMarca = styled(Link)`
  color: ${CORES.vermelho_claro};
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 19px;

  /* smartphones */
  @media screen and (max-width: 767px) {
    margin-bottom: 19px;
  }
`

// exportacoes
export default CabContainer
export { LinkMarca }
