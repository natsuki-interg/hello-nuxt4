<template>
  <div class="page-home">
    <div class="mv-image"></div>
    <AppTop3CompareTable />
  </div>
</template>

<style scoped>
.mv-image {
  height: 100px;
  width: 100%;
  background-color: #00dc82;
}

h1 {
  font-size: 2.5rem;
  color: #00dc82;
}

.lead {
  font-size: 1.2rem;
  color: #666;
  margin-top: 0.5rem;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

nav a {
  color: #00dc82;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

@media (width <= 768px) {
  h1 {
    font-size: 1.75rem;
  }

  .lead {
    font-size: 1rem;
  }
}
</style>
