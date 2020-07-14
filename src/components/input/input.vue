<template>
  <div class="g-input"
       :class="{ 'g-input--suffix': showSuffix }">
    <input class="g-input__inner"
           type="text"
           ref="input"
           :readonly="readonly"
           :disabled="disabled"
           @input="handleInput">
    <div class="g-input__suffix" v-if="showSuffix">
      <g-icon class="g-input__icon g-input__clear"
              name="clear"
              v-if="clearable"
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
  computed: {
    showSuffix () {
      return this.clearable
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
    }
  }
}
</script>
