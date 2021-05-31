<template>
  <div id="td-total">
    <Splitter class="mb-6" title="Total commande" />
    <div class="td-total p-5 mb-6 is-shadow">
      <div class="td-box">
        <div class="mb-3 is-flex is-justify-content-space-between">
          <span>Sous-totale</span>
          <div class="">{{ getSubTotal }}</div>
        </div>
        <div class="mb-3 is-flex is-justify-content-space-between">
          <span>Livraison</span>
          <div class="">{{ getShippingCost }}</div>
        </div>
        <div class="is-flex is-justify-content-space-between">
          <strong>TOTAL :</strong>
          <strong class="">{{ getTotal }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Splitter from '@/components/Splitter'

export default {
  name: 'total',
  props: ['order', 'products'],
  components: {
    Splitter,
  },

  data() {
    return {}
  },

  computed: {
    getSubTotal() {
      return this.products.map(p => p.price * p.quantity).reduce((a, b) => a + b)
    },

    getShippingCost() {
      if (this.order.shipping_cost == 0) {
        return 'GRATUIT'
      } else {
        return this.order.shipping_cost
      }
    },

    getTotal() {
      return this.getSubTotal + this.order.shipping_cost
    },
  },

  methods: {},
}
</script>

<style>
.td-total > .td-box {
  width: 220px;
  margin: 0 auto;
  font-size: 22px;
}
</style>
