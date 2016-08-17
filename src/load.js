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

      console.log("freeze -2");

      let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1N2E5Yjk5MDJmOWI3Zjg4NTM4MGZjMWMiLCJpYXQiOjE0NzE0NTU4MjQyNTQsImV4cCI6MTQ3NDA0NzgyNDI1NH0.xgOCWcwkZZ1KYlXLePyuPEcBMOLRXCkMbKHxoetLf2A";
      let accountClass = "purchaser";

      if (token && token != "") {
         Coastline.token = token;
         Coastline.accountClass = accountClass;
         Coastline.init();
         
         if (accountClass == "purchaser") {
            navigator.to('restaurant');
         }
         else if (accountClass == "supplier") {
            navigator.to('fisher');
         }
         else {
            navigator.to('login');
         }
      }
      else {
         navigator.to('login');
      }

		return (
			<View>
            <Text>Loading...</Text>
			</View>
		);
	}
}
