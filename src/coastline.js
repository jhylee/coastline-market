/*{
   // fisher orders
   name: undefined,
   weight: undefined,
   units: "lbs",
   date: undefined,
   zone: undefined,

   // product details
   priceMarket: undefined,
   priceCoastline: undefined,
   feeLogistics: undefined,
   taxRate: undefined,

   // reserved details
   reserved: undefined,
}*/

// render tab bar
import React, { View, Text, TouchableOpacity } from 'react-native';
import { COLOR } from 'react-native-material-design';
import AppStore from './stores/AppStore';

// local coastline
var contexts = [];
var filter = "";
var fisher = {
   available: [],
   reserved: [],
};
var restaurant = {
   available: [],
   history: [],
   cart: [],
};
var local = {
   fisher: {
      getAvailable: function() {
         var result = [];

         fisher.available.map(function(item) {
            // temp code
            if (typeof item.product === "undefined" || item.product == null) {
               item.product = {
                  name: "Test",
                  sellingPrice: 99.99,
                  purchasePrice: 99.99,
               };
            }

            if (testFilter(item.product.name.toLowerCase(), filter)) {
               result.push(item);
            }
         });

         return result;
      },
      getReserved: function() {
         var result = [];

         fisher.reserved.map(function(item) {
            // temp code
            if (typeof item.product === "undefined" || item.product == null) {
               item.product = {
                  name: "Test",
                  sellingPrice: 99.99,
                  purchasePrice: 99.99,
               };
            }

            if (testFilter(item.product.name.toLowerCase(), filter)) {
               result.push(item);
            }
         });

         return result;
      },
      reserve: function(product) {
         var i;
         if ((i = fisher.available.indexOf(product)) != -1) {
            fisher.available.splice(i, 1);
            fisher.reserved.push(product);
         }
         else if ((i = fisher.reserved.indexOf(product)) != -1) {
            fisher.reserved.splice(i, 1);
            fisher.available.push(product);
         }

         product.reserved = !product.reserved;
      },
   },
   restaurant: {
      getAvailable: function() {
         var result = [];

         restaurant.available.map(function(item) {
            result.push(item);
         });

         return result;
      },
      getHistory: function() {
         var result = [];

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
      var s = date.toString().split("-");
      return s[2][0] + s[2][1] + "/" + s[1] + "/" + s[0];
   },
   itemTotals: function(item) {
      return {
         grand: Math.round(item.quantity*item.purchasePrice*100)/100,
      };
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
   }
};

export default local;

// socket
if (window.navigator && Object.keys(window.navigator).length == 0) {
   window = Object.assign(window, { navigator: { userAgent: 'ReactNative' }});
}

var server = "10.16.20.16:8999";
var io = require('socket.io-client/socket.io');
var socket = io(server, {transports: ['websocket'], jsonp: false});
var token = 333;
socket.on("token", function() {
   socket.emit("token", {token:token});
});
socket.on("data", function(data) {
   console.log("DATA:", data);

   switch (data.type) {
      case "order":
         data.items.map(function(item) {
            var channel = (item.reserved && fisher.reserved) || fisher.available;
            var i, len;
            item.order = data.order;

            for (i = 0, len = channel.length; i < len; ++i) {
               if (channel[i]._id == item._id)
                  break;
            }

            if (i == len) {
               channel.push(item);
            }
            else {
               channel[i] = item;
            }
         });

         contexts.map(setState);
         return true;
      default:
         return false;
   }
});

function testFilter(string, filter) {
   for (var i = 0; i < string.length; ++i) {
      var match = true;

      for (var j = 0; j < filter.length; ++j) {
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
