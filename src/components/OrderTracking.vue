<template>
  <div class="tb-wrap">
    <Header title="Suivi de commande" />
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'orderTracking',

  components: {
    Header,
  },

  data() {
    return {}
  },
}
</script>

<style>
.tb-wrap {
  max-width: 1200px;
  margin: 20px auto;
}
</style>
