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
