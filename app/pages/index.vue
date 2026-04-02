<template>
  <div class="page-home">
    <div class="mv-image">
      <img src="/img/RE_TOP2.webp" alt="MV画像" />
    </div>
    <h2>PUPPET SUNSUN GOODS TOP3</h2>
    <p>人気の売れ筋商品はこちら!</p>
    <div class="chara-image">
      <img src="/img/Mask_group.webp" alt="キャラクター画像" />
    </div>
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
  padding: 20px 0 4px 0;
  font-size: 40px;
  font-weight: 700;
  color: #333;
  letter-spacing: 4px;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 8px;
  letter-spacing: 4px;
}

p::before,
p::after {
  content: '';
  width: 60px;
  border-top: 1px solid #333;
  margin: 0 24px;
}

.chara-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
}

.table-container {
  padding: 16px;
  background-color: #97cddf;
  margin-bottom: 104px;
}
</style>
