<template>
  <header class="layout__header">
    <div>Ideas...</div>
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
}
</style>