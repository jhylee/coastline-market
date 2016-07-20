var local = {
   fisher: {
      available: new Channel("available"),
      reserved: new Channel("reserved"),
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

local.fisher.available.data.map(function(product) {
   if (Math.random() > 0.5) {
      product.reserved = new Date();
      local.fisher.reserved.push(product);
   }
});
