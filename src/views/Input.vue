<template>
  <div class="about">
    <div>
      <g-input v-model="inputValue" clearable/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputValue: '1'
    }
  }
}
</script>
