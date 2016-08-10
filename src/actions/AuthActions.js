import alt from '../alt';
import StatusBarAndroid from 'react-native-android-statusbar';
import { COLOR } from 'react-native-material-design';
import Coastline from '../coastline';
var store = require('react-native-simple-store');

class AuthActions {
   login(email, password) {
      return Coastline.apiRequest('/api/login', 'POST', {
         email: email,
         password: password
      }).then((res) => {
         Coastline.token = res.token;
         Coastline.user = res.user;
         Coastline.accountClass = res.accountClass;

         store.save('token', res.token);
         store.save('accountClass', res.accountClass);

         console.log(res);

         return res;
      });
   }
}

export default alt.createActions(AuthActions);
