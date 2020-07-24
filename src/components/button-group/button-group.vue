<template>
  <div class="w-button-group">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'WButtonGroup',
  provide () {
    return {
      buttonGroupInstance: this,
      buttonGroupClick: (key) => {
        this.$emit('select', key)
      }
    }
  }
}
</script>
