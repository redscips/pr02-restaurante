// importacoes
import styled from 'styled-components'
import { CORES } from '../../globais'
// imagens

// tipo
type Props = {
  imagem_url: string
  espacamento: string
  tipo: 'heroi' | 'restaurante'
  tamanho: number
}

type PropsTitulo = {
  peso: number
}

// estilos
const HeroiContainer = styled.div<Props>`
  position: relative;
  /* imagem de fundo */
  background-image: url(${(props) => props.imagem_url});
  background-size: cover;
  background-repeat: no-repeat;
  /* tamanho */
  height: ${(props) => props.tamanho + 'px'};
  /* espacamento */
  padding: ${(props) => props.espacamento};
  z-index: 0;

  /* valida adicionar fundo escuro */
  ${(props) =>
    props.tipo === 'restaurante' &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    div {
      position: relative;
      z-index: 2;
    }
  `}

  .container {
    /* tamanho */
    width: 100%;
    height: 100%;
    /* centraliza */
    display: flex;
    flex-direction: column;
    /* ---------------------------- */
    justify-content: space-between;
    align-items: ${(props) => (props.tipo === 'heroi' ? 'center' : 'start')};
  }

  /* == responsividades: tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* espacamento */
    padding: 0 208px;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    /* espacamento */
    padding: 0 104px;
  }
`

const Titulo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  /* centraliza */
  text-align: center;
  /* margens */
  margin-bottom: 40px;

  /* == responsividades: tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 22px;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

const SubTitulo = styled.h3<PropsTitulo>`
  font-size: 32px;
  line-height: 38px;
  font-weight: ${(props) => props.peso};
  /* margens */
  margin-top: 25px;
  margin-bottom: 32px;
  /* cor */
  color: ${CORES.branco};

  /* smartphones */
  @media screen and (max-width: 767px) {
    font-size: 16px;
    text-align: center;
  }
`

// exportacoes
export default HeroiContainer
export { Titulo, SubTitulo }
