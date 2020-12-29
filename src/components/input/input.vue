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
           :value="value"
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
import { computed, defineComponent, ref, toRefs } from '@vue/composition-api'

export default defineComponent({
  name: 'WInput',
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
  setup (props, ctx) {
    const slot = ctx.slots
    const {
      clearable,
      suffixIcon,
      prefixIcon
    } = toRefs(props)
    const isMouseenter = ref(false)

    const showSuffix = computed(() => clearable || suffixIcon || slot.suffix)
    const showPrevfix = computed(() => prefixIcon || slot.prefix)
    const showClearButton = computed(() => clearable && isMouseenter)

    const setInputValue = (value) => {
      ctx.refs.input.value = value
    }

    const handleClear = () => {
      setInputValue('')
      handleInput()
    }

    const handleInput = () => {
      ctx.emit('input', ctx.refs.input.value)
    }

    const handleMouseenter = () => {
      isMouseenter.value = true
    }

    const handleMouseleave = () => {
      isMouseenter.value = false
    }

    const handleBlur = (e) => {
      ctx.emit('blur', e)
    }

    const handleFocus = (e) => {
      ctx.emit('focus', e)
    }

    return {
      // data
      isMouseenter,
      // computed
      showSuffix,
      showPrevfix,
      showClearButton,
      // methods
      setInputValue,
      handleInput,
      handleMouseenter,
      handleMouseleave,
      handleBlur,
      handleFocus,
      handleClear
    }
  }
})
</script>
