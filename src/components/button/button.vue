<template>
  <button class="g-button"
          :class="{ [`icon-${iconPosition}`]: true }"
          :disabled="isDisabled"
          @click="handleClick">
    <g-icon v-if="loading"
            class="loading"
            name="loading"/>
    <g-icon v-if="icon && !loading"
            class="icon"
            :name="icon"/>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
export default {
  name: 'GButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (val) {
        return val === 'left' || val === 'right'
      }
    }
  },
  computed: {
    isDisabled () {
      return this.disabled || this.loading
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.g-button{
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &+.g-button{
    margin-left: 0.4em;
  }

  &[disabled] {
    background-color: var(--button-disabled-bg);
  }

  &:hover{
    border-color: var(--border-color-hover);
  }
  &:active{
    background-color: var(--button-active-bg);
  }
  &:focus{
    outline: none;
  }

  .icon,.loading{
    margin-right: 0.3em;
  }

  .loading{
    animation: gbuttonloading 1s linear infinite;
    @keyframes gbuttonloading {
      from {
        transform: rotate(0);
      }
      to{
        transform: rotate(360deg);
      }
    }
  }

  &.icon-right{
    .content {
      order: 1;
    }
    .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
}
</style>
