<template>
  <label class="w-radio"
         :class="{ 'is-checked': isChecked }">
    <span class="w-radio__inner">
      <input class="w-radio__original"
             type="radio"
             ref="radio"
             :value="value"
             @click="handleChange"/>
      <!-- <span class="w-radio__overlay"> -->
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
  inject: {
    radioGroupInstance: {
      default: null
    }
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
  data () {
    return {
      isChecked: false
    }
  },
  watch: {
    model (newValue) {
      this.$uploadRadioChecked(newValue)
    }
  },
  mounted () {
    if (this.checked) {
      this.setValue(this.value)
    }
  },
  methods: {
    $uploadRadioChecked (value) {
      this.isChecked = this.$refs.radio.checked = value === this.value
    },
    handleChange (e) {
      this.setValue(e.target.value)
    },
    async setValue (value) {
      if (!this.radioGroupInstance) {
        this.$emit('change', value)
      } else {
        this.radioGroupInstance.onModelChange(this.$uploadRadioChecked)
        this.radioGroupInstance.setValue(value)
      }
    }
  }
}
</script>
