<template>
  <div class="dialog">
    <h3 class="dialog__title">Market Dialog</h3>
    <form>
      <input
        v-model="name"
        class="input"
        type="text"
        name="product"
        placeholder="Name"
      />
      <input
        v-model="price"
        class="input"
        type="text"
        name="price"
        placeholder="Price (€/kg)"
      />
    </form>
    <button
      class="button"
      @click="processForm"
    >
      Add Product
    </button>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex';

export default {
  name: 'MarketDialog',
  data() {
    return {
      name: '',
      price: ''
    }
  },
  methods: {
    ...mapActions('market', [
      'addProduct'
    ]),
    processForm() {
      if (this.name === '' || this.price === '') return;

      this.addProduct({ name: this.name, price: this.price });
      this.clearFields();
    },
    clearFields() {
      this.name = '';
      this.price = '';
    }
  },
  created() {
    console.log(this.$store);
  }
}
</script>
