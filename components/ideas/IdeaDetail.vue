<template>
  <div>
    <b-jumbotron :header="idea.title" :lead="idea.previewText">
      <p>Authour: {{idea.author}}</p>
      <div>{{ idea.content }}</div>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Idea } from "../../models/idea";

@Component({})
export default class IdeaDetail extends Vue {
  @Prop({ type: Object })
  public idea!: Idea;
}
</script>
