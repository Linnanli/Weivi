<template>
  <button class="w-button"
          :class="{ 'w-button__icon--right': iconPosition === 'right' }"
          :disabled="isDisabled"
          @click="handleClick">
    <w-icon v-if="loading"
            class="w-button__icon w-button__loading"
            name="loading"/>
    <w-icon v-if="icon && !loading"
            class="w-button__icon"
            :name="icon"/>
    <div class="w-button__content">
      <slot/>
    </div>
  </button>
</template>
<script>
export default {
  name: 'WButton',
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
