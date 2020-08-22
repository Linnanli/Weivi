<template>
  <label class="w-radio"
         :class="{
           'is-disabled': disabled
         }">
    <span class="w-radio__inner">
      <input class="w-radio__original"
             type="radio"
             ref="radio"
             :value="label"
             :disabled="disabled"
             @click="handleChange"/>
      <span class="w-radio__overlay"/>
    </span>
    <span class="w-radio__label">
      <slot/>
    </span>
  </label>
</template>
<script>
export default {
  name: 'WRadio',
  model: {
    prop: 'value',
    event: 'change'
  },
  inject: {
    radioGroupInstance: {
      default: null
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
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
  watch: {
    value (newValue) {
      this.setChecked(newValue === this.label)
    }
  },
  mounted () {
    if (!this.radioGroupInstance) {
      this.setChecked(this.checked || (this.label === this.value))
      if (this.checked) this.setValue(this.label)
    } else {
      this.setChecked(this.checked)
    }
  },
  methods: {
    setChecked (checked) {
      this.$refs.radio.checked = checked
    },
    handleChange (e) {
      this.setValue(e.target.value)
    },
    async setValue (value) {
      if (!this.radioGroupInstance) {
        this.$emit('change', value)
      } else {
        this.radioGroupInstance.updateValue(value)
      }
    }
  }
}
</script>
