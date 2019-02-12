<template>
  <!--判断scopedSlots.default可知道是否存在子元素-->
  <el-table-column
    v-if="$scopedSlots.default"
    v-bind="$attrs"
    :key="$attrs.label"
    :class-name="className"
    :min-width="minWidth"
  >
    <template slot-scope="scope">
      <!--原element组件使用了作用域插槽, 这里仿照-->
      <slot v-bind="scope"></slot>
    </template>
  </el-table-column>
  <!--默认情况使用原始 el-table-column-->
  <el-table-column
    v-else
    v-bind="$attrs"
    :key="$attrs.label"
    :min-width="minWidth"
  ></el-table-column>
</template>

<script>
export default {
  name: 'table-column',
  computed: {
    // table数据
    values () {
      const data = this.$parent.data || []
      return data.map(item => item[this.$attrs.prop])
    },
    // 是否自适应列宽, 默认是
    isFit () {
      return (this.$parent.$attrs.fitAll !== undefined && this.$parent.$attrs.fitAll !== false) || this.$attrs.fit
    },
    // 为存在scope的添加className
    className () {
      const parentClass = this.$attrs['class-name'] || ''
      const classPre = this.$attrs.prop || `encode-${this.transChar(this.$attrs.label)}` // 有的列因为有slotScope而不给prop
      return classPre ? `${parentClass} ${classPre}-column` : ''
    },
    // 列最小宽度
    minWidth () {
      if (!this.$attrs.label) return undefined
      const maxOne = Math.max(this.minLength, this.$attrs.label.length * this.fontRate.CHAR_RATE) * this.fontSize + 20
      return this.$attrs.width || maxOne
    },
    // 字体大小
    fontSize () {
      return this.$attrs.fontSize || (this.$ELEMENT || {}).fontSize || this.$consts.fontSize
    },
    // 字体比例
    fontRate () {
      return {
        ...this.$consts.fontRate, // 默认值
        ...(this.$ELEMENT || {}).fontRate || {}, // 根注册参数 (Vue.use 时的第二个参数)
        ... this.$attrs.fontRate || {}, // 父组件属性
      }
    }
  },
  watch: {
    values: {
      immediate: true,
      handler (val) {
        this.isFit !== false && this.$nextTick(() => {
          // 详情中的列表需要在nextTick才能生效
          if (this.$scopedSlots.default) {
            // 存在自定义节点
            const nodes = document.querySelector('.el-table__body-wrapper').querySelectorAll(`.${this.$attrs.prop || `encode-${this.transChar(this.$attrs.label)}`}-column`)
            if (nodes.length) {
              // ## 有可能会来不及获取nodes, 就切换菜单进入下一页了, 再研究吧
              const target = Array.from(nodes).map(item => item.innerText)
              this.$set(this, 'minLength', this.getMaxLength(target))
            }
          } else {
            this.$set(this, 'minLength', this.getMaxLength(val))
          }
        })
      }
    }
  },
  data () {
    return {
      minLength: 5, // 初始也不要写成0, 避免未及时设置宽度太丑
    }
  },
  methods: {
    // 获取数组中元素按字体比例最长长度
    getMaxLength (arr) {
      return arr.reduce((length, item) => {
        if (item) {
          const str = item.toString()
          const char = str.match(/[\u2E80-\u9FFF]/g)
          const charLength = char ? char.length : 0
          const num = str.match(/\d|\./g)
          const numLength = num ? num.length : 0
          const otherLength = str.length - charLength - numLength
          let newLength = charLength * this.fontRate.CHAR_RATE + numLength * this.fontRate.NUM_RATE + otherLength * this.fontRate.OTHER_RATE
          if (str.includes('\n')) newLength = this.getMaxLength(str.split('\n'))
          if (length < newLength) {
            length = newLength
          }
        }
        return length
      }, 0)
    },
    // 转换汉字为class支持的字母
    transChar (char) {
      return encodeURIComponent(char).replace(/[^a-zA-z]/g, 'eUC')
    }
  },
}
</script>
