<template>
  <label class="w-switch"
         :class="{
           'is-disabled': disabled
         }">
    <input class="w-switch__original"
           type="checkbox"
           ref="switch"
           :disabled="disabled"
           @change="handleChange"/>
    <span class="w-switch__overlay"/>
  </label>
</template>
<script>
export default {
  name: 'WSwitch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    label: {
      type: [String, Number, Boolean]
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange (e) {
      this.setValue(e.target.checked)
    },
    setValue (value) {
      this.$emit('change', value)
    }
  }
}
</script>
