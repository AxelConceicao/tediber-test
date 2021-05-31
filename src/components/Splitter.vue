<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <div class="tb-border is-flex-grow-1"></div>
    <div class="tb-title is-flex is-align-items-center is-flex-direction-column">
      <h1>{{ title }}</h1>
      <img class="tb-zigzag" src="@/assets/img/zigzag.svg" alt="" />
    </div>
    <div class="tb-border is-flex-grow-1"></div>
  </div>
</template>

<script>
export default {
  name: 'splitter',

  props: {
    title: String,
  },

  data() {
    return {}
  },
}
</script>

<style>
.tb-border {
  height: 2px;
  border-top: 2px solid rgba(40, 45, 89, 0.75);
  margin-bottom: 1rem;
  min-width: 50px;
}

.tb-title {
  margin: auto 5rem;
  text-align: center;
}

.tb-title h1 {
  font-family: 'Gill Sans Std Light';
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

.tb-zigzag {
  height: 18px;
}

@media screen and (max-width: 1024px) {
  .tb-title {
    margin: auto 1rem;
  }
}
</style>
