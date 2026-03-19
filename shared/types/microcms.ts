import type { MicroCMSImage, MicroCMSListContent, MicroCMSObjectContent } from 'microcms-js-sdk'

// microCMS の型定義をここに追加してください
// MicroCMSListContent には id, createdAt, updatedAt, publishedAt, revisedAt が含まれます
// 参考: https://document.microcms.io/content-api/get-list-contents

export interface Blog extends MicroCMSListContent {
  title: string
  content: string
}

export interface Goods extends MicroCMSListContent {
  productName: string
  productURL: string
  review: string
  price: string
  point: string
  image: MicroCMSImage
  ctaUrl: string
}

export interface RankingTop3 extends MicroCMSObjectContent {
  firstIcon: MicroCMSImage
  firstGoods: Goods
  secondIcon: MicroCMSImage
  secondGoods: Goods
  thirdIcon: MicroCMSImage
  thirdGoods: Goods
}
