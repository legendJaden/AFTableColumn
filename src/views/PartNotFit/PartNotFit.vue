<template>
  <el-table border stripe :data="$mockData.tableData">
    <table-column label="占位列" prop="placeholder"></table-column>
    <table-column label="贴边的定宽100" prop="fix" width="100" fixed="left"></table-column>
    <table-column label="自由宽度-多" prop="fixedMore"></table-column>
    <table-column label="自由宽度-少" prop="freedomLess1"></table-column>
    <table-column label="自由宽度-不适应 &lt;table-column :fit='false'&gt;" prop="freedomMore1" :fit="false">
      <template slot="header" slot-scope="scope">
        <div class="mark">
          <p>不适应</p>
          <p><code>:fit="false"</code></p>
        </div>
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
    <table-column label="贴边中 (自定义)" fixed="right">
      <template slot-scope="scope">
        <el-button>{{scope.row.fix}}</el-button>
      </template>
    </table-column>
  </el-table>
</template>

<script>
  export default {
		name: 'PartNotFit',
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
    white-space: pre-wrap;
    padding: 0;
    line-height: 20px;
  }
  .mark p {
    margin: 0;
  }
</style>
