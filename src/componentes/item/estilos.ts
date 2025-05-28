import styled from 'styled-components'
import { CORES } from '../../globais'
import { Link } from 'react-router-dom'

// tipos
type Props = {
  tipo: 'heroi' | 'restaurante'
}

const ItemContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  /* posicao */
  position: relative;
  /* tamanho */
  width: 100%;
  height: 100%;

  /* imagens */
  > img {
    width: 100%;
    height: ${(props) => (props.tipo === 'heroi' ? '217px' : '167px')};
    object-fit: cover;
  }

  ${(props) =>
    props.tipo === 'restaurante'
      ? `border: 8px solid ${CORES.vermelho_claro}`
      : ''};

  /* == responsividades: tablet - smartphones */
  @media screen and (max-width: 1023px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`

const Categorias = styled.ul`
  display: inline-flex;
  justify-content: end;
  /* posicao */
  position: absolute;
  top: 16px;
  right: 16px;

  li {
    background-color: ${CORES.vermelho_claro};
    color: ${CORES.bege_2};
    /* margens */
    margin-left: 8px;
    /* espacamentos */
    padding: 6px 4px;
  }
`

const Classe = styled.div`
  display: flex;

  img {
    width: 21px;
    height: 21px;
    /* margens */
    margin-left: 8px;
  }
`

const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Titulo = styled.h2`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
`

const Nota = styled(Titulo)`
  text-align: center;
`

const ItemInfo = styled.div<Props>`
  padding: 8px;
  /* cor */
  background-color: ${(props) =>
    props.tipo === 'heroi' ? CORES.branco : CORES.vermelho_claro};
  border: 1px solid ${CORES.vermelho_claro};
  /* validacao */
  ${(props) =>
    props.tipo === 'restaurante' &&
    `
      color: ${CORES.bege_2};
  `}
`

const LinkBotao = styled(Link)`
  line-height: 16px;
  padding: 4px 6px;
  border: none;
  height: 24px;
  text-decoration: none;
  background-color: ${CORES.vermelho_claro};
  color: ${CORES.bege_2};
`

// exportacao
export default ItemContainer
export {
  Categorias,
  Classe,
  TituloContainer,
  Titulo,
  Nota,
  ItemInfo,
  LinkBotao
}
