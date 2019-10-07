<template>
  <div class="idea-list__containr">
    <IdeaPreview v-for="idea in ideas" :key="idea.id" :idea="idea"></IdeaPreview>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Idea } from "../../models/idea";
import IdeaPreview from "./IdeaPreview.vue";

@Component({
  components: {
    IdeaPreview
  }
})
export default class IdeaList extends Vue {
  @Prop({ type: Array })
  ideas!: Idea[];
}
</script>

<style scoped>
.idea-list__containr {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>