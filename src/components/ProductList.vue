<template>
  <div class="d-flex align-item-stretch flex-wrap">
      <product-card v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from "./ProductCard"
import {mapState, mapActions} from 'vuex'
export default {
    components:{
        ProductCard
    },
    computed:{
        ...mapState(['products']),
        // products(){
        //     return this.$store.state.products;
        // }
    },

    mounted(){
        this.getProducts();
        // this.$store.dispatch('getProducts')
    },

    methods:{
        ...mapActions(['getProducts'])
    }
}
</script>

<style>

</style>