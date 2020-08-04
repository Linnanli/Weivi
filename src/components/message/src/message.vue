<template>
  <transition name="w-message-fade"
              @after-leave="afterLeave">
    <div :class="{
          'w-message': true,
          [`w-message--${type}`]: true
        }"
        v-show="visible"
    >
      <div class="w-message__content">
        {{ message }}
      </div>
      <w-icon v-if="showClose"
              class="w-message__close"
              name="close"
              @click.native="close"/>
    </div>
  </transition>
</template>
<script>
import { removeDom } from '@/common/utils/dom'

export default {
  name: 'WMessage',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success'
    },
    time: {
      type: Number,
      default: 0
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
  watch: {
    visible (newValue) {
      if (!newValue && this.onClose) {
        this.onClose(this)
      }
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
    autoClose () {
      if (!this.time) return
      const timer = setTimeout(() => {
        this.visible = false
        clearTimeout(timer)
      }, this.time)
    }
  }
}
</script>
