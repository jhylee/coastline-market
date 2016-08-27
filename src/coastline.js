/**
 *
 * TODO
 *    Finish underlay on tabbar
 *
 * NOTE
 *
 */


// render tab bar
import React, { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { COLOR } from 'react-native-material-design';
import AppStore from './stores/AppStore';

// local coastline
let contexts = [];
let filter = "";
let fisher = {
   available: [],
   reserved: [],
};
let restaurant = {
   available: [],
   history: [],
   cart: [],
};

// socket
if (window.navigator && Object.keys(window.navigator).length == 0) {
   window = Object.assign(window, { navigator: { userAgent: 'ReactNative' }});
}

// must use local ip when testing android
let ip = "10.16.20.34";
let baseUrl = "http://" + ip + ":9000";
let server = ip + ":8999";
let io = require('socket.io-client/socket.io');
let socket = socket || io(server, {transports: ['websocket'], jsonp: false});

let local = {
   // client token
   token: undefined,
   // client user object
   user: undefined,
   accountClass: undefined,
   // client must complete a handshake
   init: function() {
      socket.emit("handshake", {
         token: local.token,
         accountClass: local.accountClass,
         location: {
            latitude: 44.55,
            longitude: -79.35,
         },
      });
   },
   // aka supplier
   fisher: {
      getAvailable: function() {
         let result = [];

         // apply filter then populate result
         fisher.available.map(function(item) {
            if (testFilter(item.product.name.toLowerCase(), filter)) {
               result.push(item);
            }
         });

         // sort by newest first
         result.sort(function(a, b) {
            return new Date(b.order.date) - new Date(a.order.date);
         });

         return result;
      },
      getReserved: function() {
         let result = [];

         // apply filter then populate result
         fisher.reserved.map(function(item) {
            if (testFilter(item.product.name.toLowerCase(), filter)) {
               result.push(item);
            }
         });

         // sort by newest first
         result.sort(function(a, b) {
            return new Date(b.order.date) - new Date(a.order.date);
         });

         return result;
      },
      reserve: function(item) {
         // submits a reserve action
         socket.emit("action", {
            type: "reserve",
            item: item._id,
         });
      },
   },
   restaurant: {
      getAvailable: function() {
         let result = [];

         restaurant.available.map(function(item) {
            result.push(item);
         });

         return result;
      },
      getHistory: function() {
         let result = [];

         restaurant.history.map(function(item) {
            result.push(item);
         });

         return result;
      },
      getCart: function() {
         return restaurant.cart;
      },
   },
   // used to subscribe components to coastline object for updates
   addContext: function(context) {
      if (contexts.indexOf(context) == -1) {
         contexts.push(context);
      }

      return context;
   },
   // remove contexts when they are no longer visible
   removeContext: function(context) {
      if (contexts.indexOf(context) != -1) {
         contexts.splice(contexts.indexOf(context), 1);
      }

      return context;
   },
   setFilter: function(newfilter) {
      filter = newfilter;
      contexts.map(setState);
   },
   dateToString: function(date) {
      let s = date.toString().split("-");
      return s[2][0] + s[2][1] + "/" + s[1] + "/" + s[0];
   },
   itemTotals: function(item) {
      return {
         grand: Math.round(item.quantity*item.purchasePrice*100)/100,
      };
   },
   apiRequest: function (url, method, body) {
      return fetch(baseUrl + url, {
         method: method,
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      }).then((res) => {
         return res.json()
      }).catch((error) => {
         console.error(error);
      });
   },
   // submit request with session token
   apiRequestWithToken: function (url, method, body) {
      return store.get('token').then((value) => {
         if (value) {
            return fetch(baseUrl + url, {
               method: method,
               headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + value,
               },
               body: JSON.stringify(body)
            }).then((res) => res.json()).catch((error) => {
               console.error(error);
            });
         };
      })
   },
   // method called when rendering a scrollable tab bar
   // copy over when building ios
   // todo remove inline styles
   renderTabBar: function(context, scroll) {
      return (
         <View
            style={{
               elevation: 4,
               height: 30,
               flexWrap: 'wrap',
               alignItems: 'flex-start',
               flexDirection:'row',
               backgroundColor: "#eee",//COLOR[AppStore.state.theme+""+500].color,
            }}>
            {
               context.tabs.map(function(tab, i) {
                  // Attempting to build an underlay bar that follow the active
                  // tab. Left/right: pixels from those sides.
                  let dif, left = 0, right = 0, width = 0;
                  let tabWidth = Dimensions.get('window').width/context.tabs.length;

                  if (i + 1 == context.activeTab) { // tab is left of active
                     width = (scroll - i)*tabWidth;
                     left = tabWidth - width;
                  }
                  else if (i == context.activeTab) { // tab is active
                     width = tabWidth;
                  }
                  else if (i - 1 == context.activeTab) { // tab is right of active
                     width = (i - scroll)*tabWidth;
                     right = tabWidth - width;
                  }

                  console.log("WIDTH " + i, width);

                  return (
                     <TouchableOpacity
                        style={{
                           flexDirection:'column',
                           height: 30,
                           flex: 1,
                           borderBottomColor: '#fff',
                           borderBottomWidth: (context.activeTab == i ? 3 : 0),
                        }}
                        // touch tab bar go to page
                        onPress={() => {
                           context.goToPage(i);
                        }}>

                        <Text
                           style={{
                              textAlign: "center",
                              color: "#fff",
                           }}>
                           {tab}
                        </Text>
                        <View style={{
                           backgroundColor: "#000",
                           height: 10,
                           width: width,
                           marginLeft: left,
                           marginRight: right,
                        }}
                           >

                        </View>
                     </TouchableOpacity>
                  )
               })
            }
         </View>
      );
   },
};

export default local;

socket.on("connect", function() {
   console.log("Connected");
});
socket.on("CoastlineError", function(message) {
   console.log(message);
});
// Currently the full data object is passed to client, so update everything
// upon receiving data.
socket.on("data", function(data) {
   // Set to empty, server keeps state so nothing is lost
   fisher.available = [];
   fisher.reserved = [];
   restaurant.available = [];
   restaurant.history = [];

   console.log(data);

   // If items exist in the packet, update available/reserved based on type
   data.items && Object.keys(data.items).map(function(key) {
      let item = data.items[key];

      if (item.status == "pending") {
         fisher.available.push(item);
      }
      else {
         if (item.supplier == local.user._id)
            fisher.reserved.push(item);
      }
   });

   // Fill order object, if order was placed by this account then add to history
   data.orders && Object.keys(data.orders).map(function(key) {
      let order = data.orders[key];

      if (order.data.purchaser == local.user._id) {
         restaurant.history.push(order);
      }
   });

   // Fill all products
   data.products && Object.keys(data.products).map(function(key) {
      restaurant.available.push(data.products[key]);
   });

   // Update all contexts
   contexts.map(setState);
});

socket.on("handshake", function(user) {
   local.user = user;
});

// See if filter is substring of string, if so return true. Likely changing in
// future.
function testFilter(string, filter) {
   for (let i = 0; i < string.length; ++i) {
      let match = true;

      for (let j = 0; j < filter.length; ++j) {
         if (i + j >= string.length || string[i + j] != filter[j]) {
            match = false;
            break;
         }
      }

      if (match) return true;
   }

   return false;
}

// Update a single context with new data
function setState(context) {
   context.setState(context.state);
}
