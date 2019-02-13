<template>
  <div id="app">
    <el-tabs v-model="activeNames" type="border-card">
      <el-tab-pane label="全部自适应 (默认)" name="all-fit">
        <div class="el-table">固定宽度者以宽度为准, 非固定宽度者自适应</div>
        <AllFit></AllFit>
      </el-tab-pane>
      <el-tab-pane label="部分不适应" name="part-not-fit">
        <div class="el-table">设置 <code>&lt;table-column :fit="false"&gt;</code> 者不适应</div>
        <PartNotFit></PartNotFit>
      </el-tab-pane>
      <el-tab-pane label="部分自适应" name="part-fit">
        <div class="el-table">设置 <code>&lt;el-table :autoFit="false"&gt;</code>后, 设置 <code>&lt;table-column fit&gt;</code> 者自适应</div>
        <PartFit></PartFit>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AllFit from './views/AllFit'
import PartFit from './views/PartFit'
import PartNotFit from './views/PartNotFit'
export default {
  name: 'app',
  components: {
    AllFit,
    PartFit,
    PartNotFit,
  },
  data () {
    return {
      activeNames: 'all-fit'
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
