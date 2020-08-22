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
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number, Boolean]
    }
  },
  watch: {
    value (newValue) {
      const instances = this.getComponentInstances('w-radio')
      this.setChildChecked(instances, 'update')
    }
  },
  mounted () {
    const instances = this.getComponentInstances('w-radio')
    const radioValue = this.setChildChecked(instances, 'init')
    this.updateValue(radioValue)
  },
  methods: {
    setChildChecked (instances, type) {
      let radioValue = this.value
      for (let i = 0; i < instances.length; i++) {
        const instance = instances[i]
        if (instance.$options._componentTag === 'w-radio') {
          const value = instance.label
          const radio = instance.$refs.radio
          if (type === 'init') {
            radio.checked = radio.checked ? true : value === radioValue
          } else {
            radio.checked = value === radioValue
          }
          if (radio.checked) radioValue = value
        }
      }
      return radioValue
    },
    getComponentInstances (componentName = '') {
      this.componentInstances = this.componentInstances || []
      if (this.componentInstances.length > 0) return this.componentInstances

      const vnodes = this.$slots.default || []
      if (vnodes.length === 0) return
      for (let i = 0; i < vnodes.length; i++) {
        const vnode = vnodes[i]
        const tag = (vnode.componentOptions && vnode.componentOptions.tag)
          ? vnode.componentOptions.tag
          : ''
        if (componentName === tag) {
          this.componentInstances.push(vnode.componentInstance)
        }
      }
      return this.componentInstances
    },
    updateValue (value) {
      this.$emit('change', value)
    }
  }
}
</script>
