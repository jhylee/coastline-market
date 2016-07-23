var local = {
   itemTotals: function(item) {
      var grand = 0, total = 0, tax = 0;
      total = item.weight*item.priceCoastline + item.feeLogistics;
      tax = item.weight*item.priceCoastline*item.taxRate;
      grand = total + tax;

      total = Math.round(total*100)/100;
      tax = Math.round(tax*100)/100;
      grand = Math.round(grand*100)/100;

      return {
         total,
         tax,
         grand
      };
   },
   fisher: {
      available: new Channel("available"),
      reserved: new Channel("reserved"),
      addReserved: function(item) {
         item.reserved = new Date();
         local.fisher.available.remove(item);
         local.fisher.reserved.push(item);
      },
      removeReserved: function(item) {
         item.reserved = undefined;
         local.fisher.reserved.remove(item);
         local.fisher.available.push(item);
      },
   },
   restaurant: {
      available: new Channel("orders"),
      history: new Channel("history"),
   },
   dateToString: function(date) {
      var s = date.toString().split(" ");
      return s[0] + " " + s[1] + " " + s[2] + ", " + s[4];
   },
};

export default local;

function Channel(title) {
   var global = this;

   this.title = title;
   this.data = [];
   this.subscriptions = [];

   function getSubscription(context) {
      var result;

      global.subscriptions.map(function(item) {
         if (item.context == context)
            result = item;
      });

      return result;
   }

   this.subscribe = function(context) {
      var subscription = getSubscription(context);

      if (!subscription) {
         global.subscriptions.push(new Subscription(context, this));
      }

      return context;
   };
   this.unsubscribe = function(context) {
      var subscription = getSubscription(context);

      if (subscription) {
         global.subscriptions.splice(global.subscriptions.indexOf(subscription), 1);
      }

      return context;
   };
   this.get = function(context, filter) {
      var subscription = getSubscription(context);

      if (subscription) {
         subscription.state[global.title].splice(0, subscription.state[global.title].length);
         filter = filter.toLowerCase();

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

         global.data.map(function(item) {
            if (testFilter(item.name.toLowerCase(), filter) ||
                testFilter(item.zone.toLowerCase(), filter)) {

               subscription.state[global.title].push(item);
            }
         });

         return subscription.state[global.title];
      }
      else {
         return false;
      }
   };
   this.push = function(item) {
      global.data.unshift(item);
      global.subscriptions.map(setState);
   };
   this.remove = function(item) {
      if (global.data.indexOf(item) != -1) {
         global.data.splice(global.data.indexOf(item), 1);
      }
   };
   this.contains = function(item) {
      return global.data.indexOf(item) != -1;
   };
}

function Subscription(context, channel) {
   this.context = context;
   this.channel = channel;
   this.context.state = this.context.state || {};
   this.context.state[this.channel.title] = [];

   // ref
   this.state = this.context.state;
}

function setState(subscription) {
   subscription.context.setState(subscription.context.state);
}

for (var i = 0; i < 10; ++i) {
   var name = ""
   "AZAZAZAZAZAZAZAZAZAZAZAZAZAZAZ".split("").map(function(char) {
      if (Math.random() > 0.9)
         name += char;
   });
   local.fisher.available.push({
      // fisher orders
      name: name,
      weight: Math.round(Math.random()*1000),
      units: "lbs",
      date: new Date(),
      zone: "Test Area",

      // product details
      priceMarket: 999.99,
      priceCoastline: Math.round(Math.random()*1000)/100,
      feeLogistics: Math.round(Math.random()*5*200)/100,
      taxRate: 0.13,

      // reserved details
      reserved: undefined,
   });
}

for (var i = 0; i < 10; ++i) {
   var name = ""
   "oFoFoFoFoFoFoFoFoFoFoFoFoFoFoFoFoFoFoFoF".split("").map(function(char) {
      if (Math.random() > 0.9)
         name += char;
   });
   local.restaurant.available.push({
      // fisher orders
      name: name,
      weight: Math.round(Math.random()*1000),
      units: "lb",
      date: new Date(),
      zone: "Test Area",

      // product details
      priceMarket: 999.99,
      priceCoastline: Math.round(Math.random()*1000)/100,
      feeLogistics: Math.round(Math.random()*5*200)/100,
      taxRate: 0.13,
      deliveryTime: new Date(),
      deliveryTimeMin: -4*1000*60*60,
      deliveryTimeMax: 4*1000*60*60,

      // reserved details
      reserved: undefined,
   });
}
