<!-- @format -->

<template>
  <div id="userLayout">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="../assets/img/logo.png" class="logo" alt="logo" />
            <span class="title">Senthink</span>
          </a>
        </div>
      </div>

      <route-view></route-view>

      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">
          Copyright &copy; senthink
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RouteView from './RouteView'
export default {
  name: 'UserLayout',
  components: { RouteView },
  data() {
    return {}
  },
  mounted() {
    document.body.classList.add('userLayout')
  },
  beforeDestroy() {
    document.body.classList.remove('userLayout')
  }
}
</script>
