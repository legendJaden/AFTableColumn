<template>
  <el-table border stripe :data="$mockData.tableData">
    <table-column label="贴边定宽100" prop="fix" width="100" fixed="left"></table-column>
    <table-column label="定宽100少" prop="fixedLess" width="100"></table-column>
    <table-column label="固定宽度100-多" prop="fixedMore" width="100"></table-column>
    <table-column label="自由宽度-少1" prop="freedomLess1"></table-column>
    <table-column label="自由宽度-少2" prop="freedomLess2"></table-column>
    <table-column label="自由宽度-多1" prop="freedomMore1"></table-column>
    <table-column label="freedom-more2" prop="freedomMore2"></table-column>
    <table-column label="贴边 (自定义)" fixed="right">
      <template slot-scope="scope">
        <el-button>{{scope.row.fix}}</el-button>
      </template>
    </table-column>
  </el-table>
</template>

<script>
  export default {
		name: 'AllFit',
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

<style lang="scss" scoped>

</style>
