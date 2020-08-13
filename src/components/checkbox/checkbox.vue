<template>
  <label class="w-checkbox"
         :class="{
           'is-disabled': disabled
         }">
    <span class="w-checkbox__inner">
      <input class="w-checkbox__original"
             type="checkbox"
             ref="checkbox"
             :disabled="disabled"
             @change="handleChange"/>
      <span class="w-checkbox__overlay"/>
    </span>
    <span class="w-checkbox__label">
      <slot/>
    </span>
  </label>
</template>
<script>
export default {
  name: 'WCheckbox',
  model: {
    prop: 'model',
    event: 'change'
  },
  inject: {
    checkboxGroupInstance: {
      default: null
    }
  },
  props: {
    model: {
      type: [String, Number, Boolean],
      default: null
    },
    value: {
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
  mounted () {
    if (this.checked) {
      this.setValue(this.checked)
    }
  },
  methods: {
    handleChange (e) {
      this.setValue(e.target.checked)
    },
    async setValue (value) {
      const isChecked = this.$refs.checkbox.checked = value
      if (!this.checkboxGroupInstance) {
        value = isChecked ? this.trueValue : this.falseValue
        this.$emit('change', value)
      } else {
        value = isChecked ? this.value : null
        this.checkboxGroupInstance.setValue(value)
      }
    }
  }
}
</script>
