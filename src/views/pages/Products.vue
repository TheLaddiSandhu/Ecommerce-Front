<template>
  <div>
    <p class="display-1 font-weight-light pa-1" style="background: transparent">Hello! {{user? user.name: ''}}</p>
    <v-row>
      <v-col lg="4" sm="6" cols="12" class="align-self-start" :key="pro._id" v-for="pro in products">
        <v-card>
          <router-link :to="{ name: 'product-details', params: { id: pro._id } }">
            <v-img :src="require('../../assets/img/shop/'+ pro.image)" style="height: 300px"></v-img>
            <v-btn
              text
              color="primary"
              dark
              style="position: absolute; top: 10px; right: 10px; background: white;
    border-radius: 62px;
    max-width: 50px;
    min-width: 52px;"
            >
              <v-icon>{{ icons.mdiAlertCircleOutline }}</v-icon>
            </v-btn>
          </router-link>
          <div style="display:flex;justify-content: space-between;">

          <v-card-title>{{ pro.name }}</v-card-title>
          <v-rating
                        v-model="pro.rating"
                        class=""
                        background-color="warning lighten-3"
                        color="warning"
                        dense
                        style="align-self: center;padding-right: 20px;"
                      ></v-rating>
          </div>
          <v-card-text>
            <p class="text--primary text-base">
              ${{ getDiscountedValue(pro.price, pro.discount) }}
              <del style="" class="subtitle-1 font-weight-thin">${{ pro.price }}</del>
            </p>
            {{ pro.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import store from '../../store/index'
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiCartPlus,
  mdiShareVariantOutline,
  mdiLockOpenOutline,
  mdiStarOutline,
  mdiAccountOutline,
  mdiTrendingUp,
  mdiHelpCircleOutline,
  mdiEyeOffOutline,
  mdiEyeCircleOutline,
  mdiEye,
  mdiAlertCircleOutline,
} from '@mdi/js'

export default {
  setup() {
    const isCardDetailsVisible = false
    const rating = ref(5)

    return {
      isCardDetailsVisible,
      rating,

      // icons
      icons: {
        mdiChevronUp,
        mdiChevronDown,
        mdiCartPlus,
        mdiShareVariantOutline,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiTrendingUp,
        mdiHelpCircleOutline,
        mdiEyeOffOutline,
        mdiEyeCircleOutline,
        mdiEye,
        mdiAlertCircleOutline,
      },
    }
  },
  data: () => ({
    range: [0, 10000],
    select: 'Popularity',
    options: ['Default', 'Popularity', 'Relevance', 'Price: Low to High', 'Price: High to Low'],
    quantity: [1, 2, 3, 4, 5],
    products: [],
  }),
  computed: {
    // products() {
    //   return this.$store.state.products
    // },
    user(){
      return this.$store.state.users.filter((user) => user.id = this.$store.state.session.userId)[0];
    }
  },
  methods: {
    getAllProducts() {
      this.axios
        .get("http://localhost:5000/Api/Product")
        .then((response) => {
          console.log(response);
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDiscountedValue(price, discount) {
      return price - (price / 100) * discount
    },
    displayImage(url){
      return require(url)
    }
  },
  created() {
    this.getAllProducts()
  }
}
</script>
