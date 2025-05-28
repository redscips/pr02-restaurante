// importacoes
import ListaItens from '../../componentes/listaItens/ListaItens'
// imagens
import Heroi from '../../componentes/heroi/Heroi'
import Cabecalho from '../../componentes/cabecalho'
import HeroiFundo from '../../ativos/imagens/restaurantes/restaurante2.png'
import { useParams } from 'react-router-dom'
import { useGetCardapioQuery } from '../../servicos/api'
import Carregador from '../../componentes/carregador/carregador'

// componente
const Restaurante = () => {
  // parametros da URL
  const { id } = useParams()
  // lista dos restaurantes
  const { data: lstCardapio } = useGetCardapioQuery(id as string)

  // validacao
  if (!lstCardapio) {
    return <Carregador />
  } else {
    // def retorno
    return (
      <>
        <Cabecalho />
        <Heroi
          imagem_url={HeroiFundo}
          tipo="restaurante"
          espacamento="0 171px"
          tamanho={280}
          titulo={lstCardapio.titulo}
          subtitulo={lstCardapio.titulo}
        />
        <ListaItens
          itens={lstCardapio}
          colunas={'1fr 1fr 1fr'}
          colunagap={'32px'}
          gap={'32px'}
          tipo="restaurante"
        />
      </>
    )
  }
}

// exportacoes
export default Restaurante
