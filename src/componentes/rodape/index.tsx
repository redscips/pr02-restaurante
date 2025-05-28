// imagens
import logo from '../../ativos/imagens/logo_heroi.png'
import instagram from '../../ativos/imagens/sociais/intagram.png'
import facebook from '../../ativos/imagens/sociais/facebook.png'
import X from '../../ativos/imagens/sociais/x.png'
import { Descricao, Imagem } from '../../globais'
import RodaContainer, { Lista } from './estilos'

// componente
const Rodape = () => {
  // def retorno
  return (
    <RodaContainer>
      <div className="container">
        <Imagem
          margem_topo={40}
          margem_baixo={32}
          src={logo}
          alt="Logo do E-FOOD."
        ></Imagem>
        <Lista>
          <li>
            <img src={instagram} alt="Logo do Instagram" />
          </li>
          <li>
            <img src={facebook} alt="Logo do Facebook" />
          </li>
          <li>
            <img src={X} alt="Logo do X" />
          </li>
        </Lista>
        <Descricao tamanho={10} tipo="heroi">
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Descricao>
      </div>
    </RodaContainer>
  )
}

// exportacao
export default Rodape
