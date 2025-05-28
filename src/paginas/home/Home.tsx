// importacoes
import Heroi from '../../componentes/heroi/Heroi'
import ListaItens from '../../componentes/listaItens/ListaItens'
import Carregador from '../../componentes/carregador/carregador'
// imagens
import HeroiFundo from '../../ativos/imagens/fundo_heroi.png'
import { useGetRestaurantesQuery } from '../../servicos/api'

// componente
const Home = () => {
  // lista dos restaurantes
  const { data: lstRestaurantes } = useGetRestaurantesQuery()

  // validacao
  if (!lstRestaurantes) {
    return <Carregador />
  } else {
    // def retorno
    return (
      <>
        <Heroi
          imagem_url={HeroiFundo}
          tipo="heroi"
          espacamento="0 416px"
          tamanho={384}
          titulo={''}
          subtitulo={''}
        />
        <ListaItens
          itens={lstRestaurantes}
          colunas={'1fr 1fr'}
          colunagap={'80px'}
          gap={'48px'}
          tipo="heroi"
        />
      </>
    )
  }
}

// exportacoes
export default Home
