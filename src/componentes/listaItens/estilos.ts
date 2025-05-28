// importacoes
import styled from 'styled-components'
import { Botao, BotaoLink, CORES } from '../../globais'

// tipos
type Props = {
  colunas: string
  colunagap: string
  gap: string
}

// estilos
const ListaContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) => props.colunas};
  column-gap: ${(props) => props.colunagap};
  gap: ${(props) => props.gap};
  /* margens */
  margin-top: 80px;
  margin-bottom: 120px;
  /* tamanho */
  width: 100%;
  height: 100%;

  /* == responsividades: tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    width: 95%;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    width: 90%;
  }
`

const Caixa = styled.div`
  display: flex;
  justify-content: center;
  /* tamanho */
  max-width: 1024px;
  width: 100%;
  /* posicao */
  position: relative;
  z-index: 1;
`

const Modal = styled.div`
  /* tamanho maximo */
  width: 100%;
  height: 100%;
  display: none;

  &.visivel {
    display: flex;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 0;
  }

  > div {
    max-width: 1024px;
    width: 100%;
    max-height: 344px;
    height: 100%;
  }
`

const ModalContainer = styled.div`
  display: flex;
  /* tamanho */
  width: 100%;
  height: 100%;
  /* espcamento */
  padding: 32px;
  /* cores */
  background-color: ${CORES.vermelho_claro};
  color: ${CORES.branco};
  position: relative;

  > img {
    margin-right: 24px;
    /* tamanho */
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  > button {
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    color: ${CORES.branco};
    position: absolute;
    top: 8px;
    right: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 21px;
    }

    p {
      max-width: 656px;
    }

    ${BotaoLink} {
      width: 218px;
      height: 24px;
      margin-bottom: 27px;
      font-size: 14px;
      line-height: 16px;
      margin-left: 0;
    }
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
      margin-bottom: 16px;
      object-fit: cover;
    }

    ${Botao} {
      width: 100%;
    }
  }
`

// exportacoes
export default ListaContainer
export { Caixa, Modal, ModalContainer }
