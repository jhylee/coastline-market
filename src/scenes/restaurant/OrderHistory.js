import React, { Component, View, Image, Text, TouchableHighlight, ScrollView } from 'react-native';
import { Subheader, Divider, CheckboxGroup, Card, Icon, Button } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';
import Coastline from '../../coastline';

export default class Route extends Component {
   render() {
      const theme = AppStore.getState().theme;
      let total = 0;

      return (
			<ScrollView>
            {
               function(self) {
                  return Coastline.restaurant.getHistory().map(function(member) {
                     return (
                        <View>
                           <View style={{backgroundColor:'#FFF', margin: 15, borderRadius: 2, elevation: 2, padding: 20}}>
                              <View style={styles.column}>
                                 {
                                    (member.items || []).map(function(item) {
                                       total += item.quantity*item.purchasePrice;

                                       return (
                                          <View style={styles.row}>
                                             <Text style={{fontSize:16, flex:0.7}}>{item.product.name}</Text>
                                             <Text style={{fontSize:12, marginTop:3, flex:0.3}}>x {item.quantity}lbs</Text>
                                          </View>
                                       );
                                    })
                                 }
                                 <View style={styles.row}>
                                    <Text style={{fontSize:16, flex:0.7, fontWeight: '500'}}>Total: ${Math.round(total*100)/100}</Text>
                                    <TouchableHighlight underlayColor={'#E0E0E0'} style={{padding:2, marginTop: 3, borderRadius:2}}>
                                    <Text style={{fontSize:12, flex:0.3}}>VIEW RECEIPT</Text>
                                    </TouchableHighlight>
                                 </View>
                              </View>
                              <Divider/>
                              <Button value="REORDER" overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}/>
                           </View>
                        </View>
                     );
                  });
               }(this)
            }
         </ScrollView>
      );

      return (
         <View>
            <View style={{backgroundColor:'#FFF', margin: 15, borderRadius: 2, elevation: 2, padding: 20}}>
               <View style={styles.column}>
                  <View style={styles.row}>
                     <Text style={{fontSize:16, flex:0.7}}>Pacific Salmon</Text>
                     <Text style={{fontSize:12, marginTop:3, flex:0.3}}>x 400lbs</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={{fontSize:16, flex:0.7, fontWeight: '500'}}>Total: $160.10</Text>
                     <TouchableHighlight underlayColor={'#E0E0E0'} style={{padding:2, marginTop: 3, borderRadius:2}}>
                     <Text style={{fontSize:12, flex:0.3}}>VIEW RECEIPT</Text>
                     </TouchableHighlight>
                  </View>
               </View>
               <Divider/>
               <Button value="REORDER" overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}/>
            </View>
         </View>
      );
   }
}

const styles = {
   avatarContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16
   },
   rowContainer: {
      flexDirection: 'row',
      flex: 1,
      marginTop: 10,
      backgroundColor: '#455A64',
      elevation: 1
   },
   icon: {
      marginVertical: 5,
      marginHorizontal: 1,
      textAlign: 'right',
      flex: 0.1
   },

   textInput: {
      color: '#455A64',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      margin: 0,
      borderRadius: 10,
      marginLeft: 0,
      marginRight: 0,
      fontSize: 15,
      height: 50,
      borderRadius: 2,
      flex: 0.8
   },
   column: {
      flexDirection: 'column',
      flex: 1
   },
   row: {
      flexDirection: 'row',
      flex: 1,
      paddingHorizontal: 8,
      paddingVertical: 5,
      marginVertical: 3
   }
};
