<template>
  <div class="w-col"
       :class="`w-col--${span}`"
       :style="gutterStyle">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'WCol',
  inject: ['row'],
  props: {
    span: {
      type: [String, Number],
      default: '24',
      validator (value) {
        const val = Number(value)
        return !isNaN(val) && val >= 1 && val <= 24
      }
    }
  },
  computed: {
    gutterStyle () {
      if (!this.row.gutter) {}
      const padding = `${this.row.gutter / 2}px`
      return {
        paddingLeft: padding,
        paddingRight: padding
      }
    }
  }
}
</script>
