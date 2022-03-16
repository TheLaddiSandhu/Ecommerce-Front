import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [
            {
                id: 1,
                name: 'Sohail Shiraj',
                email: 'admin@gmail.com',
                password: 'admin',
            },
            {
              id: 2,
              name: 'Lovepreet Sandhu',
              email: 'Sandhu@gmail.com',
              password: 'Sandhu',
          }
        ],
        session: {
            userId: '',
            cart: [],
        },
        purchases: [],
        products: [

          {
            id: 1,
            name: 'iPhone 7',
            description: 'Your new superpower',
            longDescription: 'The iPhone 13 offers access to Bell’s 5G network, the powerful new A15 Bionic chip, a 6.1-inch Super Retina XDR display, and the new dual rear camera',
            type: 'Electronics',
            price: '769',
            discount: 20,
            rating: 5,
            reviews: [
                {
                    id: 1,
                    rating: 5,
                    review: "Some review",
                    personName: "Ali, Badruddin",
                    reviewDescription: "Best phone ever"
                },
                {
                    id: 2,
                    rating: 3.5,
                    review: "Some review",
                    personName: "Shiraj, Sohail",
                    reviewDescription: "Awesome phone"
                }
            ],
            images: [
                require('../assets/img/shop/1.jpg'),
                require('../assets/img/shop/1.jpg')
            ],
            src: require('../assets/img/shop/1.jpg')
        },

        {
          id: 2,
          name: 'iPhone 8',
          description: 'Your new superpower',
          longDescription: 'Originally released September 2017 Unlocked, SIM-Free, Model A18631 4.7-inch Retina HD display with IPS technology A11 Bionic chip with embedded M11 motion coprocessor Talk time (wireless) up to 14 hours',
          type: 'Electronics',
          price: '929',
          discount: 20,
          rating: 5,
          reviews: [
              {
                  id: 1,
                  rating: 5,
                  review: "Some review",
                  personName: "Ali, Badruddin",
                  reviewDescription: "Best phone ever"
              },
              {
                  id: 2,
                  rating: 3.5,
                  review: "Some review",
                  personName: "Shiraj, Sohail",
                  reviewDescription: "Awesome phone"
              }
          ],
          images: [
              require('../assets/img/shop/2.jpg'),
              require('../assets/img/shop/2.jpg')
          ],
          src: require('../assets/img/shop/2.jpg')
      },

            {
                id: 3,
                name: 'iPhone XR',
                description: 'Groundbreaking New Design',
                longDescription: 'The iPhone XR features a precision-machined 7000 Series aerospace-grade aluminum frame that wraps around an all-glass enclosure with the same durable glass used in the more expensive iPhone XS. Apple designed the iPhone XR in six colors: white, black, blue, coral, yellow',
                type: 'Electronics',
                price: '1029',
                discount: 20,
                rating: 5,
                reviews: [
                    {
                        id: 1,
                        rating: 5,
                        review: "Some review",
                        personName: "Ali Ahad, Badruddin",
                        reviewDescription: "Very good product, easy to use"
                    },
                    {
                        id: 2,
                        rating: 3.5,
                        review: "Some review",
                        personName: "Lovepreet, Sandhu",
                        reviewDescription: "Very good product, easy to use"
                    }
                ],
                images: [
                    require('../assets/img/shop/3.jpg'),
                    require('../assets/img/shop/3.jpg')
                ],
                src: require('../assets/img/shop/3.jpg')
            },
            {
                id: 4,
                name: 'Iphone 11',
                description: 'Just the right amount for everything',
                longDescription: 'The iPhone 11 offers the new A13 chip, a 6.1-inch Liquid Retina HD LCD display, water resistance and a dual-camera system with 12MP Ultra Wide and Wide cameras.',
                type: 'Electronics',
                price: '979',
                discount: 20,
                rating: 5,
                reviews: [
                    {
                        id: 1,
                        rating: 3.5,
                        review: "Some review",
                        personName: "Shiraj, Sohail",
                        reviewDescription: "Awesome phone"
                    }
                ],
                images: [
                    require('../assets/img/shop/4.jpg'),
                    require('../assets/img/shop/4.jpg')
                ],
                src: require('../assets/img/shop/4.jpg')
            },
            {
                id: 5,
                name: 'iPhone 12',
                description: 'Blast, Past, Fast',
                longDescription: 'The iPhone 12 offers 5G capabilities, the new A14 Bionic chip, a 6.1-inch Super Retina XDR display, the new dual 12 MP rear camera and is available in white, black',
                type: 'Electronics',
                price: '1129',
                discount: 20,
                rating: 4.5,
                reviews: [
                    {
                        id: 1,
                        rating: 5,
                        review: "Some review",
                        personName: "Gill, Raman",
                        reviewDescription: "Very good product, easy to use"
                    },
                    {
                        id: 2,
                        rating: 3.5,
                        review: "Some review",
                        personName: "Arsh, Sidhu",
                        reviewDescription: "Very good product, easy to use"
                    }
                ],
                images: [
                    require('../assets/img/shop/5.jpg'),
                    require('../assets/img/shop/5.jpg')
                ],
                src: require('../assets/img/shop/5.jpg')
            },
            {
                id: 6,
                name: 'iPhone 13',
                description: 'Your new superpower',
                longDescription: 'The iPhone 13 offers access to Bell’s 5G network, the powerful new A15 Bionic chip, a 6.1-inch Super Retina XDR display, and the new dual rear camera',
                type: 'Electronics',
                price: '1099',
                discount: 20,
                rating: 5,
                reviews: [
                    {
                        id: 1,
                        rating: 5,
                        review: "Some review",
                        personName: "Ali, Badruddin",
                        reviewDescription: "Best phone ever"
                    },
                    {
                        id: 2,
                        rating: 3.5,
                        review: "Some review",
                        personName: "Shiraj, Sohail",
                        reviewDescription: "Awesome phone"
                    }
                ],
                images: [
                    require('../assets/img/shop/6.jpg'),
                    require('../assets/img/shop/6.jpg')
                ],
                src: require('../assets/img/shop/6.jpg')
            },
        ],
    },
    mutations: {
        addToCart(state, item) {
            state.session.cart.push(item);
        },
        removeFromCart(state, id) {
            state.session.cart = state.session.cart.filter(function(obj) {
                return obj.id !== id;
            });
        },
        setUserIdSession(state, userId) {
            console.log(userId)
            state.session.userId = userId;
            console.log(state.session.userId);
        },
        clearUserIdSession(state){
            state.session.userId = null
        },
        addPurchaseItem(state, item) {
            state.purchases.push(item);
        },
        clearCart(state) {
            state.session.cart = [];
        },
        addReview(state, review) {
            let productIndex = state.products.findIndex(function(obj) {
                return obj.id == review.id;
            });
            let newReview = {
                id: state.products[productIndex].reviews.length + 1,
                rating: review.rating,
                review: review.review,
                personName: state.users.filter((user) => user.id = state.session.userId)[0].name,
                reviewDescription: review.review
            }
            state.products[productIndex].reviews.push(newReview);
        }
    },
    actions: {},
    modules: {},
})
