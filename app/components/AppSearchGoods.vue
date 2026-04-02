<template>
  <div class="counter">
    <p>商品絞り込み</p>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  padding-bottom: 24px;
  background-color: #f6f6f6;
  border-radius: 8px;
}

section {
  padding: 24px;
}

label {
  padding: 24px;
  font-size: 16px;
  letter-spacing: 1px;
}

.counter p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #646464;
  background-color: #e4e4e4;
  border-radius: 8px 8px 0 0;
  letter-spacing: 2px;
}

input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #bbbaba;
  border-radius: 4px;
  background-color: #fff;
  vertical-align: text-bottom;
  position: relative;
}

input[type='checkbox']:checked {
  background-color: #48b7d0;
  border-color: #48b7d0;
}

input[type='checkbox']:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

button {
  padding: 8px;
  width: 40%;
  border: none;
  border-radius: 4px;
  background-color: #8bd3e4;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px #48b7d0;
  transition: all 0.1s ease-out;
  letter-spacing: 4px;
}
</style>
