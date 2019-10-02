<template>
  <div class="registration__container">
    <b-form @submit="onSubmit">
      <b-form-group label="Title:" label-for="title">
        <b-form-input id="title" v-model="form.title" placeholder="Enter title"></b-form-input>
      </b-form-group>

      <b-form-group label="Author:" label-for="author">
        <b-form-input id="author" v-model="form.author" placeholder="Enter author"></b-form-input>
      </b-form-group>

      <b-form-group label="Preview text:" label-for="previewText">
        <b-form-input id="previewText" v-model="form.previewText" placeholder="Enter preview text"></b-form-input>
      </b-form-group>

      <b-form-textarea
        id="content"
        v-model="form.content"
        placeholder="Enter content..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <div class="text-center mt-2">
        <b-button type="submit" variant="primary" :disabled="!isValid">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Idea } from "@/types/idea";

@Component({})
export default class RegistrationForm extends Vue {
  form = {} as Idea;

  created() {
    this.form = {} as Idea;
  }

  onSubmit() {
    console.log({ ...this.form });
    this.$nuxt.$router.push("/");
  }

  get isValid(): boolean {
    return (
      !!this.form &&
      !!this.form.author &&
      !!this.form.title &&
      !!this.form.previewText &&
      !!this.form.content
    );
  }
}
</script>

<style scoped>
.registration__container {
  max-width: 600px;
  margin: auto;
}
</style>