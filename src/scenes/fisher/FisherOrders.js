import React, { Component, PropTypes, View, ScrollView, Text, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback, TouchableHighlight, TextInput } from 'react-native';
import { Button, Subheader, TYPO, COLOR, Divider, Card } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';
import Coastline from '../../coastline';

export default class FisherOrders extends Component {
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
                  return Coastline.fisher.getAvailable().map(function(member) {
                     return (
                        <Card>
                           <Card.Body>
                              <View style={styles.column}>
                                 <View style={styles.row}>
                                    <Text style={{fontSize:20, flex:0.7}}> {member.name + ", " + member.weight + member.units} </Text>
                                    <Text style={{fontSize:12, flex:0.3, textAlign: 'right'}}> {Coastline.dateToString(member.date)} </Text>
                                 </View>
                              </View>
                              <Text> Delivery Zone: {member.zone} </Text>
                              <Text> Order Requested for {member.weight + member.units} of {member.name}. </Text>
                           </Card.Body>
                           <Card.Actions position="right">
                              <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward('productdetail', undefined, {product: member}) }}/>
                           </Card.Actions>
                        </Card>
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
      flexDirection: 'row',
      flex: 1
   }
};
