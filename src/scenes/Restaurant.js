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
   }

   render() {
      const theme = AppStore.getState().theme;
      const { navigator } = this.context;

      return (
         <ScrollableTabView
            renderTabBar={(context) => {
               return (
                  <View
                     style={{
                        elevation: 4,
                        height: 30,
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        flexDirection:'row',
                        backgroundColor: COLOR[AppStore.state.theme+""+500].color,
                     }}>
                     {
                        context.tabs.map(function(tab, i) {
                           return (
                              <TouchableOpacity
                                 style={{
                                    flexDirection:'column',
                                    height: 30,
                                    flex: 1,
                                    borderBottomColor: '#fff',
                                    borderBottomWidth: (context.activeTab == i ? 3 : 0),
                                 }}
                                 onPress={() => {
                                    context.goToPage(i);
                                 }}>

                                 <Text
                                    style={{
                                       textAlign: "center",
                                       color: "#fff",
                                    }}>

                                    {tab}
                                 </Text>
                              </TouchableOpacity>
                           )
                        })
                     }
                  </View>
               );
            }}>

            <ScrollView tabLabel='AVAILABLE'><AvailableOrders /></ScrollView>
            <ScrollView tabLabel='HISTORY'><OrderHistory /></ScrollView>
            <ScrollView tabLabel='CART'><Cart /></ScrollView>
         </ScrollableTabView>
      );
   }
}
