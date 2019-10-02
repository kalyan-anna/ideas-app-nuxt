<template>
  <section class="mt-2">
    <h2 class="text-center">Register new idea</h2>
    <RegistrationForm></RegistrationForm>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import RegistrationForm from "@/components/ideas/RegistrationForm.vue";

@Component({
  components: {
    RegistrationForm
  }
})
export default class extends Vue {}
</script>