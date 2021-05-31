<template>
  <div id="td-shipping">
    <Splitter class="mb-6" title="Informations sur la livraison" />
    <div class="td-shipping columns is-desktop mb-6 is-shadow">
      <div class="column tb-borderY m-5">
        <strong>ADRESSE DE COLLECTE</strong>
        <div class="mt-4">{{ order.shipping_address.address1 }}</div>
        <div class="">{{ order.shipping_address.address2 }}</div>
        <div class="">{{ order.shipping_address.city }}</div>
        <div class="">{{ order.shipping_address.zip_code }}</div>
        <div class="">{{ order.shipping_address.country }}</div>
      </div>
      <div class="column tb-borderY m-5">
        <strong>VOS COORDONNÉES</strong>
        <div class="mt-4">{{ order.shipping_contact.firstname }} {{ order.shipping_contact.lastname }}</div>
        <div class="">{{ order.shipping_contact.mobile_number }}</div>
      </div>
      <div class="column tb-borderY m-5">
        <strong>LIVRAISON ESTIMÉE</strong>
        <div class="mt-4">{{ formatDate(order.estimed_date) }}</div>
      </div>
      <div class="column m-5">
        <strong>MODE DE LIVRAISON</strong>
        <div class="mt-4">{{ order.delivery_method }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Splitter from '@/components/Splitter'

export default {
  name: 'shipping',
  props: ['order'],
  components: {
    Splitter,
  },

  data() {
    return {
      days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
    }
  },

  methods: {
    formatDate(date) {
      return (
        this.days[date.getDay()] +
        ' ' +
        date.toLocaleString('fr', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      )
    },
  },
}
</script>

<style>
.td-shipping > .tb-borderY {
  border-right: 1px solid rgba(40, 45, 89, 0.5);
}

@media screen and (max-width: 1200px) {
  #tb-shipping .columns.is-desktop {
    display: block;
  }

  .td-shipping {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .td-shipping > .tb-borderY {
    border-right: none;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(40, 45, 89, 0.5);
  }
}
</style>
