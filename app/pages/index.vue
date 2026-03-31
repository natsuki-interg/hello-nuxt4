<template>
  <div class="page-home">
    <div class="mv-image">
      <img class="mv-picture" src="/img/RE_TOP2.webp" alt="MV画像" />
    </div>
    <h2>PUPPET SUNSUN GOODS TOP3</h2>
    <div class="table-container">
      <AppTop3CompareTable />
    </div>
  </div>
</template>

<style scoped>
.mv-image {
  height: auto;
  width: 100%;
  line-height: 0;
}
å h1 {
  font-size: 2.5rem;
  color: #039ed9;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 40px;
  font-weight: 700;
  color: #333;
}

.table-container {
  padding: 16px;
  background-color: #97cddf;
  margin-bottom: 104px;
}
</style>
