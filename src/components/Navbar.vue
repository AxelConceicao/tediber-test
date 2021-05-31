<template>
  <div class="tb-navbar is-flex is-align-items-center">
    <div class="">
      <a class="mx-4" href="/">
        <img class="tb-logo" src="@/assets/img/logo_tediber.svg" alt="logo" />
      </a>
    </div>
    <div class="is-flex is-flex-grow-1 is-justify-content-space-evenly">
      <div
        @click="!isProductListOpen ? (isProductListOpen = true) : (isProductListOpen = false)"
        class="tb-navitem tb-list is-flex is-align-items-center"
      >
        Nos Produits
        <font-awesome-icon class="ml-2" :icon="!isProductListOpen ? 'chevron-down' : 'chevron-up'" />
      </div>
      <a class="tb-navitem" href="/">
        Le Concept
      </a>
      <a class="tb-navitem" href="/">
        Avis
      </a>
    </div>
    <div class="">
      <a href="/">
        <img class="tb-logo" src="@/assets/img/logo_ours_noel.svg" alt="logo" />
      </a>
    </div>
    <div class="is-flex is-flex-grow-1 is-justify-content-space-evenly">
      <a class="tb-navitem" href="/">
        Pub TV
      </a>
      <a class="tb-navitem" href="/">
        Mon Compte
      </a>
      <a class="tb-navitem" href="/">
        Mag
      </a>
      <a class="tb-navitem" href="/">
        Contactez-nous
      </a>
    </div>
    <div class="">
      <a class="mx-4" href="/">
        <img class="tb-logo" src="@/assets/img/bracket.svg" alt="logo" />
      </a>
    </div>
    <div v-if="isProductListOpen" class="tb-productlist"></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      isProductListOpen: false,
      productList: ['Catégorie A', 'Catégorie B', 'Catégorie C'],
    }
  },

  methods: {},
}
</script>

<style>
.tb-navbar {
  height: 80px;
  box-shadow: 0 0 0.8rem 0 rgb(127 124 137 / 65%);
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

.tb-logo {
  height: 4rem;
}

.tb-productlist {
  height: 108px;
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #fff;
  border: thin solid rgba(40, 45, 89, 0.25);
  box-shadow: 0 0.3rem 0.3rem 0 rgb(127 124 137 / 40%);
}
</style>
