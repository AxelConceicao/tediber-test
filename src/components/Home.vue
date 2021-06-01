<template>
  <div>
    <Splitter title="Commandes en cours" class="mb-6" />
    <div class="tb-orders">
      <div v-for="order in orders" :key="order.id" class="">
        <router-link :to="'/track_my_order/' + order.id">
          <div class="tb-ordercard m-4 p-4 is-shadow">
            <div class="mb-4 is-flex is-justify-content-space-between">
              <span>
                N° de commande : <strong class="td-orderid">{{ order.id }}</strong>
              </span>
              <strong class="tb-orderstatus">{{ getOrderStatus(order.order_status) }}</strong>
            </div>
            <div class="mb-2">{{ getNumberOfProducts(order.id) }}</div>
            <div class="is-flex">
              <div class="mr-2" v-for="product in getProducts(order.id)" :key="product.id">
                <img class="tb-previewproduct" :src="require('@/assets/img/products/' + product.thumbnail)" :alt="product.name" />
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Splitter from '@/components/Splitter'
import Orders from '@/assets/json/orders.json'
import Products from '@/assets/json/products.json'

export default {
  name: 'home',
  components: {
    Splitter,
  },

  data() {
    return {
      orders: Orders,
      products: Products,
    }
  },

  computed: {
    getNumberOfProducts() {
      return id => {
        var nb = this.getProducts(id)
          .map(p => p.quantity)
          .reduce((a, b) => a + b)
        if (nb <= 1) {
          return nb + ' Article :'
        } else {
          return nb + ' Articles :'
        }
      }
    },

    getOrderStatus() {
      return order => {
        if (order.delivered) {
          return 'Livré'
        } else if (order.in_transit) {
          return 'En transit'
        } else if (order.shipped) {
          return 'Expédié'
        } else if (order.packed) {
          return 'Prêt à envoi'
        } else {
          return 'Commande enregistré'
        }
      }
    },
  },

  methods: {
    getProducts(id) {
      return this.orders
        .find(order => order.id == id)
        .products.map(p =>
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
.tb-previewproduct {
  height: 80px;
}

.tb-orders {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.tb-ordercard {
  color: #282d59;
  font-size: 20px;
  width: 600px;
  transition: all 0.25s ease;
}

.tb-ordercard:hover .td-orderid {
  text-decoration: underline;
}

.tb-orderstatus {
  color: green;
}

a:-webkit-any-link {
  text-decoration: none !important;
}

.tb-ordercard:hover {
  transform: translateY(-20px);
  transition: all 0.25s ease;
}

@media screen and (max-width: 800px) {
  .tb-ordercard {
    min-width: 320px;
    width: inherit;
  }
}
</style>
