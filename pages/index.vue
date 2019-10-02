<template>
  <div class="home__nav">
    <div>
      <b-button pill variant="warning">Search ideas</b-button>
      <b-button pill variant="warning">Register new idea</b-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins/_breakpoints.scss";

.home__nav {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 10px;
    height: 80px;
    width: 300px;
  }
}
</style>
