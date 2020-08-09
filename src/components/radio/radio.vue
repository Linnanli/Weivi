<template>
  <label class="w-radio"
         :class="{ 'is-checked': isChecked }">
    <span class="w-radio__inner">
      <input class="w-radio__original"
             type="radio"
             ref="radio"
             :value="value"
             @click="handleChange"/>
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
    prop: 'model',
    event: 'change'
  },
  props: {
    model: {
      type: [String, Number, Boolean]
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isChecked (newValue) {
      this.$refs.radio.checked = newValue
    }
  },
  computed: {
    isChecked () {
      return this.model === this.value
    }
  },
  mounted () {
    if (this.checked) {
      this.setValue(this.value)
    }
  },
  methods: {
    handleChange (e) {
      this.setValue(e.target.value)
    },
    setValue (value) {
      this.$emit('change', value)
    }
  }
}
</script>
