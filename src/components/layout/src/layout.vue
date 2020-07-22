<template>
  <section class="w-layout"
       :class="{ 'is-vertical': isVertical }">
    <slot/>
  </section>
</template>
<script>
export default {
  name: 'WLayout',
  computed: {
    isVertical () {
      const defaultSlots = (this.$slots && this.$slots.default)
        ? this.$slots.default
        : []
      return defaultSlots.some((vnode) => {
        const tag = (vnode.componentOptions && vnode.componentOptions.tag)
          ? vnode.componentOptions.tag
          : ''
        return tag === 'w-header' || tag === 'w-footer'
      })
    }
  }
}
</script>
