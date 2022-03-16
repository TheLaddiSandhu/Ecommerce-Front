<template>
  <v-card flat class="mt-5">
    <v-form>
      <div>
        <v-row v-if="purchases.length > 0">
          <v-col md="6" lg="8" cols="12" :key="purchase.id" v-for="purchase in purchases">
            <v-card class="overflow-hidden" style="margin: 10px">
              <v-row class="ma-0 h-full">
                <v-col cols="12" sm="8" md="12" lg="8" order="2" order-lg="1">
                  <v-card-title>Purchase # {{ purchase.id }}</v-card-title>
                  <v-card-text :key="purchase.id + item.id" v-for="(item, index) in purchase.products">
                    {{ index + 1 }}. Product: <b>{{ getProductById(item.productId).name }}</b
                    >, Quantity: <b>{{ item.quantity }}</b>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                  md="12"
                  lg="4"
                  order="1"
                  order-lg="2"
                  class="memberpricing-bg"
                  style="background-color: rgba(94, 86, 105, 0.04)"
                >
                  <div class="membership-pricing">
                    <p class="mt-16 text--primary">
                      <sub class="text-2xl">$</sub>
                      <sup style="font-size: 3rem; top: 9px" class="font-weight-semibold">{{ purchase.subTotal + purchase.taxAmount + 10 }}</sup>
                      <sub class="text-xl">CAD</sub>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <p class="font-weight-light pa-1" v-if="purchases.length == 0">You have no purchases!</p>
    </v-form>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiKeyOutline, mdiLockOpenOutline, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    return {
      icons: {
        mdiKeyOutline,
        mdiLockOpenOutline,
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    }
  },
  data: () => ({
    purchases: [],
    products: []
  }),
  methods: {
    getAllPurchases() {
      this.axios
        .get("http://localhost/ecommerce-service/api/order.php?action=fetchOrdersByUserId&userId="+ this.$store.state.session.userId)
        .then((response) => { 
          console.log(response);
          this.purchases = response.data; 
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAllProducts() {
      this.axios
        .get("http://localhost/ecommerce-service/api/product.php?action=fetchAllProducts")
        .then((response) => { 
          console.log(response);
          this.products = response.data; 
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductById(id) {
      return this.products.filter(product => product.id == id)[0]
    },
  },
  computed: {
    // purchases() {
    //   console.log(this.$store.state.purchases)
    //   return this.$store.state.purchases.filter(items => items.userId == this.$store.state.session.userId)
    // },
    // products() {
    //   return this.$store.state.products
    // },
    
  },
  created(){
    this.getAllProducts();
    this.getAllPurchases();
  }
}
</script>

<style lang="scss" scoped>
.two-factor-auth {
  max-width: 25rem;
}
.security-character {
  position: absolute;
  bottom: -0.5rem;
}
</style>
