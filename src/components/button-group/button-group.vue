<template>
  <div class="g-button-group">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'GButtonGroup'
}
</script>
<style lang="scss" scoped>
.g-button-group{
  .g-button{
    border-radius: 0;

    &:first-of-type{
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
    &:last-of-type{
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
    &:not(:first-of-type){
      margin-left: -1px;
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>
