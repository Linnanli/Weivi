<template>
  <div class="w-col"
       :class="colClass"
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
    },
    offset: {
      type: [String, Number],
      validator (value) {
        const val = Number(value)
        return !isNaN(val) && val >= 1 && val <= 24
      }
    },
    xs: {
      type: Object,
      default () {
        return {}
      }
    },
    sm: {
      type: Object,
      default () {
        return {}
      }
    },
    md: {
      type: Object,
      default () {
        return {}
      }
    },
    lg: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    gutterStyle () {
      if (!this.row || !this.row.gutter) return {}
      const padding = `${this.row.gutter / 2}px`
      return {
        paddingLeft: padding,
        paddingRight: padding
      }
    },
    colClass () {
      return {
        [`w-col-${this.span}`]: this.span,
        [`w-col-offset-${this.offset}`]: this.offset,
        ...this.getMediaQueryClass()
      }
    }
  },
  methods: {
    getMediaQueryClass () {
      const classCollection = {}
      for (const key of ['xs', 'sm', 'md', 'lg']) {
        if (this[key].span) {
          classCollection[`w-col-${key}-${this[key].span}`] = true
        }
        if (this[key].offset) {
          classCollection[`w-col-${key}-offset-${this[key].offset}`] = true
        }
      }
      return classCollection
    }
  }
}
</script>
