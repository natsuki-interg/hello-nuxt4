<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>&copy; {{ year }} Hello Nuxt 4 - 研修プロジェクト</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #379cc3;
  border-top: 1px solid #e5e5e5;
  padding: 1.5rem 1rem;
  text-align: center;
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
}

.footer p {
  margin: 0;
  color: #fff;
  font-size: 0.875rem;
}
</style>
