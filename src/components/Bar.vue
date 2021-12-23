<template>
  <div class="bar">
    Bar
    <div>{{ counter }}</div>
    <button @click="fetCount">获取counter</button>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.getCount
    }
  },
  methods: {
    fetCount() {
      this.$store.dispatch('fetchInitialCount')
    }
  },
  // 默认页面一加载  这个方法后端不会走
  mounted() {
    // this.fetCount()
  },
  // 页面级组件的自定义方法，服务端调用
  asyncData(store) {
    return store.dispatch('fetchInitialCount')
  }
}
</script>

<style scoped>
.bar {
  background: yellow;
  color: red;
  font-size: 28px;
  font-weight: 600;
}
</style>
