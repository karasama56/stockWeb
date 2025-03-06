<template>
  <div id="app">
    <h1>股票資訊查詢</h1>
    <div class="search-container">
      <input v-model="searchQuery" placeholder="搜尋股票代碼或名稱" />
      <button @click="searchStocks">搜尋</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>代碼</th>
          <th>名稱</th>
          <th>本益比</th>
          <th>殖利率</th>
          <th>股價淨值比</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in filteredStocks" :key="stock.Code">
          <td>{{ stock.Code }}</td>
          <td>{{ stock.Name }}</td>
          <td>{{ stock.PEratio }}</td>
          <td>{{ stock.DividendYield }}</td>
          <td>{{ stock.PBratio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import instance from "@/plugins/axios"; // 使用 axios 實例

export default {
  name: "StockView",
  data() {
    return {
      stocks: [], // 所有股票數據
      searchQuery: "", // 搜尋關鍵字
    };
  },
  computed: {
    // 過濾股票數據
    filteredStocks() {
      return this.stocks.filter((stock) => {
        return (
          stock.Code.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          stock.Name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
  async created() {
    // 初始化時獲取股票數據
    await this.fetchStocks();
  },
  methods: {
    // 獲取股票數據
    async fetchStocks() {
  try {
    const response = await instance.get('/api/exchangeReport/BWIBBU_ALL');
    this.stocks = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
},
    // 搜尋按鈕點擊事件
    searchStocks() {
      // 這裡可以加入額外的搜尋邏輯（如果需要）
      console.log("搜尋關鍵字:", this.searchQuery);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.search-container {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  width: 300px;
  margin-right: 10px;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>