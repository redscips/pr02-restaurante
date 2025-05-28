// importacoes
import { SyncLoader } from 'react-spinners'
import * as E from './estilos'
import { CORES } from '../../globais'

// componente
const Carregador = () => {
  // def retorno
  return (
    <E.default>
      <SyncLoader color={CORES.preto} />
    </E.default>
  )
}

// exportacao
export default Carregador
