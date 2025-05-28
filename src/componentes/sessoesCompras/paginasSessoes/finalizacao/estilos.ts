// importacoes
import styled from 'styled-components'
import { Botao } from '../../../../globais'

// estilos
const ConfirmacaoContainer = styled.div`
  flex: auto;

  h2 {
    margin: 32px 0 16px 8px;
  }

  div {
    margin: 8px;

    ${Botao} {
      margin-left: 0;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }
  }
`

// exportacoes
export default ConfirmacaoContainer
