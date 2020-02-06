import Products from '../data/products';

export const state = () => ({
  name: 'Nuxt Market',
  products: Products,
  idCounter: Products.length
});

export const getters = {
  allProducts: (state) => state.products,
  product: (state) => (id) => {
    return state.products.find(product => product.id === id);
  },
  marketName: (state) => state.name,
  lastGeneretedId: (state) => state.idCounter
};

export const mutations = {
  add(state, product) {
    state.products.push(product);
  },
  remove(state, product) {
    state.products.splice(state.products.indexOf(product), 1);
  },
  incrementIdCounter(state) {
    state.idCounter++;
  }
};

export const actions = {
  addProduct({ getters, commit, dispatch }, product) {
    commit('incrementIdCounter');
    product.id = getters.lastGeneretedId
    commit('add', product);
    dispatch('cart/doSomething', {}, { root: true })
  },
  removeProduct({ commit }, product) {
    commit('remove', product);
  }
};
