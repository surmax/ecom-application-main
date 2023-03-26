<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="../public/boutique-logo.png" type="image" alt="logo">
          <strong style="padding-left: 5px"> AMCART</strong>
        </router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
        <div class="navbar-start">


          <div class="navbar-item">
            <form method="get" action="/search">
              <div class="field has-addons">
                <div class="control has-icons-left">
                  <input type="text is-size-4" class="input" placeholder="Search products..." name="query">
                  <span class="icon is-left " id="search-button-navbar" data-v-41458b80=''>
                  <svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                      viewBox="0 0 16 16" data-v-41458b80="">
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        data-v-41458b80=""></path>
                    </svg>
                  </span>

                </div>
              </div>
            </form>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-size-5">
              Categories
            </a>
            <div class="navbar-dropdown">
              <router-link to="/products" class="navbar-item is-size-6">All Products</router-link>
              <router-link to="/men" class="navbar-item is-size-6">Men</router-link>
              <router-link to="/women" class="navbar-item is-size-6">Women</router-link>
              <hr class="navbar-divider">
              <router-link to="/about-me" class="navbar-item is-size-6">Contact</router-link>
            </div>
          </div>

        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">

              <div class="navbar-item">
                <router-link to="/cart" class="button is-primary is-size-5">

                  <!-- <span>Cart </span> 
                <span class="icon"><i class="fas fa-shopping-cart"></i></span> -->
                  Cart
                </router-link>
              </div>



              <button @click="executeSignOutOrSignIn()" class="button is-primary is-size-5">{{ isAuthenticated ? ('Logout '
                + customerName + '! ') : 'Login' }}</button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="is-loading-bar has-text-centered" v-bind:class="{ 'is-loading': $store.state.isLoading }">
      <div class="lds-dual-ring"></div>
    </div>

    <div class="section">
      <router-view />
    </div>

    <div class="site-wrap">
      <Newsletter/>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as Msal from 'msal';
import Footer from './components/Footer';
import Newsletter from '@/components/Newsletter.vue'

export default {
  created() {

    // Check if the user is authenticated by looking for the authentication information in local storage
    const authInfo = JSON.parse(localStorage.getItem('authToken'))
    if (authInfo) {
      this.isAuthenticated = true;
      this.user = authInfo.account;
      this.name = this.user.idToken.given_name;
      this.status = 'Logout';
      this.customerName = authInfo.account.idToken.given_name;
    } else {
      // If the user is not authenticated and there is no user account in MSAL, update the state accordingly
      this.isAuthenticated = false;
      this.status = 'Log In/Sign Up';
    }
  },



  data() {
    return {
      showMobileMenu: false,
      isAuthenticated: false,
      user: null,
      msalInstance: null,
      status: null,
      name: null,
      cart: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token
    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  },
  components: {

    'my-footer': Footer,
    Newsletter
  },
  mounted() {
    this.cart = this.$store.state.cart
  },
  methods: {
    async executeSignOutOrSignIn() {
      const msalConfig = {
        auth: {
          clientId: '129b8bc7-de59-4904-bad3-1268f299e8d0',
          redirectUri: 'http://localhost:8081/', //'https://ecommvue.z29.web.core.windows.net/',
          authority: 'https://NAGPecommB2c.b2clogin.com/NAGPecommB2c.onmicrosoft.com/B2C_1_SignupSignin',
          knownAuthorities: ['NAGPecommB2c.b2clogin.com'],
          navigateToLoginRequestUrl: true
        }
      };

      const msalInstance = new Msal.UserAgentApplication(msalConfig);
      if (this.isAuthenticated) {
        // If the user is authenticated, sign them out
        msalInstance.logout();
        localStorage.removeItem('authToken');
        this.isAuthenticated = false;
        this.user = null;
        this.name = null;
        this.status = 'Log In/Sign Up';
      } else {
        // If the user is not authenticated, sign them in
        const loginRequest = {
          scopes: ['openid', 'profile'],
        };
        const response = await msalInstance.loginPopup(loginRequest);
        if (response.account) {
          localStorage.setItem('authToken', JSON.stringify(response))
          this.isAuthenticated = true;
          this.user = response.account;
          this.name = this.user.idToken.given_name;
          this.status = 'Logout';

          const authInfo = {
            isAuthenticated: this.isAuthenticated,
            user: this.user
          };
        }
        location.reload()
      }
    }
  },
  computed: {
    cartTotalLength() {
      let totalLength = 0

      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity
      }

      return totalLength
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 54px;
  height: 54px;
  margin: 4px;
  border-radius: 30%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;

  &.is-loading {
    height: 80px;
  }
}

.section {
  margin-top: 0%;
  padding: 0%;
  margin: 0%;
  margin-left: 0%;
}

#search-button-navbar[data-v-41458b80] {
    
    
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}

</style>
