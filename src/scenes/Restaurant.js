import React, { Component, PropTypes, View, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Subheader, TYPO, COLOR, Divider, Card } from 'react-native-material-design';
import AppStore from '../stores/AppStore';
import Coastline from '../coastline';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import AvailableOrders from './restaurant/AvailableOrders';
import Cart from './restaurant/Cart';
import OrderHistory from './restaurant/OrderHistory';
import Payment from './restaurant/Payment';
import ProductDetail from './restaurant/ProductDetail';
import Route from './restaurant/Route';

export default class Restaurant extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

   constructor(props) {
      super(props);
      this.state = {};
      this.state.scroll = 0;
   }

   render() {
      const theme = AppStore.getState().theme;
      const { navigator } = this.context;

      return (
            <ScrollableTabView
               renderTabBar={(context) => Coastline.renderTabBar(context, this.state.scroll)}
               initialPage={this.props.tab || 0}
               onScroll={(float) => {
                  this.state.scroll = float;
                  this.setState(this.state);
               }}>
               <ScrollView tabLabel='AVAILABLE'><AvailableOrders /></ScrollView>
               <ScrollView tabLabel='HISTORY'><OrderHistory /></ScrollView>
               <ScrollView tabLabel='CART'><Cart /></ScrollView>
            </ScrollableTabView>
      );
   }
}
