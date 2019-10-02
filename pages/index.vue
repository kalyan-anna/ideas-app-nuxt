<template>
  <div class="container-fluid layout__container">
    <Header></Header>
    <main class="main-body">
      <b-button pill variant="primary">Search Ideas</b-button>
      <b-button pill variant="primary">Register New Idea</b-button>
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

