import type { StoreGoods } from '~~/shared/types/microcms'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID is required' })
  }

  const { client } = useMicroCMS()

  return await client.get<StoreGoods>({
    endpoint: 'goods',
    contentId: id,
  })
})
