<template>
  <div class="foo" @click="alert">Foo</div>
</template>

<script>
export default {
  methods: {
    alert() {
      alert('xxx')
    }
  }
}
</script>

<style scoped>
.foo {
  cursor: pointer;
}
</style>
