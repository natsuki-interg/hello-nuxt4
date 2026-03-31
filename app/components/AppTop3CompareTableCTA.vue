<script setup lang="ts">
interface Props {
  goods: Goods
  productURL: string
}
defineProps<Props>()
</script>

<template>
  <div class="compare-table-cta-button">
    <a target="_blank" :href="goods.productURL">公式サイト</a>
  </div>
</template>

<style scoped>
.compare-table-cta-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 120px;
  background-color: #ff3355;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 6px #da1e3d;
}
</style>
