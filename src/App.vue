<template>
  <div>
    <Navbar />
    <OrderTracking />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import OrderTracking from './components/OrderTracking'

export default {
  name: 'App',
  components: {
    Navbar,
    OrderTracking,
  },
}
</script>

<style></style>
