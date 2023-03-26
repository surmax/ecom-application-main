<template>
  <div>
    <transition-group name="fade" class="row" tag="div">
      <div v-for="item in CardArray" 
      class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3" :key="item.id">
          <div class="card">
            <img class="card-img-top" :src="item.thumbnail" alt="Card image cap">
            <div class="overlay">
              <button type="button" class="btn btn-outline-secondary btn-lg" @click="addtoCart(item)">Add +</button>
              <router-link to="/Info"><button type="button" class="btn btn-outline-secondary btn-lg" @click="sendInfo(item)">Info</button></router-link>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">Rs {{ item.price }}</p>
            </div>
          </div>
      </div>
    </transition-group>
  </div>

</template>



<script>
import itemBox from "@/components/ProductBox";
import axios from 'axios'
import { toast } from 'bulma-toast'

export default {

  name: "Card",
  components: {
    itemBox
  },
  data() {
    return {
    
        items: []
      ,
      item: this.initialItem
    }
  },
  // props: {
  //   initialItem: Object
  // },
   props: ['CardArray'],
  
  mounted() {
    this.getitem()
  },
  methods: {
    async getitem() {
      this.$store.commit('setIsLoading', true)

      const category_slug = this.$route.params.category_slug
      const item_slug = this.$route.params.item_slug

      await axios
          .get(`/api/v1/items/${category_slug}/${item_slug}`)
          .then(response => {
            this.item = response.data

            document.title = this.item.name + ' | Amcart'
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
        item: this.item,
        quantity: this.quantity
      }

      this.$store.commit('addToCart', item)

      toast({
        message: 'The item was added to cart',
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

<style>
/* transition Group style */
.fade-move {
  transition: transform 1s;
}
/* Card Style */
.card {
  transition: 500ms;
  position: relative;
  overflow: hidden;
}

.card img {
  z-index: 1;
  height: 25rem;
}

.card button {
  width: 140px;
  margin-bottom: 10px;
}

.card:hover img {
  filter: blur(4px);
}

.card:hover .overlay {
  opacity: 0.8;

}

.card .overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #232b34;
  opacity: 0;
  z-index: 100;
  transition: all 0.3s ease-in;
}

.card:hover, .card:active {
  transform: scaleY(1.1) scaleX(1.06);
  box-shadow: 0 14px 98px rgba(0, 0, 0, 0.25), 0 0px 60px rgba(0, 0, 0, 0.22);
}
</style>
