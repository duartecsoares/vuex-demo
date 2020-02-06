<template>
  <li class="product-item">
    {{ product.id }} - {{ product.name }} - € {{ product.price }} /kg
    <button
      class="product-item__remove"
      @click="removeProduct(product)"
    >
      Delete
    </button>
  </li>
</template>

<script>
import {
  mapActions
} from 'vuex';

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('market', [
      'removeProduct'
    ])
  }
}
</script>
