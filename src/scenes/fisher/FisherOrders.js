import React, { Component, ScrollView, PropTypes, View, Text, Image, IntentAndroid, TextInput } from 'react-native';
import { Card, Button, COLOR, TYPO } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';
import Coastline from '../../coastline';

export default class FisherOrders extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

   constructor(props) {
      super(props);
      Coastline.fisher.available.subscribe(this);

      this.state.filter = "";
   }

   componentDidMount() {
      Coastline.fisher.available.subscribe(this);
   }

   componentWillUnmount() {
      Coastline.fisher.available.unsubscribe(this);
   }

   render() {
      const theme = AppStore.getState().theme;
      const { navigator } = this.context;

      return (
         <ScrollView>
            <TextInput
               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
               onChangeText={(text) => {
                  this.state.filter = text;
                  this.setState(this.state);
               }}
               value={this.state.filter} />

            <View style={styles.tabSwitchContainer}>
               <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column', flex: 0.5}}>
                     <Button text="AVAILABLE" primary={theme} theme="dark" raised/>
                  </View>
                  <View style={{flexDirection: 'column', flex: 0.5}}>
                     <Button text="RESERVED" primary={theme} raised onPress={()=> { navigator.to('reservedorders') }}/>
                  </View>
               </View>
            </View>

            {
               function(self) {
                  return Coastline.fisher.available.get(self, self.state.filter || "").map(function(member) {
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
         </ScrollView>
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
