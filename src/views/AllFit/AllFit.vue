<template>
  <el-table border stripe :data="$mockData.tableData" size="small">
    <af-table-column label="可排序占位列" sortable prop="placeholder"></af-table-column>
    <af-table-column label="贴边定宽100" prop="fix" width="100" fixed="left"></af-table-column>
    <af-table-column label="定宽100少" prop="fixedLess" width="100"></af-table-column>
    <af-table-column label="固定宽度100-多" prop="fixedMore" width="100"></af-table-column>
    <af-table-column label="自由宽度-少1" prop="freedomLess1"></af-table-column>
    <af-table-column label="自由宽度-少2" prop="freedomLess2"></af-table-column>
    <af-table-column :fontSize="20" label="自由宽度-多1" prop="freedomMore1"></af-table-column>
    <af-table-column :fontRate="fontRate" label="freedom-more2" prop="freedomMore2"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="占位列" prop="placeholder"></af-table-column>
    <af-table-column label="贴边 (自定义)" fixed="right">
      <template slot-scope="scope">
        <el-button size="small">{{scope.row.fix}}</el-button>
      </template>
    </af-table-column>
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
			return {
        fontRate: {
          OTHER_RATE: 1.5
        },
      }
		},
		methods: {},
	}
</script>

<style lang="scss" scoped>

</style>
