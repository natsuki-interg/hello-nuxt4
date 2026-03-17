<script setup lang="ts">
interface Props {
  goods: Goods
  medalIconUrl: string
}
defineProps<Props>()
</script>

<template>
  <div class="compare-table-goods-1">
    <img :src="medalIconUrl" :alt="`メダル`" class="medal-icon" />
    <img :src="goods.image.url" :alt="`票品`" class="product-icon" />
    <p>{{ goods.productName }}</p>
  </div>
</template>

<style scoped>
.compare-table-products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
