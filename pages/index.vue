<template>
  <div class="home__nav">
    <div>
      <b-link to="/search" class="btn btn-warning rounded-pill">Search ideas</b-link>
      <b-link to="/new" class="btn btn-warning rounded-pill">Register new idea</b-link>
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

  .btn {
    margin: 10px;
    height: 100px;
    line-height: 100px;
    width: 300px;
    color: #000000;
  }
}
</style>
