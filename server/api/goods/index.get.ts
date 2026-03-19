import type { Goods } from '~~/shared/types/microcms'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { client } = useMicroCMS()

  return await client.getList<Goods>({
    endpoint: 'goods',
    queries: {
      limit: Number(query.limit) || 10,
      offset: Number(query.offset) || 0,
    },
  })
})
