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
      Coastline.fisher.reserved.subscribe(this);

      this.state.filter = "";
   }

   componentDidMount() {
      Coastline.fisher.reserved.subscribe(this);
   }

   componentWillUnmount() {
      Coastline.fisher.reserved.unsubscribe(this);
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
                     <Button text="AVAILABLE" primary={theme} raised onPress={()=> { navigator.to('fisherorders') }}/>
                  </View>
                  <View style={{flexDirection: 'column', flex: 0.5}}>
                     <Button text="RESERVED" primary={theme} theme="dark" raised/>
                  </View>
               </View>
            </View>

            {
               function(self) {
                  return Coastline.fisher.reserved.get(self, self.state.filter || "").map(function(member) {
                     return (
                        <View>
                           <Divider/>
                           <TouchableHighlight style={styles.column}  underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}>
                              <View style={styles.row}>
                                 <Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>
                                    {member.name + ", " + member.weight + member.units}
                                 </Text>
                                 <Text style={{flex:0.4, textAlign:'right'}}>
                                    {Coastline.dateToString(member.reserved)}
                                 </Text>
                              </View>
                           </TouchableHighlight>
                        </View>
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
      paddingHorizontal: 25,
      paddingVertical: 15,
      flexDirection: 'row',
      flex: 1,
      padding: 8
   }
};
