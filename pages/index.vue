<template>
  <div class="app">
    <div class="page">
      <header class="header">
        <logo class="logo" />
        <h1 class="title">
          {{ marketName }}
        </h1>
      </header>
      <div class="container">
        <div class="products">
          <ul class="products__list">
            <product-item
              v-for="(product, index) in allProducts"
              :key="'product-item-' + index"
              :product="product"
            />
          </ul>
        </div>
      </div>
    </div>
    <market-dialog />
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex';

import Logo from '~/components/Logo.vue'
import ProductItem from '~/components/productItem';
import MarketDialog from '~/components/marketDialog';

export default {
  components: {
    Logo,
    ProductItem,
    MarketDialog
  },
  computed: {
    ...mapGetters('market', [
      'allProducts',
      'product',
      'marketName'
    ])
  }
}
</script>

<style lang="css" src="./index.css"></style>
