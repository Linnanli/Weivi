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
    <span class="w-switch__overlay">
      <span class="w-switch__text" v-if="activeText && inactiveText">
        {{ checked ? activeText : inactiveText }}
      </span>
    </span>
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
    activeValue: {
      type: [String, Number, Boolean],
      default: true
    },
    inactiveValue: {
      type: [String, Number, Boolean],
      default: false
    },
    activeText: {
      type: String,
      default: null
    },
    inactiveText: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checked: false
    }
  },
  mounted () {
    const checked = this.value === this.activeValue
    this.setChecked(checked)
    this.setValue(checked)
  },
  methods: {
    setChecked (checked) {
      this.$refs.switch.checked = checked
    },
    handleChange (e) {
      this.setValue(e.target.checked)
    },
    setValue (checked) {
      this.checked = checked
      const value = checked ? this.activeValue : this.inactiveValue
      this.$emit('change', value)
    }
  }
}
</script>
