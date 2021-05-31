<template>
  <div>
    <Splitter title="Commandes en cours" />
    <div v-for="order in orders" :key="order.id">
      <h1>
        <router-link :to="'/track_my_order/' + order.id">{{ order.id }}</router-link>
      </h1>
    </div>
  </div>
</template>

<script>
import Splitter from '@/components/Splitter'
import Orders from '@/assets/json/orders.json'

export default {
  name: 'home',
  components: {
    Splitter,
  },

  data() {
    return {
      orders: Orders,
    }
  },
}
</script>

<style></style>
