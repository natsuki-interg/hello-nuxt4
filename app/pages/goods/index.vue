<template>
  <div class="page-blogs">
    <AppSearchGoods @search-button="onSearch" />
    <h1>商品一覧</h1>
    <div v-if="status === 'pending'" class="loading">読み込み中...</div>
    <div v-else-if="error" class="error">
      <p>データの取得に失敗しました</p>
      <pre>{{ error.message }}</pre>
    </div>
    <template v-else-if="data">
      <div class="goods-list">
        <tr v-for="product in filterSearch" :key="product.id" class="product-item">
          <td>
            <DetailProducts
              :product-name="product.productName"
              :img-u-r-l="product.image.url"
              :product-u-r-l="product.productURL"
            />
          </td>
        </tr>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { MicroCMSListResponse } from 'microcms-js-sdk'
import DetailProducts from '~/components/DetailProducts.vue'
import type { Goods } from '~~/shared/types/microcms'

const { data, error, status } = await useFetch<MicroCMSListResponse<Goods>>('/api/goods')

const searchTags = ref<string[]>([])

const onSearch = (selectedItems: string[]): void => {
  searchTags.value = selectedItems
}

const filterSearch = computed(() => {
  if (!data.value) {
    return []
  } else if (searchTags.value.length === 0) {
    return data.value.contents
  } else {
    return data.value.contents.filter((product) =>
      searchTags.value.some((tag) => tag === product.tag[0]),
    )
  }
})
</script>

<style scoped>
.page-blogs {
  padding: 2rem 0;
}

h1 {
  display: grid;
  color: #039ed9;
  margin-bottom: 1.5rem;
}

.goods-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 24px;
}

.blog-item {
  border-bottom: 1px solid #e5e5e5;
}

.blog-item a {
  display: block;
  padding: 1.25rem 0;
  transition: background-color 0.2s;
}

.blog-item a:hover {
  background-color: #f8f8f8;
}

.blog-item h2 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.25rem;
}

.blog-item time {
  font-size: 0.875rem;
  color: #888;
}

.loading,
.empty {
  text-align: center;
  color: #888;
  padding: 3rem 0;
}

.error {
  text-align: center;
  color: #e53e3e;
  padding: 2rem 0;
}

.error pre {
  font-size: 0.75rem;
  color: #888;
  margin-top: 0.5rem;
}

@media (width <= 768px) {
  h1 {
    font-size: 1.5rem;
  }

  .blog-item h2 {
    font-size: 1.1rem;
  }
}
</style>
