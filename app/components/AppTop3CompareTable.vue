<script setup lang="ts">
const { data, error, status } = await useFetch<RankingTop3>('/api/rankingtop3')
</script>

<template>
  <div class="page-goods">
    <div v-if="status === 'pending'" class="loading">読み込み中...</div>
    <div v-else-if="error" class="error">
      <p>データの取得に失敗しました</p>
      <pre>{{ error.message }}</pre>
    </div>
    <template v-else-if="data?.firstGoods">
      <table class="table-goods">
        <thead>
          <tr class="comparetable-th">
            <th class="label1-th1">商品名</th>
            <th class="label1-th2">総合評価</th>
            <th class="label1-th2">金額</th>
            <th class="label1-th3">おすすめポイント</th>
            <th class="label1-th4">詳細</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <AppTop3CompareTableProducts
                :goods="data.firstGoods"
                :medal-icon-url="data.firstIcon.url"
              />
            </td>
            <td>{{ data.firstGoods.review }}</td>
            <td>{{ data.firstGoods.price }}</td>
            <td>{{ data.firstGoods.point }}</td>
            <td class="table-cta">
              <AppTop3CompareTableCTA
                :goods="data.firstGoods"
                :product-u-r-l="data.firstGoods.productURL"
              />
            </td>
          </tr>
          <tr>
            <td>
              <AppTop3CompareTableProducts
                :goods="data.secondGoods"
                :medal-icon-url="data.secondIcon.url"
              />
            </td>
            <td>{{ data.secondGoods.review }}</td>
            <td>{{ data.secondGoods.price }}</td>
            <td>{{ data.secondGoods.point }}</td>
            <td class="table-cta">
              <AppTop3CompareTableCTA
                :goods="data.secondGoods"
                :product-u-r-l="data.secondGoods.productURL"
              />
            </td>
          </tr>
          <tr>
            <td>
              <AppTop3CompareTableProducts
                :goods="data.thirdGoods"
                :medal-icon-url="data.thirdIcon.url"
              />
            </td>
            <td>{{ data.thirdGoods.review }}</td>
            <td>{{ data.thirdGoods.price }}</td>
            <td>{{ data.thirdGoods.point }}</td>
            <td class="table-cta">
              <AppTop3CompareTableCTA
                :goods="data.thirdGoods"
                :product-u-r-l="data.thirdGoods.productURL"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<style scoped>
.table-goods {
  table-layout: fixed;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

th,
td {
  border: 1px solid #ddd;
  text-align: center;
}

th {
  font-size: 14px;
  padding: 16px;
  background-color: #edecec;
}

td {
  font-size: 14px;
  padding: 10px;
  position: relative;
}

.table-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top: none;
  border-left: none;
}
</style>
