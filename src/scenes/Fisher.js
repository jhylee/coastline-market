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
                                    borderBottomWidth: (context.activeTab == i ? 3 : 0)
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

            <ScrollView tabLabel='AVAILABLE'><FisherOrders /></ScrollView>
            <ScrollView tabLabel='RESERVED'><ReservedOrders /></ScrollView>
         </ScrollableTabView>
      );
   }
}
