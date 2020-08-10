<template>
  <div class="w-radio-group">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'WRadioGroup',
  provide () {
    return {
      radioGroupInstance: this
    }
  },
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    model: {
      type: [String, Number, Boolean]
    }
  },
  watch: {
    model (newValue) {
      if (!this.modelChangeCallbacks) return
      for (let i = 0; i < this.modelChangeCallbacks.length; i++) {
        const callback = this.modelChangeCallbacks[i]
        callback(newValue)
      }
    }
  },
  methods: {
    setValue (value) {
      this.$emit('change', value)
    },
    onModelChange (callback) {
      if (!this.modelChangeCallbacks) {
        this.modelChangeCallbacks = []
      }
      this.modelChangeCallbacks.push(callback)
    }
  }
}
</script>
