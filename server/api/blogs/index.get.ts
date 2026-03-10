import type { Blog } from '~~/shared/types/microcms'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { client } = useMicroCMS()

  return await client.getList<Blog>({
    endpoint: 'blogs',
    queries: {
      limit: Number(query.limit) || 10,
      offset: Number(query.offset) || 0,
    },
  })
})
