import type { RankingTop3 } from '~~/shared/types/microcms'

export default defineEventHandler(async () => {
  const { client } = useMicroCMS()

  return await client.get<RankingTop3>({
    endpoint: 'rankingtop3',
  })
})
