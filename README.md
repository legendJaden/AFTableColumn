# auto-fit-table-column

### 简介
基于 `element-ui` 组件库的 `el-table-column` 组件, 支持自适应列宽功能
### 安装
```
npm install apec-table-column
```

### 使用
> 注意: 需要事先引入 `Vue` 和 `Element-UI` 依赖库, 并在 `<el-table></el-table>` 组件下使用该组件
```
// main.js
import Vue from 'vue'
import ElementUI from 'element-ui'
import TableColumn from 'auto-fit-table-column'

Vue.use(TableColumn)
```
```
// list.vue
<template>
  <el-table :data="data" autoFit>
    <table-column label="表头" prop="字段"></table-column>
  </el-table>
</template>
```

### 配置项
1. `fontRate`:
自适应列宽时三种字符的字体比例

| 字符 | 字段 | 默认值 |
| ---- | ---- | ---- |
| 汉字 | CHAR_RATE | 1.1 |
| 数字 | NUM_RATE | 0.65 |
| 其他 | OTHER_RATE | 0.5 |

2. `fontSize`:
字体大小px值, 默认为 14

```
// main.js
// 定义字体比例
const fontRate = {
  CHAR_RATE: 1.1, // 汉字比率
  NUM_RATE: 0.65, // 数字
  OTHER_RATE: 0.8 // 除汉字和数字以外的字符的比率
}
const fontSize = 16
// 注册组件
Vue.use(TableColumn, { fontRate, fontSize })
```
> 备注: 可缺省任意字段, 组件将使用默认值.

