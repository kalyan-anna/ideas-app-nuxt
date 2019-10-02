<template>
  <div class="container">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import HelloWorld from "~/components/HelloWorld.vue";
@Component({
  components: {
    HelloWorld
  }
})
export default class extends Vue {}
</script>
