<script setup lang="ts">
interface Props {
  storeName: string
  imgURL: string
  storeURL: string
}
defineProps<Props>()
</script>

<template>
  <div class="detailproduct-item">
    <img :src="imgURL" :alt="`票品`" class="product-icon" />
    <a target="_blank" :href="storeURL">{{ storeName }}</a>
  </div>
</template>

<style scoped>
.goods-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
