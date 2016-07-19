var local = {
   fisher: {
      available: new Channel("available"),
   },
};

export default local;

function Channel(title) {
   var global = this;

   this.title = title;
   this.data = [];
   this.subscribers = [];

   function getSubscriber(context) {
      var result;

      global.subscribers.map(function(item) {
         if (item.context == context)
            result = item;
      });

      return result;
   }

   this.subscribe = function(context) {
      var subscriber = getSubscriber(context);

      if (!subscriber) {
         global.subscribers.push(new Subscriber(context, this));
      }

      return context;
   };
   this.unsubscribe = function(context) {
      var subscriber = getSubscriber(context);

      if (subscriber) {
         global.subscribers.splice(global.subscribers.indexOf(subscriber), 1);
      }

      return context;
   };
   this.get = function(context, filter) {
      var subscriber = getSubscriber(context);

      if (subscriber) {
         subscriber.state[global.title].splice(0, subscriber.state[global.title].length);
         filter = filter.toLowerCase();

         global.data.map(function(item) {
            if (item.name.toLowerCase().includes(filter) ||
                item.zone.toLowerCase().includes(filter))
                
               subscriber.state[global.title].push(item);
         });

         return subscriber.state[global.title];
      }
      else {
         return false;
      }
   };
   this.push = function(item) {
      global.data.unshift(item);
      global.subscribers.map(setState);
   };
}

function Subscriber(context, channel) {
   this.context = context;
   this.channel = channel;
   this.context.state = this.context.state || {};
   this.context.state[this.channel.title] = [];

   // ref
   this.state = this.context.state;
}

function setState(subscriber) {
   subscriber.context.setState(subscriber.context.state);
}

var dummyData = setInterval(function() {
   var name = ""
   "abcdefghijklmnopqrstuvwxyz123".split("").map(function(char) {
      if (Math.random() > 0.9)
         name += char;
   });
   local.fisher.available.push({
      name: name,
      weight: 100,
      units: "lbs",
      date: new Date(),
      zone: "Test Area",
   });
}, 2000);
