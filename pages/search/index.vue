<template>
  <section class="mt-2">
    <IdeaList :ideas="ideas"></IdeaList>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import IdeaList from "@/components/ideas/IdeaList.vue";
import { ideasModule } from "../../store/ideas/const";
import { Idea } from "../../models/idea";

@Component({
  components: {
    IdeaList
  }
})
export default class extends Vue {
  @ideasModule.Getter("getIdeas")
  public ideas!: Idea[];
}
</script>
