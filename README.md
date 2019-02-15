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
    
    <af-table-column label="列1" prop="field1"></af-table-column>
    <af-table-column label="列2" prop="field2"></af-table-column>
    
    <!--也支持简单的自定义内容-->
    <af-table-column label="列3">
      <template slot-scope="scope">
        <div>自定义显示值31: {{ scope.row.field31 }}</div>
        <div>自定义显示值32: {{ scope.row.field32 }}</div>
      </template>
    </af-table-column>
    <af-table-column label="操作">
      <template slot-scope="scope">
        <el-button @click="removeItem">删除</el-button>
      </template>
    </af-table-column>
    
  </el-table>
</template>
```

- 部分不适应列宽, 两种写法:
```
// list.vue
<template>
  <el-table :data="data">
    <!--1. 设置 fit 属性为 false-->
    <af-table-column label="列1" prop="field1" :fit="false"></af-table-column>
    
    <!--2. 使用 `ElementUI` 原有的 `el-table-column`-->
    <el-table-column label="列2" prop="field2"></el-table-column>
  </el-table>
</template>
```

- 部分自适应列宽:
```
// list.vue
// 实现仅有 列2 自适应
<template>
  <!--在 table 上设置 autoFit 属性为 false-->
  <el-table :data="data" :autoFit="false">
    <af-table-column label="列1" prop="field1"></af-table-column>
    
    <!--在 column 上设置 fit 属性为 true-->
    <af-table-column label="列2" prop="field2" fit></af-table-column>
  </el-table>
</template>

<!--或者其他列使用 ElementUI 原有的 el-table-column-->
<template>
  <el-table :data="data">
    <el-table-column label="列1" prop="field1"></el-table-column>
    <af-table-column label="列2" prop="field2"></af-table-column>
  </el-table>
</template>
```

> 暂不支持的用法:
> `column` 的自定义内容中存在过于复杂的组件, 如:
> ```
> <el-table>
>   <af-table-column>
>     <template slot-scope="scope">
>       
>       <el-form>
>         <el-form-item label="输入框" prop="inputField">
>           <el-input v-model="formData.inputField"></el-input>
>         </el-form-item>
>         <el-form-item label="选择框" prop="selectField">
>           <el-select v-model="formData.selectField">
>             <el-option :label="选项1" :value="value1"></el-option>
>             <el-option :label="选项2" :value="value2"></el-option>
>             <el-option :label="选项3" :value="value3"></el-option>
>           </el-select>
>         </el-form-item>
>       </el-form>
>       
>     </template>
>   </af-table-column>
> </el-table>
> ```
> 因为组件暂时不能考虑到所有的自定义情况并计算元素实际宽度

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
