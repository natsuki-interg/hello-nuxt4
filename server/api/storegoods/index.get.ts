import type { StoreGoods } from '~~/shared/types/microcms'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { client } = useMicroCMS()

  return await client.getList<StoreGoods>({
    endpoint: 'storegoods',
    queries: {
      limit: Number(query.limit) || 10,
      offset: Number(query.offset) || 0,
    },
  })
})
