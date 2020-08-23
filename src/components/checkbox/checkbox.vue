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
    prop: 'value',
    event: 'change'
  },
  inject: {
    checkboxGroupInstance: {
      default: null
    }
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
  mounted () {
    if (!this.checkboxGroupInstance) {
      this.setValue(this.checked || (this.value === this.trueValue))
    } else {
      this.setChecked(this.checked)
    }
  },
  methods: {
    setChecked (value) {
      this.$refs.checkbox.checked = value
      return value
    },
    handleChange (e) {
      this.setValue(e.target.checked)
    },
    async setValue (value) {
      const isChecked = this.setChecked(value)
      if (!this.checkboxGroupInstance) {
        value = isChecked ? this.trueValue : this.falseValue
        this.$emit('change', value)
      } else {
        this.checkboxGroupInstance.updateValue()
      }
    }
  }
}
</script>
