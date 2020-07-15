<template>
  <div class="g-input"
       :class="{ 'g-input--suffix': showSuffix }"
       @mouseenter="handleMouseenter"
       @mouseleave="handleMouseleave">
    <input class="g-input__inner"
           type="text"
           ref="input"
           :placeholder="placeholder"
           :readonly="readonly"
           :disabled="disabled"
           @input="handleInput">
    <div class="g-input__suffix" v-if="showSuffix">
      <g-icon class="g-input__icon g-input__clear"
              name="clear"
              v-show="showClearButton"
              @click.native="handleClear"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GInput',
  model: {
    props: 'value',
    event: 'input'
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isMouseenter: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable
    },
    showClearButton () {
      return this.clearable && this.value && this.isMouseenter
    }
  },
  mounted () {
    this.inputEle = this.$refs.input
    this.setInputValue(this.value)
  },
  methods: {
    setInputValue (value) {
      this.inputEle.value = value
    },
    handleClear () {
      this.setInputValue('')
      this.handleInput()
    },
    handleInput () {
      this.$emit('input', this.inputEle.value)
    },
    handleMouseenter () {
      this.isMouseenter = true
    },
    handleMouseleave () {
      this.isMouseenter = false
    }
  }
}
</script>
