// importacoes
import styled from 'styled-components'
import { BotaoLink, CORES } from '../../../../globais'
import { Titulo } from '../../../item/estilos'

// estilos
const CarrinhoContainer = styled.aside`
  display: flex;
  flex-direction: column;

  ul {
    display: block;
    padding: 32px 8px 0 8px;
  }

  ${BotaoLink} {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    text-align: center;
    /* margens */
    margin: 0 8px 0 8px;
    /* largura */
    width: 344px;
    /* escondido de inicio */
    pointer-events: none;

    &.visivel {
      pointer-events: all;
    }
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    ${BotaoLink} {
      width: 95%;
      font-size: 12px;
    }
  }
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 8px 16px 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
`

const ItemLista = styled.li`
  display: flex;
  max-width: 344px;
  width: 100%;
  /* cores */
  background-color: ${CORES.bege_2};
  color: ${CORES.vermelho_claro};
  /* espacamento */
  padding: 8px;
  margin-bottom: 16px;
  /* posicao */
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    /* margem */
    margin-right: 8px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    /* fundo transparente */
    background-color: transparent;
    border: none;
  }

  ${Titulo} {
    margin-bottom: 16px;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 8px;
    }
  }
`

// exportacoes
export default CarrinhoContainer
export { ItemLista, Total }
