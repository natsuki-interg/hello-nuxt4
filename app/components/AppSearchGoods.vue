<template>
  <div class="counter">
    <p>検索欄</p>
    <section>
      <label v-for="item in items" :key="item.id">
        <input id="item.id" v-model="selectedItems" type="checkbox" :value="item.choice" />
        {{ item.choice }}
      </label>
    </section>
    <button @click="onSearch">検索</button>
  </div>
</template>

<script setup lang="ts">
interface Emits {
  (event: 'search-button', choice: string[]): void
}

const emit = defineEmits<Emits>()
const items = [
  { id: 1, choice: 'ぬいぐるみ' },
  { id: 2, choice: '日用品雑貨' },
  { id: 3, choice: 'ファッション雑貨' },
]

const selectedItems = ref<string[]>([])

const onSearch = (): void => {
  emit('search-button', selectedItems.value)
}
</script>

<style scoped>
.counter {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.counter p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #00dc82;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #00b368;
}
</style>
