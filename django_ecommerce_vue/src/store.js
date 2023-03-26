import * as Vue from 'vue'
import * as Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        "@search.score": 1,
        "id": "1",
        "name": "Lee Black Tshirt",
        "slug": "black",
        "description": "Women Cotton Black Tshirt",
        "price": "200.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/kt8zb0w0/t-shirt/u/r/o/l-13594638-roadster-original-imag6mtp9hw23z29.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/kt8zb0w0/t-shirt/u/r/o/l-13594638-roadster-original-imag6mtp9hw23z29.jpeg?q=70",
        "date_added": "2023-02-28T09:23:20.655Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "2",
        "name": "Lee White Tshirt",
        "slug": "white",
        "description": "Women Cotton White Tshirt",
        "price": "500.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/kpbipow0/t-shirt/d/w/f/xl-13573404-roadster-original-imag3kps3jwyen6k.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/kpbipow0/t-shirt/d/w/f/xl-13573404-roadster-original-imag3kps3jwyen6k.jpeg?q=70",
        "date_added": "2023-02-28T09:24:16.083Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "3",
        "name": "Lee Red Tshirt",
        "slug": "red",
        "description": "Men Lee Cotton Red Tshirt",
        "price": "350.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/f/y/1/l-pjkcpsnpw79633-peter-england-original-imaghbazwuywzvyz.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/f/y/1/l-pjkcpsnpw79633-peter-england-original-imaghbazwuywzvyz.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "4",
        "name": "Lee Green Tshirt",
        "slug": "green",
        "description": "Men Color Block Polo Neck Green T-Shirt",
        "price": "559.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/c/v/c/m-lmtssm3130-lee-original-imagh7y3pzudjuqr.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/c/v/c/m-lmtssm3130-lee-original-imagh7y3pzudjuqr.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "5",
        "name": "Lee Graphic Black Tshirt",
        "slug": "black",
        "description": "Men Graphic Print Round Neck Black T-Shirt",
        "price": "399.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/kqfj1jk0/t-shirt/b/6/v/s-307093-bewakoof-original-imag4fspzpnfrzw3.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/kqfj1jk0/t-shirt/b/6/v/s-307093-bewakoof-original-imag4fspzpnfrzw3.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "6",
        "name": "Wrangler Striped Tshirt",
        "slug": "multi",
        "description": "Men Striped Polo Neck Multicolor T-Shirt",
        "price": "499.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/l1mh7rk0/t-shirt/a/i/4/m-wmts003678-wrangler-original-imagd55mxnyzjbmj.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/l1mh7rk0/t-shirt/a/i/4/m-wmts003678-wrangler-original-imagd55mxnyzjbmj.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "7",
        "name": "Round Neck Multicolor Tshirt",
        "slug": "multi",
        "description": "Men Printed Round Neck Multicolor T-Shirt",
        "price": "350.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/k7ksvww0/t-shirt/n/u/c/m-fmts3153-flying-machine-original-imafpz8fd5yg2yca.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/k7ksvww0/t-shirt/n/u/c/m-fmts3153-flying-machine-original-imafpz8fd5yg2yca.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "8",
        "name": "Raymond Grey Trouser",
        "slug": "grey",
        "description": "Men Slim Fit Grey Viscose Rayon Trousers",
        "price": "899.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/6/w/i/32-rmts04706-g6-raymond-original-imagn9mrdhpznvps.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/6/w/i/32-rmts04706-g6-raymond-original-imagn9mrdhpznvps.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "9",
        "name": "Raymond Blue Trouser",
        "slug": "blue",
        "description": "Men Slim Fit Light Blue Viscose Rayon Trousers",
        "price": "860.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/v/u/c/32-rmts04716-p6-raymond-original-imagn9n2zajgqbhg.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/v/u/c/32-rmts04716-p6-raymond-original-imagn9n2zajgqbhg.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "10",
        "name": "Park Avenue Black Trouser",
        "slug": "black2",
        "description": "Men Skinny Fit Black Viscose Rayon Trousers",
        "price": "999.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/z/7/p/44-pmtq06829-k8-park-avenue-original-imaggbunnnzygkdn.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/z/7/p/44-pmtq06829-k8-park-avenue-original-imaggbunnnzygkdn.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "11",
        "name": "US Polo Multi Trouser",
        "slug": "multi",
        "description": "Men Slim Fit Multicolor Pure Cotton Trousers",
        "price": "700.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/p/r/v/32-ustroo0202-u-s-polo-association-original-imaghnzhpjztzphs.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/p/r/v/32-ustroo0202-u-s-polo-association-original-imaghnzhpjztzphs.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "12",
        "name": "Wrogn Casual Blue Shirt",
        "slug": "blue",
        "description": "Men Regular Fit Checkered Casual Shirt",
        "price": "699.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/m/s/b/-original-imagg5rzhujfzzzs.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/m/s/b/-original-imagg5rzhujfzzzs.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "13",
        "name": "Wrogn Casual Red Shirt",
        "slug": "red",
        "description": "Men Regular Fit Checkered Casual Shirt",
        "price": "580.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/k/d/2/m-wmsh0038-wrogn-original-imaggeyzpk22agjz.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/k/d/2/m-wmsh0038-wrogn-original-imaggeyzpk22agjz.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      },
      {
        "@search.score": 1,
        "id": "14",
        "name": "Tokyo Printed Yellow Top",
        "slug": "yellow",
        "description": "Casual Regular Sleeves Printed Women Yellow Top",
        "price": "299.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/top/7/u/n/l-tttp003124-tokyo-talkies-original-imafk8ynguyznyvv-bb.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/top/7/u/n/l-tttp003124-tokyo-talkies-original-imafk8ynguyznyvv-bb.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "15",
        "name": "DL Purple Top",
        "slug": "purple",
        "description": "Casual Puff Sleeves Solid Women Purple Top",
        "price": "399.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/top/s/n/l/xxl-0013-top-dl-fashion-original-imaggf53g4fwqhye.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/top/s/n/l/xxl-0013-top-dl-fashion-original-imaggf53g4fwqhye.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "16",
        "name": "Dry State Blue Tshirt",
        "slug": "blue",
        "description": "Over Size T Shirt Women Graphic Print Round Neck Light Blue T-Shirt",
        "price": "349.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/l1xwqkw0/t-shirt/u/a/o/s-3801-the-dry-state-original-imagde5qmgbgyr6e.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/l1xwqkw0/t-shirt/u/a/o/s-3801-the-dry-state-original-imagde5qmgbgyr6e.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "17",
        "name": "Vero Moda Yellow Shirt",
        "slug": "yellow",
        "description": "Women Regular Fit Solid Casual Shirt",
        "price": "480.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/l432ikw0/shirt/s/i/e/-original-imagf274tr54rpvv.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/l432ikw0/shirt/s/i/e/-original-imagf274tr54rpvv.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "18",
        "name": "Kotty Blue Jeans",
        "slug": "blue",
        "description": "Women Regular High Rise Dark Blue Jeans",
        "price": "499.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/kit6hzk0-0/jean/e/b/x/30-kttwomensjeans721-kotty-original-imafygkykt49tugb.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/kit6hzk0-0/jean/e/b/x/30-kttwomensjeans721-kotty-original-imafygkykt49tugb.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "19",
        "name": "Kotty Light Blue Jeans",
        "slug": "light",
        "description": "Women Flared Mid Rise Light Blue Jeans",
        "price": "699.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/l111lzk0/jean/c/q/b/32-jeans-dark-blue-20-fast-train-original-imagczqcqte4nnc6.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/l111lzk0/jean/c/q/b/32-jeans-dark-blue-20-fast-train-original-imagczqcqte4nnc6.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "20",
        "name": "Sassafaras Grey Jeans",
        "slug": "grey",
        "description": "Women Regular High Rise Grey Jeans",
        "price": "750.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/a/q/6/xxl-sfjean0068-sassafras-original-imafyts2skeh2zxp-bb.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/a/q/6/xxl-sfjean0068-sassafras-original-imafyts2skeh2zxp-bb.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "21",
        "name": "Sassafaras Red Maxi Dress",
        "slug": "maroon",
        "description": "Women Maxi Maroon Dress",
        "price": "880.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/k3rmm4w0/dress/9/g/q/xs-sfdrss1729-sassafras-original-imafmtzjahjkwvzg.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/k3rmm4w0/dress/9/g/q/xs-sfdrss1729-sassafras-original-imafmtzjahjkwvzg.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "22",
        "name": "US Green Dress",
        "slug": "green",
        "description": "Women Shift Green Dress",
        "price": "480.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/k7assy80/dress/e/z/e/m-sfdrss1852-sassafras-original-imafpkcfx35ef73h.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/k7assy80/dress/e/z/e/m-sfdrss1852-sassafras-original-imafpkcfx35ef73h.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "23",
        "name": "Tokyo Blue Dress",
        "slug": "blue",
        "description": "Women Pinafore Blue Dress",
        "price": "734.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/n/b/w/m-sfdrss10910-sassafras-original-imagg4fszxyjrqtw.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/n/b/w/m-sfdrss10910-sassafras-original-imagg4fszxyjrqtw.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "24",
        "name": "Tokyo Pink Dress",
        "slug": "pink",
        "description": "Women Fit and Flare Pink Dress",
        "price": "576.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/i/x/o/l-ttj6007602-tokyo-talkies-original-imagh64zmvmwdwgk.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/dress/i/x/o/l-ttj6007602-tokyo-talkies-original-imagh64zmvmwdwgk.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "women"
      },
      {
        "@search.score": 1,
        "id": "25",
        "name": "Pepe Men Polo Tshirt",
        "slug": "white",
        "description": "Men Solid Polo Neck White T-Shirt",
        "price": "639.00",
        "image": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/t/h/s/m-pm541942-pepe-jeans-original-imaggb2y6pwgyprw.jpeg?q=70",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/t/h/s/m-pm541942-pepe-jeans-original-imaggb2y6pwgyprw.jpeg?q=70",
        "date_added": "2023-02-28T09:25:02.302Z",
        "category": "men"
      }
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },
})
