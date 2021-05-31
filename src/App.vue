<template>
  <div id="app">
    <Navbar />
    <router-view class="tb-wrap p-4" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar,
  },
}
</script>

<style>
.tb-wrap {
  max-width: 1400px;
  margin: 10px auto;
}
</style>
