<template>
  <button class="w-button"
          ref="button"
          :class="{
            'w-button__icon--right': iconPosition === 'right',
            [`w-button--${type}`]: true,
            'w-button--block': block,
            'is-loading': loading,
            'is-text': text
          }"
          :disabled="isDisabled"
          @click="handleClick">
    <transition name="w-button-icon-fade">
      <svg v-if="showIcon"
           class="w-icon w-button__icon"
           :class="{ 'w-button__loading': loading }">
          <use :xlink:href="`#icon-${ loading ? 'loading' : icon}`"></use>
      </svg>
    </transition>
    <div class="w-button__content" v-if="$slots.default">
      <slot/>
    </div>
  </button>
</template>
<script>
import { computed, defineComponent, getCurrentInstance } from '@vue/composition-api'
export default defineComponent({
  name: 'WButton',
  inject: {
    buttonGroupInstance: {
      default: null
    },
    buttonGroupClick: {
      default: null
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    buttonKey: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (val) {
        return val === 'left' || val === 'right'
      }
    }
  },
  setup (props, ctx) {
    const isDisabled = computed(() => props.disabled || props.loading)
    const showIcon = computed(() => props.icon || props.loading)

    const instanceProxy = getCurrentInstance().proxy

    const handleClick = (e) => {
      console.log(ctx)
      ctx.emit('click', e)
      if (instanceProxy.buttonGroupClick) {
        instanceProxy.buttonGroupClick(instanceProxy.buttonKey || getButtonIndex())
      }
    }

    const getButtonIndex = () => {
      const vnodes = instanceProxy.buttonGroupInstance.$slots.default
      for (let i = 0; i < vnodes.length; i++) {
        const vnode = vnodes[i]
        if (vnode === ctx.vnode) return i
      }
    }

    return {
      isDisabled,
      showIcon,
      handleClick
    }
  }
})
</script>
