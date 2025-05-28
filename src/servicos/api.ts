/* eslint-disable @typescript-eslint/no-explicit-any */
// importacoes
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemRestaurante, Pedido } from '../globais'

// controlador redux requisicao url
const api = createApi({
  // url base
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<ItemRestaurante[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<ItemRestaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    comprar: builder.mutation<any, Pedido>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

// exportacoes
export default api
export const {
  useGetRestaurantesQuery,
  useGetCardapioQuery,
  useComprarMutation
} = api
