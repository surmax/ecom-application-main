<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><router-link to="/">Amcart</router-link></li>
      <li class="is-active"><a href="#" aria-current="page">Search</a></li>
    </ul>
  </nav>

  <div class="page-search">
    <div class="columns is-multiline">
      <div class="column is-10">
      
        <h1 class="title">Search</h1>

        <h2 class="is-size-3 has-text-grey">Search term: "{{ query }}"</h2>
      </div>

    </div>
  </div>
     
      <div class="col-md-8">

         <div class="row">
        
 
      <ProductBox
          v-for="product in products"
          v-bind:key="product.id"
          v-bind:product="product"/>
      
          </div>
          </div>
        

   
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
  name: 'SearchView',
  components: {
    ProductBox
  },
  data() {
    return {
      products: [],
      query: ''
    }
  },
  mounted() {
    document.title = 'Search | Amcart'

    let uri = window.location.search.substring(1)
    let params = new URLSearchParams(uri)

    if (params.get('query')) {
      this.query = params.get('query')

      this.performSearch()
    }
  },
  methods: {
    async performSearch() {
      this.$store.commit('setIsLoading', true)

      await axios
          .post('/api/v1/products/search', {'query': this.query})
          .then(response => {
            this.products = response.data
          })
          .catch(error => {
            console.log(error)
          })

      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>
