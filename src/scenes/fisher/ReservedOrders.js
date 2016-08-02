import React, { Component, PropTypes, View, ScrollView, Text, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback, TouchableHighlight, TextInput } from 'react-native';
import { Button, Subheader, TYPO, COLOR, Divider } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';
import Coastline from '../../coastline';

export default class ReservedOrders extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

   constructor(props) {
      super(props);
      Coastline.addContext(this);
   }

   componentDidMount() {
      Coastline.addContext(this);
   }

   componentWillUnmount() {
      Coastline.removeContext(this);
   }

   render() {
      const theme = AppStore.getState().theme;
      const { navigator } = this.context;

      return (
         <View>
            {
               function(self) {
                  return Coastline.fisher.getReserved().map(function(member) {
                     let name = member.product.name;
                     let weight = member.quantity;
                     let units = "lbs";
                     let date = Coastline.dateToString(member.order.date);

                     return (
                        <View>
                           <Divider/>
                           <TouchableHighlight style={styles.column}  underlayColor="#ECEFF1" onPress={()=>{navigator.forward('productdetail', undefined, {product: member})}}>
                              <View style={styles.row}>
                                 <Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>
                                    {name + ", " + weight + units}
                                 </Text>
                                 <Text style={{flex:0.4, textAlign:'right'}}>
                                    {date}
                                 </Text>
                              </View>
                           </TouchableHighlight>
                        </View>
                     );
                  });
               }(this)
            }
         </View>
      );
   }
}

const styles = {
   column: {
      flexDirection: 'column',
      flex: 1
   },
   row: {
      paddingHorizontal: 25,
      paddingVertical: 15,
      flexDirection: 'row',
      flex: 1,
      padding: 8
   }
};
