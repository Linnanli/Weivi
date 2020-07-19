<template>
  <div class="w-row" :style="gutterStyle">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'WRow',
  provide () {
    return {
      row: this
    }
  },
  props: {
    gutter: {
      type: [Number, String],
      validator (value) {
        const val = Number(value)
        return !isNaN(val)
      }
    }
  },
  computed: {
    gutterStyle () {
      if (!this.gutter) {}
      const padding = `-${this.gutter / 2}px`
      return {
        marginLeft: padding,
        marginRight: padding
      }
    }
  }
}
</script>
