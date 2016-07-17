import React, { Component, ScrollView, PropTypes, View, Text, Image, IntentAndroid } from 'react-native';
import { Card, Button, COLOR, TYPO } from 'react-native-material-design';
import AppStore from '../stores/AppStore';

export default class Welcome extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

   render() {
      const { navigator } = this.context;
      const theme = AppStore.getState().theme;

      return (
         <ScrollView>
            <View style={{paddingTop: 10}}></View>
               <View style={{flexDirection: 'row'}}>
               <View style={{flexDirection: 'column', flex: 0.5}}>
                  <Button text="AVAILABLE" primary={theme} theme="dark" raised/>
               </View>
               <View style={{flexDirection: 'column', flex: 0.5}}>
                  <Button text="RESERVED" primary={theme} raised onPress={()=> {navigator.forward()}}/>
               </View>
            </View>

            {
               function() {
                  var sample_data = [
                     {
                        name: "Pacific Cod",
                        weight: 150,
                        units: "lbs",
                        date: new Date(),
                        zone: "Steveston Harbour",
                     },
                  ];

                  function dateToString(date) {
                     var string = date.toString().split(" ");
                     string = string[0] + " " + string[1] + " " + string[2] + ", " + string[4];

                     return string;
                  }

                  // TODO date format
                  return sample_data.map(function(member) {
                     return (
                        <Card>
                           <Card.Body>
                              <View style={styles.column}>
                                 <View style={styles.row}>
                                    <Text style={{fontSize:20, flex:0.7}}> {member.name + ", " + member.weight + member.units} </Text>
                                    <Text style={{fontSize:12, flex:0.3, textAlign: 'right'}}> {dateToString(member.date)} </Text>
                                 </View>
                              </View>
                              <Text> Delivery Zone: {member.zone} </Text>
                              <Text> Order Requested for {member.weight + member.units} of {member.name}. </Text>
                           </Card.Body>
                           <Card.Actions position="right">
                              <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                           </Card.Actions>
                        </Card>
                     );
                  });
               }()
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
