var contexts = [];
var filter = "";
var fisher = {
   available: [],
   reserved: [],
};

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

// coastline object
var local = {
   fisher: {
      getAvailable: function() {
         var result = [];

         fisher.available.map(function(item) {
            if (testFilter(item.name.toLowerCase(), filter.toLowerCase()) ||
                testFilter(item.zone.toLowerCase(), filter.toLowerCase()) ||
                testFilter(item.date.toString().toLowerCase(), filter.toLowerCase()))
               result.push(item);
         });

         return result;
      },
      getReserved: function() {
         var result = [];

         fisher.reserved.map(function(item) {
            if (testFilter(item.name.toLowerCase(), filter.toLowerCase()) ||
                testFilter(item.zone.toLowerCase(), filter.toLowerCase()) ||
                testFilter(item.date.toString().toLowerCase(), filter.toLowerCase()))
               result.push(item);
         });

         return result;
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

   // helper
   dateToString: function(date) {
      var s = date.toString().split(" ");
      return s[0] + " " + s[1] + " " + s[2] + ", " + s[4];
   },
   itemTotals: function(item) {
      return {
         grand: Math.round(item.weight*item.priceCoastline*100)/100,
      };
   },
};

export default local;

for (var i = 0; i < 10; ++i) {
   var name = ""
   "AZAZAZAZAZAZAZAZAZAZAZAZAZAZAZ".split("").map(function(char) {
      if (Math.random() > 0.9)
         name += char;
   });
   fisher.available.push({
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
      reserved: false,
   });
}

for (var i = 0; i < 10; ++i) {
   var name = ""
   "oFoFOFffOfoooFFofo".split("").map(function(char) {
      if (Math.random() > 0.9)
         name += char;
   });
   fisher.reserved.push({
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
      reserved: true,
   });
}
