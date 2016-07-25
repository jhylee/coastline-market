import React, { Component, View, PropTypes, Image, Text, TextInput } from 'react-native';
import { Avatar, Subheader, COLOR, IconToggle, Icon, Button, Card } from 'react-native-material-design';
import Coastline from './coastline';
import AppStore from './stores/AppStore';
var store = require('react-native-simple-store');

export default class Load extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

	constructor(props) {
		super(props);

      /*store.get('token').then((token) => {
         store.get('accountClass').then((accountClass) => {
            const { navigator } = this.context;

            if (token && token != "") {
               Coastline.token = token;
               Coastline.init();

               if (accountClass == "userPurchaser") {
                  navigator.to('restaurants');
                  return;
               }
               else if (accountClass == "userSupplier") {
                  navigator.to('fisherorders');
                  return;
               }
               else {
                  navigator.to('login');
               }
            }
            else {
               navigator.to('login');
            }
         });
      });*/
	}

	render() {
      const { navigator } = this.context;
		const theme = AppStore.getState().theme;

		return (
			<View>
            <Text>Loading...</Text>
			</View>
		);
	}
}
