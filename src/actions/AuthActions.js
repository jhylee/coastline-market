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
            console.log(res);
            if (res.accountClass == 'userAdmin') {
               return 'userAdmin';
            } else {
               store.save('token', res.token).then(() => {
               });
               return res.accountClass;
            }

         });
      };

      test() {
         store.get('token').then((value) => console.log(value))
      };

}

export default alt.createActions(AuthActions);
