import alt from '../alt';
import StatusBarAndroid from 'react-native-android-statusbar';
import { COLOR } from 'react-native-material-design';
import Coastline from '../coastline';
var store = require('react-native-simple-store');


class AuthActions {

      login() {
         return Coastline.apiRequest('/api/login', 'POST', {
            email: 'robert@coastlinemarket.com',
            password: '123',
         }).then((res) => {
            store.save('token', res.token).then(() => {
               store.get('token').then((value) => console.log(value))
            });
            return res;
         });
      }

}

export default alt.createActions(AuthActions);
