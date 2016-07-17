export default {
    // Fishery Pages
    login: {
      initialRoute: true,
      title: 'Login',
      component:require('./scenes/Login').default,

      children: {
          welcome: {
              title: 'Coastline Market',
              component: require('./scenes/Welcome').default,
              children: {
                  example: {
                       title: 'Order Details', // optional
                      component: require('./scenes/NestedExample').default
                  }
              }
          }
      }
    },

    welcome: {
      title: 'Coastline Market',
      component: require('./scenes/Welcome').default,
      children: {
          example: {
               title: 'Order Details', // optional
              component: require('./scenes/NestedExample').default
          }
      }
    },


    avatars: {
        title: 'Settings',
        component: require('./scenes/Avatars').default
    },

    buttons: {
        title: 'Reserved Orders',
        component: require('./scenes/Buttons').default,

        children: {
            example: {
                 title: 'My Order', // optional
                component: require('./scenes/RadioButtons').default
            }
        }
    },

    checkboxes: {
        title: 'Checkboxes',
        component: require('./scenes/Checkboxes').default
    },

    dividers: {
        title: 'Dividers',
        component: require('./scenes/Dividers').default
    },

    list: {

        title: 'List',
        component: require('./scenes/List').default
    },

    'icon-toggles': {
        title: 'Icon Toggles',
        component: require('./scenes/IconToggles').default
    },

    'radio-buttons': {
        title: 'Radio Buttons',
        component: require('./scenes/RadioButtons').default
    },

    subheaders: {
        title: 'Subheaders',
        component: require('./scenes/Subheaders').default
    },

    themes: {
        title: 'Change Theme',
        component: require('./scenes/Themes').default
    },

    orderhistory: {
      title: 'Order history',
      component: require('./scenes/OrderHistory').default
    },

    // Restaurant Pages
    restaurants: {
      title: 'Restaurant Order',
      component: require('./scenes/AvailableOrders').default,

      children: {
          product: {
              title: 'Product Details',
              component: require('./scenes/ProductDetail').default,
              children: {
                cart: {
                    title: 'Your Cart',
                    component: require('./scenes/Cart').default,

                    children: {
                      route: {
                        title: 'Order #XAGAEWR',
                        component: require('./scenes/Route').default,
                      }
                    }
                }
              }

          }
      }

    }

}
