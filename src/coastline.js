// render tab bar
import React, { View, Text, TouchableOpacity } from 'react-native';
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

let ip = "10.16.20.14";
let baseUrl = "http://" + ip + ":9000";
let server = ip + ":8999";
let io = require('socket.io-client/socket.io');
let socket = io(server, {transports: ['websocket'], jsonp: false});

let local = {
   token: undefined,
   user: undefined,
   accountClass: undefined,
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
   fisher: {
      getAvailable: function() {
         let result = [];

         fisher.available.map(function(item) {
            if (testFilter(item.product.name.toLowerCase(), filter)) {
               result.push(item);
            }
         });

         result.sort(function(a, b) {
            return new Date(b.order.date) - new Date(a.order.date);
         });

         return result;
      },
      getReserved: function() {
         let result = [];

         fisher.reserved.map(function(item) {
            if (testFilter(item.product.name.toLowerCase(), filter)) {
               result.push(item);
            }
         });

         result.sort(function(a, b) {
            return new Date(b.order.date) - new Date(a.order.date);
         });

         return result;
      },
      reserve: function(item) {
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
   addContext: function(context) {
      if (contexts.indexOf(context) == -1) {
         contexts.push(context);
      }

      return context;
   },
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

      // console.log('here');
      // callback();
   },
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
   renderTabBar: function(context) {
      return (
         <View
            style={{
               elevation: 4,
               height: 30,
               flexWrap: 'wrap',
               alignItems: 'flex-start',
               flexDirection:'row',
               backgroundColor: COLOR[AppStore.state.theme+""+500].color,
            }}>
            {
               context.tabs.map(function(tab, i) {
                  return (
                     <TouchableOpacity
                        style={{
                           flexDirection:'column',
                           height: 30,
                           flex: 1,
                           borderBottomColor: '#fff',
                           borderBottomWidth: (context.activeTab == i ? 3 : 0),
                        }}
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
socket.on("data", function(data) {
   console.log("data", data);

   switch (local.accountClass) {
      case "supplier":
         fisher.available = [];
         fisher.reserved = [];

         Object.keys(data.data).map(function(key) {
            let item = data.data[key];

            if (item.status == "pending") {
               fisher.available.push(item);
            }
            else {
               if (item.supplier == local.user._id)
                  fisher.reserved.push(item);
            }
         });

         break;
      case "purchaser": break;
      case "admin": break;
   }
   contexts.map(setState);
});

socket.on("handshake", function(user) {
   local.user = user;
});

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

function setState(context) {
   context.setState(context.state);
}
