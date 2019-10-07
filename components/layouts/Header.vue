<template>
  <header class="layout__header">
    <h1 class="layout__header__title">
      <span style="color: DarkBlue">I</span>
      <span style="color: FireBrick">D</span>
      <span style="color: GoldenRod">E</span>
      <span style="color: DarkBlue">A</span>
      <span style="color: FireBrick">S</span>
      <span style="color: GoldenRod">.</span>
      <span style="color: DarkBlue">.</span>
      <span style="color: FireBrick">.</span>
    </h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.layout__header {
  height: 120px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  background: radial-gradient(black 3px, transparent 4px),
    radial-gradient(black 3px, transparent 4px),
    linear-gradient(#fff 4px, transparent 0),
    linear-gradient(
      45deg,
      transparent 74px,
      transparent 75px,
      #a4a4a4 75px,
      #a4a4a4 76px,
      transparent 77px,
      transparent 109px
    ),
    linear-gradient(
      -45deg,
      transparent 75px,
      transparent 76px,
      #a4a4a4 76px,
      #a4a4a4 77px,
      transparent 78px,
      transparent 109px
    ),
    #fff;
  background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  border-bottom: 1px dashed black;
  background-color: #f0f0f0;
}

.layout__header__title {
  font-size: 3.8rem;
  font-family: "Mansalva", cursive;
}
</style>