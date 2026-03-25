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
    <a target="_blank" :href="goods.productURL">{{ goods.productName }}</a>
  </div>
</template>

<style scoped>
.compare-table-products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
