<template>
  <div id="td-payment">
    <Splitter class="mb-6" title="Informations de paiement" />
    <div class="td-payment p-4 mb-6 is-shadow is-flex is-align-items-center">
      <img :src="require('@/assets/img/visa.jpg')" />
      <span class="ml-4">{{ order.payment_method }}</span>
    </div>
  </div>
</template>

<script>
import Splitter from '@/components/Splitter'

export default {
  name: 'payment',
  props: ['order'],
  components: {
    Splitter,
  },

  data() {
    return {}
  },

  methods: {},
}
</script>

<style>
.td-payment > img {
  height: 50px;
}
</style>
