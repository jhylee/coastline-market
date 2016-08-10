export default {
   load: {
      initialRoute: true,
      title: 'Loading',
      component: require('./load.js').default,
   },

   login: {
      title: 'Login',
      component:require('./scenes/Login').default,
   },

   themes: {
      title: 'Change Theme',
      component: require('./scenes/Themes').default
   },

   settings: {
      title: 'Settings',
      component: require('./scenes/fisher/Settings').default
   },

   fisher: {
      title: 'Fisher Market',
      component: require('./scenes/Fisher').default,
      children: {
         productdetail: {
            title: 'Product Details', // optional
            component: require('./scenes/fisher/ProductDetail').default
         },
      },
   },

   restaurant: {
      title: 'Restaurant',
      component: require('./scenes/Restaurant').default,
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
         productdetail: {
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
