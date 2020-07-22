<template>
  <header class="w-header"
          :style="{ height: heigth }">
    <slot/>
  </header>
</template>
<script>
export default {
  name: 'WHeader',
  props: {
    heigth: {
      type: String,
      default: '60px'
    }
  }
}
</script>
