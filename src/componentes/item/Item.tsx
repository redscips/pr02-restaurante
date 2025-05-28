// importacoes
import { useDispatch } from 'react-redux'
// acoes
import { selecionar } from '../../armazem/redutores/cardapio'
// ---------------------------------------
import { Botao, Descricao, ItemProps } from '../../globais'
import ItemContainer, {
  Categorias,
  Classe,
  ItemInfo,
  Nota,
  Titulo,
  TituloContainer,
  LinkBotao
} from './estilos'
// imagems
import estrela from '../../ativos/imagens/estrela.png'

// componente
const Item = (item: ItemProps) => {
  // cria o despacho de acoes
  const despacho = useDispatch()

  // funcoes
  const getDescricao = (descricao: string) => {
    if (descricao.length > 100 && item.tipo === 'restaurante') {
      return descricao.slice(0, 97) + '...'
    } else if (descricao.length > 250 && item.tipo === 'heroi') {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  const confirmaExibirModal = () => {
    // executa acao
    despacho(selecionar(item))
  }

  // def retorno
  return (
    <ItemContainer tipo={item.tipo}>
      <img src={item.imagem} alt={item.titulo} />
      <Categorias>
        {/* loop p/ renderizar as categorias */}
        {item.categorias !== undefined &&
          item.categorias.map((c, ind) => <li key={ind}>{c}</li>)}
      </Categorias>
      <ItemInfo tipo={item.tipo}>
        <TituloContainer>
          <Titulo>{item.titulo}</Titulo>
          {item.nota !== undefined && (
            <Classe>
              <Nota as="p">{item.nota}</Nota>
              <img src={estrela} alt="Classificação" />
            </Classe>
          )}
        </TituloContainer>
        <Descricao tamanho={14} tipo={item.tipo}>
          {getDescricao(item.descricao)}
        </Descricao>
        {item.tipo === 'heroi' ? (
          <LinkBotao to={`/restaurante/${item.id}`}>Saiba mais</LinkBotao>
        ) : (
          <Botao type="button" onClick={confirmaExibirModal}>
            Adicionar ao carrinho
          </Botao>
        )}
      </ItemInfo>
    </ItemContainer>
  )
}

// exportacoes
export default Item
