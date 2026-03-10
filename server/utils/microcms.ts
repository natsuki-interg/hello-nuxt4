import { createClient } from 'microcms-js-sdk'

export const useMicroCMS = () => {
  const config = useRuntimeConfig()

  const client = createClient({
    serviceDomain: config.public.microCmsServiceDomain,
    apiKey: config.microCmsApiKey,
  })

  return { client }
}
