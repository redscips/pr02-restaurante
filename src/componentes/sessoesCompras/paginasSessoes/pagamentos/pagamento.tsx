// importacoes
import { useNavigate, useParams } from 'react-router-dom'
import {
  Botao,
  BotaoLink,
  Campos,
  EntradaMeia,
  Entradas,
  formataNumero,
  Rotulos,
  Titulo
} from '../../../../globais'

import * as E from './estilos'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../../armazem'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { adicionarPagamento } from '../../../../armazem/redutores/pedidos'

const Pagamento = () => {
  // parametros da URL
  const { id } = useParams()
  // navegacao
  const navegar = useNavigate()
  // despacho
  const despacho = useDispatch()

  // itens do carrinho + controle se esta aberto
  const { itens } = useSelector((estado: RootReducer) => estado.carrinho)
  // busca os pedidos
  const { itens: itensPedidos, idAtual } = useSelector(
    (estado: RootReducer) => estado.pedidos
  )

  // busca o indice do id atual
  const retornaIdxAtual = () => {
    return itensPedidos.findIndex((item) => item.id === idAtual)
  }

  const idx = retornaIdxAtual()

  const form = useFormik({
    initialValues: {
      idNomeCartao: itensPedidos[idx].payment?.card.name,
      idNumCartao: itensPedidos[idx].payment?.card.number,
      idCVV: itensPedidos[idx].payment?.card.code,
      idMesVenc: itensPedidos[idx].payment?.card.expires.month,
      idAnoVenc: itensPedidos[idx].payment?.card.expires.year
    },
    validationSchema: Yup.object({
      idNomeCartao: Yup.string().required('O campo é obrigatorio'),
      idNumCartao: Yup.number().required('O campo é obrigatorio'),
      idCVV: Yup.number().required('O campo é obrigatorio'),
      idMesVenc: Yup.number().required('O campo é obrigatorio'),
      idAnoVenc: Yup.number().required('O campo é obrigatorio')
    }),
    onSubmit: (valores) => {
      // executa envio
      despacho(
        adicionarPagamento({
          card: {
            code: valores.idCVV as number,
            expires: {
              month: valores.idMesVenc as number,
              year: valores.idAnoVenc as number
            },
            name: valores.idNomeCartao as string,
            number: valores.idNumCartao as unknown as string
          }
        })
      )
      // passa p/ proxima rota
      navegar(`/restaurante/${id}/finalizar`)
    }
  })

  const validaProximaRota = () => {
    form.submitForm() // valida e submete o formulário
  }

  // funcoes
  const retornaValorTotal = (): string => {
    // variavel temp
    let qtdTemp: number
    // ----------------------------------------------
    const valorTotal = itens.reduce((soma, atual) => {
      // quantidade
      qtdTemp = atual.qtd ? atual.qtd : 1
      // def retorno
      return (soma += qtdTemp * atual.preco)
    }, 0)
    // def retorno
    return formataNumero(valorTotal)
  }

  const retornaMensagemErro = (campo: string, message?: string): string => {
    // variavel retorno
    let str: string = ''
    // verifica se o campo ja foi passado pelo usuario
    const estaAlterado = campo in form.touched
    // verifica se o campo esta invalido
    const estaInvalido = campo in form.errors
    // caso o campo ja foi passado e esta invalido, exibe mensagem de erro
    if (estaAlterado && estaInvalido) str = message!
    // def retorno
    return str
  }

  const validaErro = (campo: string): boolean => {
    // variavel retorno
    let controle: boolean = false
    // verifica se o campo ja foi passado pelo usuario
    const estaAlterado = campo in form.touched
    // verifica se o campo esta invalido
    const estaInvalido = campo in form.errors
    // caso o campo ja foi passado e esta invalido, adiciona classe de erro
    controle = estaAlterado && estaInvalido
    // def retorno
    return controle
  }

  // def retorno
  return (
    <E.default>
      <Titulo>Pagamento - Valor a pagar {retornaValorTotal()}</Titulo>
      <form action="" onSubmit={form.handleSubmit}>
        <Entradas>
          {/* entrada 1 */}
          <Rotulos htmlFor="">Nome no cartão</Rotulos>
          <Campos
            type="text"
            id="idNomeCartao"
            value={itensPedidos[idx].payment?.card.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={validaErro('idNomeCartao') ? 'erro' : ''}
            mask={''}
            required
          />
          <small>
            {retornaMensagemErro('idNomeCartao', form.errors.idNomeCartao)}
          </small>
          {/* --------------------------------------- */}
          <E.EntradaMeiaEspec>
            {/* entrada 2 */}
            <div id="idCamposMaiores">
              <Rotulos htmlFor="">Número do cartão</Rotulos>
              <Campos
                type="number"
                id="idNumCartao"
                value={itensPedidos[idx].payment?.card.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={validaErro('idNumCartao') ? 'erro' : ''}
                mask={''}
                required
              />
              <small>
                {retornaMensagemErro('idNumCartao', form.errors.idNumCartao)}
              </small>
            </div>
            {/* entrada 3 */}
            <div>
              <Rotulos htmlFor="">CVV</Rotulos>
              <Campos
                type="number"
                id="idCVV"
                value={itensPedidos[idx].payment?.card.code}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={validaErro('idCVV') ? 'erro' : ''}
                mask={''}
                required
              />
              <small>{retornaMensagemErro('idCVV', form.errors.idCVV)}</small>
            </div>
          </E.EntradaMeiaEspec>
          {/* --------------------------------------- */}
          <EntradaMeia>
            {/* entrada 4 */}
            <div>
              <Rotulos htmlFor="">Mes do vencimento</Rotulos>
              <Campos
                type="number"
                id="idMesVenc"
                value={itensPedidos[idx].payment?.card.expires.month}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={validaErro('idMesVenc') ? 'erro' : ''}
                mask={''}
                required
              />
              <small>
                {retornaMensagemErro('idMesVenc', form.errors.idMesVenc)}
              </small>
            </div>
            {/* entrada 5 */}
            <div>
              <Rotulos htmlFor="">Ano do vencimento</Rotulos>
              <Campos
                type="number"
                id="idAnoVenc"
                value={itensPedidos[idx].payment?.card.expires.year}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={validaErro('idAnoVenc') ? 'erro' : ''}
                mask={''}
                required
              />
              <small>
                {retornaMensagemErro('idAnoVenc', form.errors.idAnoVenc)}
              </small>
            </div>
          </EntradaMeia>
        </Entradas>
        {/* botoes */}
        <div>
          <Botao type="button" onClick={validaProximaRota}>
            Finalizar pagamento
          </Botao>
          <BotaoLink to={`/restaurante/${id}/entrega`} type="button">
            Voltar para a edição de endereço
          </BotaoLink>
        </div>
      </form>
    </E.default>
  )
}

// exportacoes
export default Pagamento
