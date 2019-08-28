<!-- @format -->
<!-- 替代router-view组件，可配置是否keep-alive -->
<script>
export default {
  name: 'RouteView',
  props: {
    keepAlive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  render() {
    const {
      $route: { meta }
    } = this
    const inKeep = (
      <keep-alive>
        <router-view />
      </keep-alive>
    )
    const notKeep = <router-view />
    return this.keepAlive || meta.keepAlive ? inKeep : notKeep
  }
}
</script>
