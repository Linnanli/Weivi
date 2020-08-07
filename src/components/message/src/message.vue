<template>
  <transition name="w-message-fade"
              @after-leave="afterLeave">
    <div :class="{
          'w-message': true,
          [`w-message--${type}`]: true
        }"
        v-show="visible"
    >
      <svg class="w-icon w-message__icon">
        <use xlink:href="#icon-info"></use>
      </svg>
      <div class="w-message__content">
        {{ message }}
      </div>
      <svg v-if="showClose"
           class="w-icon w-message__close"
           @click="close">
        <use xlink:href="#icon-close"></use>
      </svg>
    </div>
  </transition>
</template>
<script>
import { removeDom } from '@/common/utils/dom'

export default {
  name: 'WMessage',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info'
    },
    time: {
      type: Number,
      default: 3000
    },
    showClose: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    this.autoClose()
  },
  methods: {
    afterLeave () {
      removeDom(this.$el)
      this.$destroy()
    },
    close () {
      this.visible = false
      if (this.onClose) {
        this.onClose(this)
      }
    },
    open () {
      this.visible = true
    },
    autoClose () {
      if (!this.time) return
      const timer = setTimeout(() => {
        this.close()
        clearTimeout(timer)
      }, this.time)
    }
  }
}
</script>
