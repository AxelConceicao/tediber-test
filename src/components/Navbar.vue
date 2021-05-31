<template>
  <div id="tb-navbar" class="is-flex is-align-items-center is-shadow">
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
      <router-link class="tb-navitem" to="/">
        Contactez-nous
      </router-link>
    </div>
    <div class="">
      <router-link class="mx-4" to="/">
        <img class="tb-bracket" src="@/assets/img/bracket.svg" alt="logo" />
      </router-link>
    </div>
    <div id="tb-grow" ref="tb-productlist" class="tb-productlist" v-click-outside="handleClickOutSide">
      <div>
        <h1>Liste des produits</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Navbar',

  data() {
    return {
      isProductListOpen: false,
      productList: ['Catégorie A', 'Catégorie B', 'Catégorie C'],
    }
  },

  watch: {
    isProductListOpen: {
      handler() {
        this.handleMenuFading()
      },
    },
  },

  directives: {
    ClickOutside,
  },

  methods: {
    handleClickOutSide() {
      this.isProductListOpen = false
      this.$refs['tb-productlist'].style.height = 0
      this.$refs['tb-productlist'].style.border = 'none'
    },

    handleMenuFading() {
      var growDiv = this.$refs['tb-productlist']
      if (growDiv.clientHeight) {
        growDiv.style.height = 0
        growDiv.style.border = 'none'
      } else {
        growDiv.style.height = growDiv.scrollHeight + 'px'
          growDiv.style.border = 'thin solid rgba(40, 45, 89, 0.25)'
      }
    },
  },
}
</script>

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
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(127 124 137 / 40%);
}

@media screen and (max-width: 1200px) {
  #tb-navbar .is-desktop {
    display: none;
  }
}
</style>
