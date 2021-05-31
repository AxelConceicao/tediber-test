<template>
  <div id="tb-trackmyorder">
    <div v-if="this.order">
      <Splitter class="mb-6" title="Suivi de commande" />
      <div class="mb-4 columns is-desktop is-justify-content-space-between">
        <div class="column mb-5">
          <div class="is-flex is-flex-direction-column">
            <span class="mb-4">
              N° de commande : <strong class="ml-1">{{ order.id }}</strong>
            </span>
            <span class="mb-4">
              Date de commande : <strong class="ml-1">{{ formatDate(order.ordered_date) }}</strong>
            </span>
            <span class="mb-4">
              Date d’expédition : <strong class="ml-1">{{ formatDate(order.shipped_date) }}</strong>
            </span>
            <div class="tb-collapse mt-4 py-3">
              <div
                @click="isTrackOrderOpen ? (isTrackOrderOpen = false) : (isTrackOrderOpen = true)"
                class="tb-header mx-2 is-flex is-justify-content-space-between"
              >
                <span>Suivi de commande</span>
                <font-awesome-icon class="ml-2" :icon="!isTrackOrderOpen ? 'chevron-down' : 'chevron-up'" />
              </div>
              <div id="tb-grow" ref="tb-trackorder">
                <div class="mx-2 my-5">
                  <OrderStatus :order="order" />
                </div>
              </div>
            </div>
            <EmptyCollapse title="Informations sur les retours" />
          </div>
        </div>
        <div class="column">
          <div class="is-flex is-flex-direction-column">
            <span class="mb-3">ARTICLES ({{ getNumberOfProducts }})</span>
            <div class="tb-article is-shadow p-3 mb-5" v-for="product in getProducts()" :key="product.id">
              <div class="is-flex">
                <div class="">
                  <img :src="require('@/assets/img/products/' + product.thumbnail)" :alt="product.name" />
                </div>
                <div class="ml-4 is-flex is-flex-direction-column is-justify-content-space-between">
                  <h1 class="name m-0">{{ product.name }}</h1>
                  <h1 class="price m-0">{{ product.price }} €</h1>
                  <div>
                    <div>TAILLE : {{ product.width }} x {{ product.height }} cm</div>
                    <div>QTÉ : {{ product.quantity }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Shipping :order="order" />
      <Payment :order="order" />
      <Total :order="order" :products="getProducts()" />
      <Help />
    </div>
    <div v-else>
      <h1>Impossible de trouver la commande "{{ $route.params.id }}"</h1>
    </div>
  </div>
</template>

<script>
import Splitter from '@/components/Splitter'
import OrderStatus from '@/components/OrderStatus'
import EmptyCollapse from '@/components/EmptyCollapse'
import Shipping from '@/components/Shipping'
import Payment from '@/components/Payment'
import Total from '@/components/Total'
import Help from '@/components/Help'
import Orders from '@/assets/json/orders.json'
import Products from '@/assets/json/products.json'

export default {
  name: 'orderTracking',

  props: {
    id: Number,
  },

  components: {
    Splitter,
    OrderStatus,
    EmptyCollapse,
    Shipping,
    Payment,
    Total,
    Help,
  },

  data() {
    return {
      orders: Orders,
      products: Products,
      order: undefined,
      isTrackOrderOpen: false,
    }
  },

  computed: {
    getNumberOfProducts() {
      return this.getProducts()
        .map(p => p.quantity)
        .reduce((a, b) => a + b)
    },
  },

  watch: {
    isTrackOrderOpen: {
      handler() {
        var growDiv = this.$refs['tb-trackorder']
        if (growDiv.clientHeight) {
          growDiv.style.height = 0
        } else {
          growDiv.style.height = growDiv.scrollHeight + 'px'
        }
      },
    },
  },

  mounted() {
    this.order = this.orders.find(order => order.id == this.$route.params.id)
    this.order.ordered_date = new Date(this.order.ordered_date)
    this.order.shipped_date = new Date(this.order.shipped_date)
    this.order.estimed_date = new Date(this.order.estimed_date)
    // console.log(this.getProducts())
    this.$nextTick(() => {
      this.isTrackOrderOpen = true
    })
  },

  methods: {
    formatDate(date) {
      return date.toLocaleString('fr', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },

    getProducts() {
      return this.order.products.map(p =>
        this.products.find(product => {
          if (p.id == product.id) {
            product.quantity = p.quantity
            return product
          }
        })
      )
    },
  },
}
</script>

<style>
#tb-trackmyorder {
  font-size: 20px;
}

.tb-article {
  height: 140px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.tb-article .name,
.tb-article .price {
  font-size: 24px;
}

.tb-article .name {
  text-transform: uppercase;
}

.tb-article img {
  height: 140px;
}

.tb-article .price {
  font-family: 'Gill Sans Std';
}

.tb-article:hover {
  transform: translateX(-20px);
  transition: all 0.15s ease;
}

.tb-article:hover .name {
  text-decoration: underline;
}

@media screen and (max-width: 1200px) {
  #tb-trackmyorder .columns.is-desktop {
    display: block;
  }
}

@media screen and (max-width: 800px) {
}

@media screen and (max-width: 600px) {
  .tb-article .name {
    font-size: 20px;
  }

  .tb-article {
    font-size: 16px;
  }
}
</style>
