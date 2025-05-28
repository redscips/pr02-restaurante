// importacoes
import styled from 'styled-components'
import { Botao, BotaoLink, CORES } from '../../../../globais'

// estilos
const EntregaContainer = styled.div`
  flex: auto;

  h2 {
    margin: 32px 0 16px 8px;
  }

  form {
    margin: 8px;

    ${BotaoLink},
    ${Botao} {
      margin-left: 0;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }

    small {
      color: ${CORES.vermelho};
      font-size: 8px;
    }

    #idUltEntrada {
      margin-bottom: 24px;
    }
  }
`

// exportacoes
export default EntregaContainer
