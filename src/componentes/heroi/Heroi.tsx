// importacoes
import HeroiContainer, { Titulo, SubTitulo } from './estilos'
// imagens
import logo from '../../ativos/imagens/logo_heroi.png'
import { Imagem } from '../../globais'

type Props = {
  imagem_url: string
  tipo: 'heroi' | 'restaurante'
  espacamento: string
  tamanho: number
  titulo: string
  subtitulo: string
}

// componente
const Heroi = ({
  imagem_url,
  tipo,
  espacamento,
  tamanho,
  titulo,
  subtitulo
}: Props) => {
  // def retorno
  return (
    <HeroiContainer
      imagem_url={imagem_url}
      espacamento={espacamento}
      tipo={tipo}
      tamanho={tamanho}
    >
      <div className="container">
        {/* verifica oque foi passado */}
        {tipo === 'heroi' ? (
          <>
            <Imagem
              margem_topo={64}
              margem_baixo={0}
              src={logo}
              alt="Logo do E-FOOD"
            />
            <Titulo>
              Viva experiências gastronômicas no conforto da sua casa
            </Titulo>
          </>
        ) : (
          <>
            <SubTitulo peso={100}>{titulo}</SubTitulo>
            <SubTitulo peso={900}>{subtitulo}</SubTitulo>
          </>
        )}
      </div>
    </HeroiContainer>
  )
}

// exportacao
export default Heroi
