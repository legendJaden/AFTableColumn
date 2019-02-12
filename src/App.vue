<template>
  <div id="app">
    <el-tabs v-model="activeNames" type="border-card">
      <el-tab-pane label="默认 (全部自适应)" name="all-fit">
        <AllFit></AllFit>
      </el-tab-pane>
      <el-tab-pane label="部分自适应" name="part-fit"></el-tab-pane>
      <el-tab-pane label="部分不适应" name="part-not-fit"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AllFit from './views/AllFit'
export default {
  name: 'app',
  components: {
    AllFit,
    // PartFit,
    // PartNotFit,
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
