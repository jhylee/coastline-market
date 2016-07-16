export default {


    login: {
      initialRoute: true,
      title: 'Login',
      component:require('./scenes/Login').default,

      children: {
          welcome: {
              component: require('./scenes/Welcome').default
          },

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
    }
}
