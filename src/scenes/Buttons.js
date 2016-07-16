import React, { Component, PropTypes, View, ScrollView, Text, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import { Button, Subheader, TYPO, COLOR, Divider } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class Buttons extends Component {
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
                <TouchableHighlight style={styles.itemRow}  underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}>
                  <Text style={{textAlign: 'left'}}>Hello World</Text>
                </TouchableHighlight>
              <Divider/>
                <TouchableHighlight style={styles.itemRow} underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}><Text style={[TYPO.paperSubhead, COLOR.paperBlack50]}>Pacific Cod, 2/1/2016</Text></TouchableHighlight>
              <Divider/>
                <TouchableHighlight style={styles.itemRow} underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}><Text style={{textAlign: 'left'}}>Halibut, 1/20/2016</Text></TouchableHighlight>
              <Divider/>
                <TouchableHighlight style={styles.itemRow} underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}><Text style={{textAlign: 'left'}}>Coho Salmon, 1/14/2016</Text></TouchableHighlight>
              <Divider/>
                <TouchableHighlight style={styles.itemRow} underlayColor="#ECEFF1" onPress={()=> {navigator.forward()}}><Text style={{textAlign: 'left'}}>Pacific Salmon, 1/12/2016</Text></TouchableHighlight>
              <Divider/>
            </ScrollView>
        );
    }

}

const styles = {
    content: {
        padding: 16
    },
    itemRow: {
      padding: 20
    },
    tabSwitchContainer: {
      padding: 15
    }
};
