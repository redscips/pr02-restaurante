// importacoes
import styled from 'styled-components'
import { Botao, BotaoLink, CORES, EntradaMeia } from '../../../../globais'

// estilos
const PagamentoContainer = styled.div`
  flex: auto;

  h2 {
    margin: 32px 0 16px 8px;
  }

  form {
    margin: 8px;

    small {
      color: ${CORES.vermelho};
      font-size: 8px;
    }

    ${BotaoLink},
    ${Botao} {
      margin-left: 0;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }

    ${EntradaMeia} {
      margin-bottom: 16px;

      /* smartphones */
      @media screen and (max-width: 767px) {
        div {
          width: 45%;
        }
      }
    }
  }
`

const EntradaMeiaEspec = styled(EntradaMeia)`
  div {
    width: 87px;
  }

  #idCamposMaiores {
    width: 228px;
  }

  /* smartphones */
  @media screen and (max-width: 767px) {
    #idCamposMaiores {
      width: 50%;
    }
  }
`

// exportacoes
export default PagamentoContainer
export { EntradaMeiaEspec }
