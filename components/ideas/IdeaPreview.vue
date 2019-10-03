<template>
  <div>
    <article class="idea-preview__container">
      <div class="idea-preview__content">
        <h1>{{ idea.title }}</h1>
        <p>{{ idea.previewText }}</p>
        <div>Author: {{ idea.author }}</div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Idea } from "../../models/idea";

@Component({})
export default class IdeaPreview extends Vue {
  @Prop({ type: Object })
  public idea!: Idea;
}
</script>

<style scoped>
.idea-preview__container {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

.idea-preview__content {
  padding: 10px;
  text-align: center;
}
</style>