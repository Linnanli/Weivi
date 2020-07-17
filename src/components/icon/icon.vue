<template>
  <svg class="w-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'WIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.w-icon{
  width: 1em;
  height: 1em;
}
</style>
