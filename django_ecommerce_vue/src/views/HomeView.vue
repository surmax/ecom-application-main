<template>
   <div class="home">
      <div class="sec1">

         <div id="app1">
            <Slider />
           
         </div>

      </div>

   </div>

   <div class="shop">





      <div class="site-section">



         <div class="title mb-5">
            <h2 class="is-size-2 has-text-centered has-text-black mb-4">Best Seller Products</h2>

         </div>



         <div class="container">

            <div class="row">
               <div class="col-md-9s order-1">

                  <div class="row align">
                     <!-- <div class="col-md-12 mb-5"> -->

                 <ProductBox 
                 v-for="product in latestProducts" 
                 v-bind:key="product.id" 
                 v-bind:product="product" />
                   
                </div>

                


               </div>

               <div class="c1">
                  <div class="border p-4 rounded mb-4">
                     <h3 class="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                     <ul class="list-unstyled mb-0">
                        <li class="mb-1"><router-link to="/men" class="d-flex"><span>Men</span> <span
                                 class="text-black ml-auto">(25)</span></router-link></li>
                        <li class="mb-1"><router-link to="/women" class="d-flex"><span>Women</span> <span
                                 class="text-black ml-auto">(25)</span></router-link></li>

                     </ul>
                  </div>

                  <div class="border p-4 rounded mb-4">
                     <div class="mb-4">
                        <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                        <div id="slider-range" class="border-primary"></div>
                        <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white"
                           disabled="" />
                     </div>

                     <div class="mb-4">
                        <h3 class="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                        <label for="s_sm" class="d-flex">
                           <input type="checkbox" id="s_sm" class="mr-2 mt-1"> <span class="text-black">Small (20)</span>
                        </label>
                        <label for="s_md" class="d-flex">
                           <input type="checkbox" id="s_md" class="mr-2 mt-1"> <span class="text-black">Medium (25)</span>
                        </label>
                        <label for="s_lg" class="d-flex">
                           <input type="checkbox" id="s_lg" class="mr-2 mt-1"> <span class="text-black">Large (25)</span>
                        </label>
                     </div>

                     <div class="mb-4">
                        <h3 class="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                        <a href="#" class="d-flex color-item align-items-center">
                           <span class="bg-danger color d-inline-block rounded-circle mr-2"></span> <span
                              class="text-black">Red (2)</span>
                        </a>
                        <a href="#" class="d-flex color-item align-items-center">
                           <span class="bg-success color d-inline-block rounded-circle mr-2"></span> <span
                              class="text-black">Green (2)</span>
                        </a>
                        <a href="#" class="d-flex color-item align-items-center">
                           <span class="bg-info color d-inline-block rounded-circle mr-2"></span> <router-link
                              to="/search?query=blue"><span class="text-black">Blue (3)</span></router-link>
                        </a>
                        <a href="#" class="d-flex color-item align-items-center">
                           <span class="bg-primary color d-inline-block rounded-circle mr-2"></span> <span
                              class="text-black">Purple (1)</span>
                        </a>
                     </div>

                  </div>
               </div>
            </div>


            <!-- <div class="row mb-4">
               <div class="col-md-12 text-center">

                  <div class="site-block-27">
                     <ul>


                        <li class="active"><span>1</span></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>

                        <li><a href="#">&gt;</a></li>
                     </ul>
                  </div>

               </div>
            </div> -->


         </div>
      </div>



   </div>
</template>

<script>
import axios from 'axios'
import Slider from '@/components/Slider'
import ProductBox from "@/components/ProductBox";

export default {
   name: 'HomeView',

   created() {
      const authInfo = JSON.parse(localStorage.getItem('authToken'));
      if (authInfo) {
         this.customerName = authInfo.account.idToken.given_name;
         this.authenticated = true
      }
   },

   data() {
      return {
         latestProducts: [],
         customerName: '',
         authenticated: false
      }
   },
   components: {
      Slider,
      ProductBox
   },
   mounted() {
      this.getLatestProducts()

      document.title = 'Home | Amcart'
   },
   methods: {
      async getLatestProducts() {
         this.$store.commit('setIsLoading', true)

         await axios
            .get('/api/v1/latest-products/'
            )
            .then(response => {
               this.latestProducts = response.data
            })
            .catch(error => {
               console.log(error)
            })
         this.$store.commit('setIsLoading', false)
      }
   },

}
</script>

<style scoped>
.image {

   margin-top: -0.25rem;
   margin-left: -0.25rem;
   margin-right: -0.25rem;


}

.col-md-9s {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 80%;
    max-width: 75%;
   } 


.container {

   margin-top: 2%;
   margin-left: 4%;

}

.row {
   margin-left: 10%;
   max-width: max-content;
  
}
</style>
