<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><router-link to="/">Amcart</router-link></li>
      <li><a href="#">Products</a></li>
      <li class="is-active"><a href="#" aria-current="page">{{ product.name }}</a></li>
    </ul>
  </nav>

<div class="page-product">
  <div class="columns is-multiline">
    <div class="column is-half">
      <figure class="product-image">
        <img v-bind:src="product.get_image">
      </figure>
    </div>

    <div class="column is-one-quarter">
      <div class="information is my-6 pb-6">
        <!-- <h1 class="subtitle">Product Details</h1> -->

        <h1 class="title">  </h1>

        <h2 class="title">{{ product.name }}</h2>

         

        <p style="font-size:20px">{{ product.description }}</p>

        <div class="information is my-2 pb-2">
        <!-- <h1 class="subtitle"><strong>Product Description</strong></h1> -->

        <h3 class="title"></h3>

        
      </div>
        <p style="font-size:30px"><strong>Price: </strong>Rs. {{ product.price }}</p>

        <div class="information is my-2 pb-2">
        <!-- <h1 class="subtitle"><strong>Product Description</strong></h1> -->

        <h3 class="title"></h3>
        </div>

        

      

      
      
        <div class="mb-3 d-flex">
                  <label for="option-sm" class="d-flex mr-4 mb-2">
                     <span class="d-inline-block mr-2" style="top:-1px; position: relative;"><input type="radio" id="option-sm" name="shop-sizes"></span> <span class="d-inline-block text-black">S</span>
                  </label>
                  <label for="option-md" class="d-flex mr-3 mb-3">
                     <span class="d-inline-block mr-2" style="top:-1px; position: relative;"><input type="radio" id="option-md" name="shop-sizes"></span> <span class="d-inline-block text-black">M</span>
                  </label>
                  <label for="option-lg" class="d-flex mr-3 mb-3">
                     <span class="d-inline-block mr-2" style="top:-1px; position: relative;"><input type="radio" id="option-lg" name="shop-sizes"></span> <span class="d-inline-block text-black">L</span>
                  </label>
                  <label for="option-xl" class="d-flex mr-3 mb-3">
                     <span class="d-inline-block mr-2" style="top:-1px; position: relative;"><input type="radio" id="option-xl" name="shop-sizes"></span> <span class="d-inline-block text-black">XL</span>
                  </label>
                  </div>

                  <stars :rate="90" :totalReviews="60"/>
                 

      </div>
      <div class="field has-addons mt-1">
        <div class="control">
          <input type="number" class="input" min="1" v-model="quantity">
        </div>

        <div class="control">
          <a class="button is-primary" @click="addToCart()">Add to cart</a>
        </div>

      
  
     

      </div>

      <div class="columns is-multiline">
        <h1 style="color: white;" text-white>helllo124</h1>
        <br>
        <h1 style="color: white;" text-white>helllo124</h1>
        <h1 style="color: white;" text-white>helllo124</h1>
      </div>
 

    </div>

    
  </div>


 
  
</div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'
import stars from './Stars';

export default {
  name: "ProductView",
  components: {
   
    stars,
   
  },

  data() {
    return {
      product: {},
      quantity: 1
    }
  },
  mounted() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      this.$store.commit('setIsLoading', true)

      const category_slug = this.$route.params.category_slug
      const product_slug = this.$route.params.product_slug

      await axios
          .get(`/api/v1/products/${category_slug}/${product_slug}`)
          .then(response => {
            this.product = response.data

            document.title = this.product.name + ' | Amcart'
          })
          .catch(error => {
            console.log(error)
          })

      this.$store.commit('setIsLoading', false)
    },
    addToCart() {
      if (isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1
      }

      const item = {
        product: this.product,
        quantity: this.quantity
      }

      this.$store.commit('addToCart', item)

      toast({
        message: 'The product was added to cart',
        type: 'is-success',
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: 'bottom-right',
      })
    }
  }
}
</script>

<style scoped>
 
 img {
  height:500px;
  width:40%; 
  margin-left: 45%;
    }
</style>