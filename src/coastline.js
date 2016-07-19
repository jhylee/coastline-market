var local = {
   fisher: {
      subscribers: [],
      available: [],
      reserved: [],
   }
};

export default {
   fisher: {
      subscribe: function(context) {
         var fisher = local.fisher;
         var i = fisher.subscribers.indexOf(context);

         if (i == -1) {
            context.state = context.state || {};
            context.state.available = fisher.available;

            fisher.subscribers.push(context);
         }

         return context;
      },
      unsubscribe: function(context) {
         var fisher = local.fisher;
         var i = fisher.subscribers.indexOf(context);

         if (i != -1) fisher.subscribers.splice(i, 1);

         return context;
      },
   }
};

function setState(context) {
   return context.setState(context.state);
}

var fakePolling = setInterval(function() {
   var fisher = local.fisher;

   if (fisher.available.length > 6)
      return clearInterval(fakePolling);

   fisher.available.unshift({
      name: "Test " + fisher.available.length,
      weight: 0,
      units: "lbs",
      date: new Date(),
      zone: "Ontario",
   });

   fisher.subscribers.map(setState);
}, 2000)
