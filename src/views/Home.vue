<template>
  <div class="home">
    <div>
      <g-button icon="setting" icon-position="left" :loading="loading" @click="handleLoaidng">i am button1</g-button>
      <g-button icon="setting" icon-position="right">i am button2</g-button>
    </div>
    <div style="margin-top: 8px;">
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>上一页</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handleLoaidng () {
      this.loading = !this.loading
    }
  }
}
</script>
