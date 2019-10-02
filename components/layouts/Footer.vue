<template>
  <footer class="layout__footer">
    <div>Authour: Kalyan Annamalai</div>
    <div>
      Contact
      <a href="mailto:kalyan.anna@yahoo.com">kalyan.anna@yahoo.com</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.layout__footer {
  max-height: 120px;
  width: 100%;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
}
</style>