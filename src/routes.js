export default {
    login: {
      initialRoute: true,
      title: 'Login',
      component:require('./scenes/Login').default,
    },

    /*welcome: {
        title: 'Coastline Market',
        component: require('./scenes/fisher/FisherOrders').default,
        children: {
            example: {
                 title: 'Order Details', // optional
                component: require('./scenes/fisher/ProductDetail').default
            }
        }
    },*/

    // Fishery Pages
    fisherorders: {
      title: 'Coastline Market',
      component: require('./scenes/fisher/FisherOrders').default,
      children: {
          productdetail: {
               title: 'Product Details', // optional
              component: require('./scenes/fisher/ProductDetail').default
          }
      }
    },

    reservedorders: {
        title: 'Reserved Orders',
        component: require('./scenes/fisher/ReservedOrders').default,

        children: {
            orderdetails: {
                 title: 'My Order', // optional
                component: require('./scenes/fisher/OrderDetails').default
            }
        }
    },

    themes: {
        title: 'Change Theme',
        component: require('./scenes/Themes').default
    },

    settings: {
        title: 'Settings',
        component: require('./scenes/fisher/Settings').default
    },


    // Restaurant Pages

    orderhistory: {
      title: 'Order history',
      component: require('./scenes/restaurant/OrderHistory').default
    },

    payment: {
      title: 'Payment',
      component: require('./scenes/restaurant/Payment').default
    },

    restaurants: {
      title: 'Restaurant Order',
      component: require('./scenes/restaurant/AvailableOrders').default,

      children: {
          product: {
              title: 'Product Details',
              component: require('./scenes/restaurant/ProductDetail').default,
              children: {
                cart: {
                    title: 'Your Cart',
                    component: require('./scenes/restaurant/Cart').default,

                    children: {
                      route: {
                        title: 'Order #XAGAEWR',
                        component: require('./scenes/restaurant/Route').default,
                      }
                    }
                }
              }
          }
      }

    },

    // Logistics Pages
    logistics: {
      title: 'Pickup Schedule',
      component: require('./scenes/logistics/PickUpSchedule').default,
      children: {
        details: {
          title: 'Pickup Details',
          component: require('./scenes/logistics/PickUpDetails').default,
        }
      }

    }


}
