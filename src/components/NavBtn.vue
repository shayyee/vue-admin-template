<!-- @format -->

<template>
  <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
    <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
  </a-button>
</template>

<script>
export default {
  props: ['collapsed'],
  methods: {
    toggleCollapsed() {
      this.$emit('toggleCollapsed')
    }
  }
}
</script>
