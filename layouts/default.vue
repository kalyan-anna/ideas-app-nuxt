<template>
  <div class="container-fluid layout__container">
    <Header></Header>
    <main class="layout__main">
      <nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

@Component({
  components: {
    Footer,
    Header
  }
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.layout__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.layout__main {
  flex-grow: 2;
  flex-basis: 100px;
  width: 100%;
}
</style>

