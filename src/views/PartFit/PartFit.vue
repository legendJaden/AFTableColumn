<template>
  <el-table border stripe :data="$mockData.tableData" :autoFit="false">
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="贴边定宽100" prop="fix" width="100" fixed="left"></table-column>
    <table-column label="定宽100少" prop="fixedLess" width="100"></table-column>
    <table-column label="固定宽度100-多" prop="fixedMore" width="100"></table-column>
    <table-column label="自由宽度-多" prop="fixedMore"></table-column>
    <table-column label="自由宽度-少" prop="freedomLess1"></table-column>
    <table-column label="自由宽度-自适应!!!" prop="freedomMore1" fit>
      <template slot="header" slot-scope="scope">
        <div class="mark">自由宽度-自适应 <code>&lt;table-column fit&gt;</code></div>
      </template>
    </table-column>
    <table-column label="freedom-more2" prop="freedomMore2"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="贴边的 (自定义)" fixed="right">
      <template slot-scope="scope">
        <el-button>{{scope.row.fix}}</el-button>
      </template>
    </table-column>
  </el-table>
</template>

<script>
  export default {
		name: 'PartFit',
    created() {
		},
		mounted() {
		},

		data() {
			return {}
		},
		methods: {},
	}
</script>

<style scoped>
  .mark {
    color: red;
    font-weight: 600;
  }
</style>
