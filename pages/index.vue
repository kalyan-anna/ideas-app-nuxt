<template>
  <div class="container-fluid layout__container">
    <Header></Header>
    <main class="main-body">
      <div class="home__nav">
        <b-button pill variant="warning">Search ideas</b-button>
        <b-button pill variant="warning">Register new idea</b-button>
      </div>
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
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";

.main-body {
  flex-grow: 2;
  flex-basis: 100px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .home__nav {
    display: flex;
    flex-direction: column;
    @include media-breakpoint-up(md) {
      flex-direction: row;
    }

    button {
      margin: 10px;
    }
  }
}
</style>
