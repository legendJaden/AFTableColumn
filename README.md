# [af-table-column](https://github.com/legendJaden/AFTableColumn)

### 简介
基于 `element-ui` 组件库的 `el-table-column` 组件, 支持自适应列宽功能
### 安装
```
npm install af-table-column
```

### 使用
> 注意: 需要事先引入 `Vue` 和 `Element-UI` 依赖库, 并在 `<el-table></el-table>` 组件下使用该组件
```
// main.js
import Vue from 'vue'
import ElementUI from 'element-ui'
import AFTableColumn from 'af-table-column'

Vue.use(AFTableColumn)
```

- 默认用法, 全部自适应列宽
```
// list.vue
<template>
  <el-table :data="data">
    <af-table-column label="表头1" prop="字段1"></af-table-column>
    <af-table-column label="表头2" prop="字段2"></af-table-column>
  </el-table>
</template>
```

- 部分不适应, 两种写法:
```
// list.vue
<template>
  <el-table :data="data">
    <!--1. 设置 fit 属性为 false-->
    <af-table-column label="表头1" prop="字段1" :fit="false"></af-table-column>
    
    <!--2. 使用 `ElementUI` 原有的 `el-table-column`-->
    <el-table-column label="表头2" prop="字段2"></el-table-column>
  </el-table>
</template>
```

- 部分自适应:
```
// list.vue
// 实现仅有 表头2 自适应
<template>
  <!--在 table 上设置 autoFit 属性为 false-->
  <el-table :data="data" :autoFit="false">
    <af-table-column label="表头1" prop="字段1"></af-table-column>
    
    <!--在 column 上设置 fit 属性为 true-->
    <af-table-column label="表头2" prop="字段2" fit></af-table-column>
  </el-table>
</template>

<!--或者其他列使用 ElementUI 原有的 el-table-column-->
<template>
  <el-table :data="data">
    <el-table-column label="表头1" prop="字段1"></el-table-column>
    <af-table-column label="表头2" prop="字段2"></af-table-column>
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
字体大小px值, 用于计算各种字符占的像素宽度, 默认为 14
> 注意: 此字段并非控制样式的 `font-size`

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
Vue.use(AFTableColumn, { fontRate, fontSize })
```
> 备注: 可缺省任意字段, 组件将使用默认值.

