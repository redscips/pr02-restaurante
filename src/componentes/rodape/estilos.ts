// importacao
import styled from 'styled-components'
import { CORES } from '../../globais'

// estilos
const RodaContainer = styled.footer`
  background-color: ${CORES.bege_2};
  /* tamanho */
  height: 298px;
  /* espacamento */
  padding: 0 444px;
  /* tamanho */
  width: 100%;
  height: 100%;

  /* classes */
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* == responsividades: tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* espacamento */
    padding: 0 222px;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    /* espacamento */
    padding: 0 111px;
  }
`

const Lista = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
  margin-right: 16px;

  li {
    margin-right: 8px;
  }
`

// exportacoes
export default RodaContainer
export { Lista }
