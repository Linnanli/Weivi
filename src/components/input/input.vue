<template>
  <div class="w-input"
       :class="{
         'w-input--suffix': showSuffix,
         'w-input--prefix': showPrevfix
        }"
       @mouseenter="handleMouseenter"
       @mouseleave="handleMouseleave">
    <!-- prefix -->
    <div class="w-input__prefix" v-if="showPrevfix">
      <slot name="prefix" v-if="$slots.prefix"/>
      <w-icon class="w-input__icon"
              :name="prefixIcon"
              v-else-if="prefixIcon"/>
    </div>
    <!-- input -->
    <input class="w-input__inner"
           type="text"
           ref="input"
           :placeholder="placeholder"
           :readonly="readonly"
           :disabled="disabled"
           @input="handleInput"
           @blur="handleBlur"
           @focus="handleFocus">
    <!-- suffix -->
    <div class="w-input__suffix" v-if="showSuffix">
      <slot name="suffix" v-if="$slots.suffix"/>
      <w-icon class="w-input__icon"
              :name="suffixIcon"
              v-else-if="suffixIcon"/>
      <w-icon class="w-input__icon w-input__clear"
              name="clear"
              v-show="showClearButton"
              @click.native="handleClear"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WInput',
  model: {
    props: 'value',
    event: 'input'
  },
  props: {
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
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
      return this.clearable || this.suffixIcon || this.$slots.suffix
    },
    showPrevfix () {
      return this.prefixIcon || this.$slots.prefix
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
    },
    handleBlur (event) {
      this.$emit('blur', event)
    },
    handleFocus () {
      this.$emit('focus', event)
    }
  }
}
</script>
