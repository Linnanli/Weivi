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
