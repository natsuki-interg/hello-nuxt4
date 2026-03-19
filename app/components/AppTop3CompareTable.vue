<script setup lang="ts">
const { data, error, status } = await useFetch<RankingTop3>('/api/rankingtop3')
</script>

<template>
  <div class="page-blogs">
    <div v-if="status === 'pending'" class="loading">読み込み中...</div>
    <div v-else-if="error" class="error">
      <p>データの取得に失敗しました</p>
      <pre>{{ error.message }}</pre>
    </div>
    <template v-else-if="data?.firstGoods">
      <table>
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
            <!-- <td>星5</td>
            <td>5000円</td>
            <td>とてもかわいい</td>
            <td>CTAボタン</td> -->
          </tr>
          <tr>
            <td>
              <AppTop3CompareTableProducts
                :goods="data.secondGoods"
                :medal-icon-url="data.secondIcon.url"
              />
            </td>
            <!-- <td>星5</td>
            <td>5000円</td>
            <td>とてもかわいい</td>
            <td>CTAボタン</td> -->
          </tr>
          <tr>
            <td>
              <AppTop3CompareTableProducts
                :goods="data.thirdGoods"
                :medal-icon-url="data.thirdIcon.url"
              />
            </td>
            <td>星5</td>
            <td>5000円</td>
            <td>とてもかわいい</td>
            <td>CTAボタン</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<style scoped>
.table {
  table-layout: fixed;
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

th,
td {
  border: 1px solid #333;
  text-align: center;
}

th {
  font-size: 14px;
  padding: 8px;
}

td {
  font-size: 12px;
  padding: 12px;
}
</style>
