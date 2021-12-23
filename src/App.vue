<template>
  <div id="app">
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Barr</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
export default {
  components: { Bar, Foo }
}
</script>

<style lang="scss" scoped></style>
