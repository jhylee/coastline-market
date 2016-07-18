import React, { Component, PropTypes, View, ScrollView, Text, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import { Button, Subheader, TYPO, COLOR, Divider } from 'react-native-material-design';

import AppStore from '../../stores/AppStore';

export default class ReservedOrders extends Component {
  static contextTypes = {
      navigator: PropTypes.object.isRequired
  };

    render() {
        const theme = AppStore.getState().theme;
        const { navigator } = this.context;

        return (
            <ScrollView>
            <View style={styles.tabSwitchContainer}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', flex: 0.5}}>
                  <Button text="AVAILABLE" primary={theme} raised/>
                </View>
                <View style={{flexDirection: 'column', flex: 0.5}}>
                  <Button text="RESERVED" primary={theme} theme="dark" raised/>
                </View>
              </View>
            </View>
              <Divider/>
                <TouchableHighlight style={styles.column}  underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}>
                  <View style={styles.row}><Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>Pacific Cod, 500lbs</Text><Text style={{flex:0.4, textAlign:'right'}}>1:10PM 5/13/2016</Text></View>
                </TouchableHighlight>
              <Divider/>
              <TouchableHighlight style={styles.column}  underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}>
                <View style={styles.row}><Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>Pacific Cod, 500lbs</Text><Text style={{flex:0.4, textAlign:'right'}}>1:10PM 5/13/2016</Text></View>
              </TouchableHighlight>
              <Divider/>
              <TouchableHighlight style={styles.column}  underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}>
                <View style={styles.row}><Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>Pacific Cod, 500lbs</Text><Text style={{flex:0.4, textAlign:'right'}}>1:10PM 5/13/2016</Text></View>
              </TouchableHighlight>
              <Divider/>
              <TouchableHighlight style={styles.column}  underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}>
                <View style={styles.row}><Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>Pacific Cod, 500lbs</Text><Text style={{flex:0.4, textAlign:'right'}}>1:10PM 5/13/2016</Text></View>
              </TouchableHighlight>
              <Divider/>
              <TouchableHighlight style={styles.column}  underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}>
                <View style={styles.row}><Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>Pacific Cod, 500lbs</Text><Text style={{flex:0.4, textAlign:'right'}}>1:10PM 5/13/2016</Text></View>
              </TouchableHighlight>
              <Divider/>
            </ScrollView>
        );
    }

}

const styles = {
    content: {
        padding: 16
    },

    tabSwitchContainer: {
      padding: 15
    },
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
