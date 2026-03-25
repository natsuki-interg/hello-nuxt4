<template>
  <div class="page-blogs">
    <h1>店舗一覧</h1>
    <div v-if="status === 'pending'" class="loading">読み込み中...</div>
    <div v-else-if="error" class="error">
      <p>データの取得に失敗しました</p>
      <pre>{{ error.message }}</pre>
    </div>
    <template v-else-if="data">
      <div class="store-goods-list">
        <tr v-for="store in data.contents" :key="store.id" class="store-goods-item">
          <td>
            <DetailStoreGoods
              :store-name="store.storeName"
              :img-u-r-l="store.image.url"
              :store-u-r-l="store.storeURL"
            />
          </td>
        </tr>
      </div>
      <p v-if="data.contents.length === 0" class="empty">記事がありません</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { MicroCMSListResponse } from 'microcms-js-sdk'
import type { StoreGoods } from '~~/shared/types/microcms'

const { data, error, status } = await useFetch<MicroCMSListResponse<StoreGoods>>('/api/storegoods')
</script>

<style scoped>
.page-blogs {
  padding: 2rem 0;
}

h1 {
  color: #039ed9;
  margin-bottom: 1.5rem;
}

.store-goods-list {
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
