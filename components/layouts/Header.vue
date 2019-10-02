<template>
  <header class="layout__header">
    <h1>IDEAS...</h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.layout__header {
  height: 60px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>