<template>
  <div class="w-checkbox-group">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'WCheckboxGroup',
  provide () {
    return {
      checkboxGroupInstance: this
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    value () {
      this.setChildChecked(this.$children, 'update')
    }
  },
  mounted () {
    const instances = this.getComponentInstances('w-checkbox')
    this.setChildChecked(instances, 'init')
    this.updateValue()
  },
  methods: {
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
    setChildChecked (instances, type) {
      for (let i = 0; i < instances.length; i++) {
        const instance = instances[i]
        if (instance.$options._componentTag === 'w-checkbox') {
          const hashValue = Boolean(~this.value.indexOf(instance.label))
          if (type === 'init') {
            instance.$refs.checkbox.checked = instance.$refs.checkbox.checked ? true : hashValue
          } else {
            instance.$refs.checkbox.checked = hashValue
          }
        }
      }
    },
    updateValue () {
      const instances = this.getComponentInstances('w-checkbox')
      const values = new Set()
      for (let i = 0; i < instances.length; i++) {
        const instance = instances[i]
        if (instance.$options._componentTag === 'w-checkbox' && instance.$refs.checkbox.checked) {
          values.add(instance.label)
        }
      }
      this.$emit('change', Array.from(values))
    }
  }
}
</script>
