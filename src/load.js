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
         store.get('accountClass').then((accountClass) => {*/

         /*});
      });*/
	}

	render() {
      const { navigator } = this.context;
		const theme = AppStore.getState().theme;

      setTimeout(function() {
         let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1N2E5Yjk5OTJmOWI3Zjg4NTM4MGZjMWQiLCJpYXQiOjE0NzA4MzQzMzgzNTMsImV4cCI6MTQ3MzQyNjMzODM1M30.Z7vL11Nnz6RDrMrNFfIv1u3nzJI0DGExB-H-mQV3UZ4";
         let accountClass = "supplier";

         if (token && token != "") {
            Coastline.token = token;
            Coastline.accountClass = accountClass;
            Coastline.init();

            if (accountClass == "purchaser") {
               navigator.to('restaurants');
               return;
            }
            else if (accountClass == "supplier") {
               navigator.to('fisher');
               return;
            }
            else {
               navigator.to('login');
            }
         }
         else {
            navigator.to('login');
         }
      }, 100);

		return (
			<View>
            <Text>Loading...</Text>
			</View>
		);
	}
}
