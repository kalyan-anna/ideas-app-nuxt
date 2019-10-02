<template>
  <div>
    <IdeaDetail v-for="idea in ideas" :key="idea.id" :idea="idea"></IdeaDetail>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Idea } from "../../models/idea";
import IdeaDetail from "./IdeaDetail.vue";

@Component({
  components: {
    IdeaDetail
  }
})
export default class IdeaList extends Vue {
  @Prop({ type: Array })
  ideas!: Idea[];
}
</script>
