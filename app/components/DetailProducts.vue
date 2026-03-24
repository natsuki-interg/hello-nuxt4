<script setup lang="ts">
interface Props {
  productName: string
  imgURL: string
}
defineProps<Props>()
</script>

<template>
  <div class="compare-table-goods-1">
    <img :src="imgURL" :alt="`票品`" class="product-icon" />
    <p>{{ productName }}</p>
  </div>
</template>

<style scoped>
.compare-table-products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
