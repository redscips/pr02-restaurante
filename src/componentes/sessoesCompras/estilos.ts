// importacoes
import styled from 'styled-components'
import { CORES } from '../../globais'

// estilos
const CarrinhoCaixa = styled.div`
  /* posicao fixa p/ ocupar a tela toda */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* visualizacao */
  display: none;
  justify-content: flex-end;
  /* exibe na frente de tudo */
  z-index: 1;

  &.visivel {
    display: flex;
  }
`

const CarrinhoOpaco = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${CORES.preto};
  opacity: 0.8;

  /* smartphones */
  @media screen and (max-width: 767px) {
    width: 20%;
  }
`

const Sessoes = styled.div`
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${CORES.vermelho_claro};
  color: ${CORES.bege_2};
  /* exibe scrolls */
  overflow-y: auto;

  input,
  select {
    /* classes */
    &.erro {
      border: 2px solid ${CORES.vermelho};
    }
  }

  &::-webkit-scrollbar {
    width: 1px;
  }

  @media screen and (max-width: 767px) {
    max-width: 80vw;
    width: 100%;
  }
`

// exportacoes
export default CarrinhoCaixa
export { CarrinhoOpaco, Sessoes }
