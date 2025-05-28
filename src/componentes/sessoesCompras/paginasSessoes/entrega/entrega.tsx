// importacoes
import { useNavigate, useParams } from 'react-router-dom'
import {
  Botao,
  BotaoLink,
  Campos,
  EntradaMeia,
  Entradas,
  Rotulos,
  Titulo
} from '../../../../globais'
import * as E from './estilos'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
// acoes
import { adicionarEndereco } from '../../../../armazem/redutores/pedidos'
import { RootReducer } from '../../../../armazem'

const Entrega = () => {
  // busca os pedidos
  const { itens, idAtual } = useSelector(
    (estado: RootReducer) => estado.pedidos
  )

  const { itens: itensCarrinho } = useSelector(
    (estado: RootReducer) => estado.carrinho
  )

  // parametros da URL
  const { id } = useParams()
  // cria o despacho
  const despacho = useDispatch()
  // cria navegacao
  const navegar = useNavigate()

  // busca o indice do id atual
  const retornaIdxAtual = () => {
    return itens.findIndex((item) => item.id === idAtual)
  }

  const idx = retornaIdxAtual()

  const form = useFormik({
    initialValues: {
      idRecebedor: itens[idx].delivery?.receiver,
      idEndereco: itens[idx].delivery?.address.description,
      idCidade: itens[idx].delivery?.address.city,
      idCEP: itens[idx].delivery?.address.zipCode,
      idNumero: itens[idx].delivery?.address.number,
      idComplemento: itens[idx].delivery?.address.complement
    },
    validationSchema: Yup.object({
      idRecebedor: Yup.string().required('O campo é obrigatorio'),
      idEndereco: Yup.string().required('O campo é obrigatorio'),
      idCidade: Yup.string().required('O campo é obrigatorio'),
      idCEP: Yup.string().required('O campo é obrigatorio'),
      idNumero: Yup.string().required('O campo é obrigatorio')
    }),
    onSubmit: (valores) => {
      // executa atualizacao dos valores
      despacho(
        adicionarEndereco({
          receiver: valores.idRecebedor as string,
          address: {
            city: valores.idCidade as string,
            complement: valores.idComplemento as string,
            description: valores.idEndereco as string,
            number: valores.idNumero as unknown as number,
            zipCode: valores.idCEP as string
          }
        })
      )
      // passa p/ proxima rota
      navegar(`/restaurante/${id}/pagamento`)
    }
  })

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

  const validaProximaRota = () => {
    form.submitForm() // valida e submete o formulário
  }

  const retornaAbaInicial = () => {
    navegar(`/restaurante/${id}/carrinho`)
  }

  if (itensCarrinho.length === 0) {
    return <>{retornaAbaInicial()}</>
  }

  // def retorno
  return (
    <E.default>
      <Titulo>Entrega</Titulo>
      <form action="" onSubmit={form.handleSubmit}>
        <Entradas>
          {/* entrada 1 */}
          <Rotulos htmlFor="idRecebedor">Quem irá receber</Rotulos>
          <Campos
            type="text"
            id="idRecebedor"
            value={itens[idx].delivery?.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={validaErro('idRecebedor') ? 'erro' : ''}
            mask={''}
            required
          />
          <small>
            {retornaMensagemErro('idRecebedor', form.errors.idRecebedor)}
          </small>
          {/* entrada 2 */}
          <Rotulos htmlFor="idEndereco">Endereço</Rotulos>
          <Campos
            type="text"
            id="idEndereco"
            value={itens[idx].delivery?.address.description}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={validaErro('idEndereco') ? 'erro' : ''}
            mask={''}
            required
          />
          <small>
            {retornaMensagemErro('idEndereco', form.errors.idEndereco)}
          </small>
          {/* entrada 3 */}
          <Rotulos htmlFor="idCidade">Cidade</Rotulos>
          <Campos
            type="text"
            id="idCidade"
            value={itens[idx].delivery?.address.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={validaErro('idCidade') ? 'erro' : ''}
            mask={''}
            required
          />
          <small>{retornaMensagemErro('idCidade', form.errors.idCidade)}</small>
          <EntradaMeia id="idUltEntrada">
            {/* entrada 4 */}
            <div>
              <Rotulos htmlFor="idCEP">CEP</Rotulos>
              <Campos
                type="text"
                id="idCEP"
                value={itens[idx].delivery?.address.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={validaErro('idCEP') ? 'erro' : ''}
                mask={'99.999-999'}
                required
              />
              <small>{retornaMensagemErro('idCEP', form.errors.idCEP)}</small>
            </div>
            {/* entrada 5 */}
            <div>
              <Rotulos htmlFor="idNumero">Número</Rotulos>
              <Campos
                type="text"
                id="idNumero"
                value={itens[idx].delivery?.address.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={validaErro('idNumero') ? 'erro' : ''}
                mask={''}
                required
              />
              <small>
                {retornaMensagemErro('idNumero', form.errors.idNumero)}
              </small>
            </div>
          </EntradaMeia>
          {/* entrada 6 */}
          <Rotulos htmlFor="idComplemento">Complemento (opcional)</Rotulos>
          <Campos
            type="text"
            id="idComplemento"
            value={itens[idx].delivery?.address.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask={''}
          />
        </Entradas>
        {/* botoes */}
        <div>
          <Botao type="button" onClick={validaProximaRota}>
            Continuar com o pagamento
          </Botao>
          <BotaoLink to={`/restaurante/${id}/carrinho`} type="button">
            Voltar para o carrinho
          </BotaoLink>
        </div>
      </form>
    </E.default>
  )
}

// exportacoes
export default Entrega
