<template>
  <section class="mt-2">
    <h2 class="text-center">Register new idea</h2>
    <RegistrationForm @submit="onSubmit"></RegistrationForm>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import RegistrationForm from "@/components/ideas/RegistrationForm.vue";
import { Idea } from "@/models/idea";
import { ideasModule } from "@/store/ideas/const";

@Component({
  components: {
    RegistrationForm
  }
})
export default class extends Vue {
  @ideasModule.Action("register")
  private register!: (idea: Idea) => Promise<Idea>;

  onSubmit(newIdea: Idea) {
    this.register(newIdea).then(() => {
      this.$nuxt.$router.push("/");
    });
  }
}
</script>
