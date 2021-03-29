<template>
  <div class="container">
    <div>
      <h1>大沢</h1>
    </div>
    <div class="individual-water">
      <table>
        <thead>
          <tr>
            <th class="th-line">系統</th>
            <th class="th-seedling">苗数</th>
            <th class="th-water">水量／苗</th>
            <th class="th-amount">水量／系統</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list, i) in lists" v-cloak :key="i">
            <td class="td-line">{{i + 1}}.</td>
            <td><input type="text" class="input-base" inputmode="numeric" v-model="list.seedling"></td>
            <td><input type="text" class="input-base" inputmode="numeric" v-model="list.water"></td>
            <td class="td-amount">{{list.amount}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="total-amount">
      <table>
        <tbody>
          <tr>
            <td>{{seedling_total()}}苗</td>
            <td>{{water_total()}}L</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bulk-water">
      <p>一括で水量を設定</p>
      <input type="text" class="input-base" inputmode="numeric" v-model="batch_water">
    </div>
  </div>
</template>

<style>
@import "../css/main.css";
</style>

<script>
export default {
  name: 'Area1',
  data: function() {
    return {
      // 系統のリスト（苗数・水量/苗・水量/系統）
      lists: [
        {seedling: "", water: "", amount: 0},
        {seedling: "", water: "", amount: 0},
        {seedling: "", water: "", amount: 0},
        {seedling: "", water: "", amount: 0},
        {seedling: "", water: "", amount: 0},
        {seedling: "", water: "", amount: 0},
        {seedling: "", water: "", amount: 0},
        {seedling: "", water: "", amount: 0}
      ],
      // 一括水量
      bulkWater: ""
    }
  },
  methods: {
    // 苗の合計（系統ごとの苗の値が変わるたびに再描画）
    seedling_total: function() {
      let sum = 0;
      for (const list of this.lists) {
        sum += Number(list.seedling);
      }
      return sum;
    },
    // 水量の合計（系統ごとの苗・水量が変わるたびに再描画）
    water_total: function() {
      let sum = 0;
      for (const list of this.lists) {
        // 系統ごとの水量計に反映
        list.amount = Number(list.seedling * list.water);
        sum += list.amount;
      }
      // 保存
      this.save_values();
      return sum;
    },
    // 画面データの保存
    save_values: function() {
      localStorage.setItem("lists", JSON.stringify(this.lists));
      localStorage.setItem("bulkWater", this.bulkWater);
    }
  },
  computed: {
    // 一括の水量を入力
    batch_water: {
      get() {
        return this.bulkWater;
      },
      set(value) {
        this.bulkWater = value;
        // 系統ごとの水量に反映
        for (const list of this.lists) {
          list.water = value;
        }
        // 保存
        this.save_values();
      }
    }
  },
  // 保存データのロード
  created: function() {
    if (localStorage.lists) {
      this.lists = JSON.parse(localStorage.getItem("lists"));
    }
    if (localStorage.bulkWater) {
      this.bulkWater = localStorage.getItem("bulkWater");
    }
  }
}
</script>
