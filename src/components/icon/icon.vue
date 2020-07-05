<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'GIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.g-icon{
  width: 1em;
  height: 1em;
}
</style>
