<template>
  <div>
    <div v-if="!isMobile" id="tb-navbar" class="is-flex is-align-items-center is-shadow">
      <div class="">
        <router-link class="mx-4" to="/">
          <img class="tb-logo" src="@/assets/img/logo_tediber.svg" alt="logo" />
        </router-link>
      </div>
      <div class="is-flex is-flex-grow-1 is-justify-content-space-evenly">
        <div
          @click="!isProductListOpen ? (isProductListOpen = true) : (isProductListOpen = false)"
          class="tb-navitem tb-list is-flex is-align-items-center"
        >
          Nos Produits
          <font-awesome-icon class="ml-2" :icon="!isProductListOpen ? 'chevron-down' : 'chevron-up'" />
        </div>
        <router-link class="tb-navitem is-desktop" to="/">
          Le Concept
        </router-link>
        <router-link class="tb-navitem is-desktop" to="/">
          Avis
        </router-link>
      </div>
      <div class="">
        <router-link to="/">
          <img class="tb-bear" src="@/assets/img/logo_ours_noel.svg" alt="logo" />
        </router-link>
      </div>
      <div class="is-flex is-flex-grow-1 is-justify-content-space-evenly">
        <router-link class="tb-navitem is-desktop" to="/">
          Pub TV
        </router-link>
        <router-link class="tb-navitem" to="/">
          Mon Compte
        </router-link>
        <router-link class="tb-navitem is-desktop" to="/">
          Mag
        </router-link>
        <router-link class="tb-navitem is-desktop" to="/">
          Contactez-nous
        </router-link>
      </div>
      <div class="">
        <router-link class="mx-4" to="/">
          <img class="tb-bracket" src="@/assets/img/bracket.svg" alt="logo" />
        </router-link>
      </div>
      <div id="tb-grow" ref="tb-productlist" class="tb-productlist" v-click-outside="handleClickOutSideProductList">
        <div class="p-4 is-flex">
          <div class="mr-5 tb-productlistitem is-flex is-flex-direction-column" v-for="product in products" :key="product.id">
            <div class="is-flex is-justify-content-center">
              <img class="" :src="require('@/assets/img/products/' + product.thumbnail)" :alt="product.name" />
            </div>
            <span class="mt-2">{{ product.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="tb-mobilenavbar p-2 px-4 is-shadow is-flex is-justify-content-space-between">
        <font-awesome-icon @click="!isMenuOpen ? (isMenuOpen = true) : (isMenuOpen = false)" :icon="['fas', 'bars']" />
        <router-link to="/">
          <img class="tb-mobilelogo" src="@/assets/img/logo_tediber.svg" alt="logo" />
        </router-link>
        <router-link to="/">
          <img class="tb-mobilelogo" src="@/assets/img/bracket.svg" alt="logo" />
        </router-link>
      </div>
      <div id="tb-grow" ref="tb-menu" class="tb-menu" v-click-outside="handleClickOutSideMenu">
        <div class="p-4 is-flex is-flex-direction-column">
          <router-link class="tb-navitem is-desktop" to="/">
            Nos Produits
          </router-link>
          <router-link class="tb-navitem is-desktop" to="/">
            Le Concept
          </router-link>
          <router-link class="tb-navitem is-desktop" to="/">
            Avis
          </router-link>
          <router-link class="tb-navitem is-desktop" to="/">
            Pub TV
          </router-link>
          <router-link class="tb-navitem" to="/">
            Mon Compte
          </router-link>
          <router-link class="tb-navitem is-desktop" to="/">
            Mag
          </router-link>
          <router-link class="tb-navitem is-desktop" to="/">
            Contactez-nous
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import Products from '@/assets/json/products.json'

export default {
  name: 'Navbar',

  data() {
    return {
      isProductListOpen: false,
      isMenuOpen: false,
      productList: ['Catégorie A', 'Catégorie B', 'Catégorie C'],
      products: Products,
      isMobile: false,
    }
  },

  watch: {
    isProductListOpen: {
      handler() {
        this.handleRef('tb-productlist')
      },
    },

    isMenuOpen: {
      handler() {
        this.handleRef('tb-menu')
      },
    },
  },

  directives: {
    ClickOutside,
  },

  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 800
    },

    handleClickOutSideProductList() {
      this.isProductListOpen = false
      this.$refs['tb-productlist'].style.height = 0
    },

    handleClickOutSideMenu() {
      this.isMenuOpen = false
      this.$refs['tb-menu'].style.height = 0
    },

    handleRef(ref) {
      var growDiv = this.$refs[ref]
      if (growDiv.clientHeight) {
        growDiv.style.height = 0
      } else {
        growDiv.style.height = growDiv.scrollHeight + 'px'
      }
    },
  },
}
</script>

<style>
.tb-mobilenavbar {
  height: 50px;
}

.tb-mobilenavbar > svg {
  width: 36px !important;
  height: 36px !important;
  margin: auto 0;
  cursor: pointer;
}

.tb-mobilelogo {
  height: 50px;
}

.tb-menu {
  z-index: 1;
  width: 100%;
  position: absolute;
  top: 66px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(127 124 137 / 40%);
}
</style>

<style>
#tb-navbar {
  height: 80px;
}

.tb-navitem {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: inherit;
  padding: 8px;
  font-weight: 700;
  user-select: none;
  transition: all 0.25s ease-out;
  white-space: nowrap;
}

.tb-navitem:hover.tb-list svg,
.tb-navitem:hover {
  color: #fab200;
}

.tb-navitem.tb-list {
  cursor: pointer;
}

.tb-navitem.tb-list svg {
  color: rgba(40, 45, 89, 0.5);
  transition: all 0.25s ease-out;
}
.tb-bracket,
.tb-bear,
.tb-logo {
  height: 4rem;
  transition: all 0.5s ease;
}

.tb-logo:hover {
  transform: scale(1.2, 1.2);
  transition: all 0.5s ease;
}

.tb-bear:hover {
  transform: rotate(1turn);
  transition: all 0.5s ease;
}

.tb-bracket:hover {
  transform: scale(0.8);
  transition: all 0.5s ease;
}

.tb-productlist {
  z-index: 1;
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(127 124 137 / 40%);
}

.tb-productlistitem img:hover {
  transform: rotate(0.01turn);
  transition: all 0.2s ease;
}

.tb-productlistitem img {
  transition: all 0.2s ease;
  width: 150px;
  cursor: pointer;
}

.tb-productlistitem span {
  font-size: 16px;
  text-justify: center;
}

.tb-productlistitem:hover span {
  text-decoration: underline;
}

@media screen and (max-width: 1200px) {
  #tb-navbar .is-desktop {
    display: none;
  }
}
</style>
