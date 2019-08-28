<!-- @format -->

<template>
  <div>
    <nav-btn :collapsed="collapsed" @toggleCollapsed="toggle"></nav-btn>
    <nav-left :collapsed="collapsed" :navlist="list"></nav-left>
    <a-button @click="handleLogout">退出</a-button>
  </div>
</template>

<script>
import NavLeft from '@/components/NavLeft.vue'
import NavBtn from '@/components/NavBtn.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    'nav-left': NavLeft,
    'nav-btn': NavBtn
  },
  data() {
    return {
      collapsed: true,
      list: [
        {
          key: '1',
          title: 'Option 1'
        },
        {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [{ key: '2.1.1', title: 'Option 2.1.1' }]
            }
          ]
        }
      ]
    }
  },
  methods: {
    ...mapActions(['Logout']),
    toggle() {
      this.collapsed = !this.collapsed
    },
    handleLogout() {
      const that = this
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk() {
          return that
            .Logout({})
            .then(() => {
              window.location.reload()
            })
            .catch(err => {
              that.$message.error({
                title: '错误',
                description: err.message
              })
            })
        },
        onCancel() {}
      })
    }
  }
}
</script>
