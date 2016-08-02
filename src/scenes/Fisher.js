import React, { Component, PropTypes, View, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Subheader, TYPO, COLOR, Divider, Card } from 'react-native-material-design';
import AppStore from '../stores/AppStore';
import Coastline from '../coastline';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import FisherOrders from './fisher/FisherOrders';
import ReservedOrders from './fisher/ReservedOrders';

export default class Fisher extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

   constructor(props) {
      super(props);
   }

   render() {
      const theme = AppStore.getState().theme;
      const { navigator } = this.context;

      return (
         <ScrollableTabView renderTabBar={(context) => Coastline.renderTabBar(context)}>
            <ScrollView tabLabel='AVAILABLE'><FisherOrders /></ScrollView>
            <ScrollView tabLabel='RESERVED'><ReservedOrders /></ScrollView>
         </ScrollableTabView>
      );
   }
}
