import React, { Component, PropTypes, View, ScrollView, Text, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import { Button, Subheader, TYPO, COLOR, Divider, Card } from 'react-native-material-design';

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
            <Card>
              <Card.Body>
                <View style={styles.column}>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>Pickup 1: May 20, 2016 13:14 PST</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14}}>Steveston Fishermans Harbour, Dock 3</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14}}>14484 Steveston, British Columbia V4N4W1</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14, fontWeight:'500'}}>Deliver to Joey, 48 Burrard Street by 15:15 PST</Text>
                </View>
              </Card.Body>
              <View style={styles.column}>
                <View style={styles.row}>
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  <Button value="MARK COMPLETE" primary={theme}  onPress={() => { navigator.forward() }}/>
                </View>
              </View>
            </Card>
            <Card>
              <Card.Body>
                <View style={styles.column}>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>Pickup 2: May 20, 2016 13:34 PST</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14}}>Steveston Fishermans Harbour, Dock 3</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14}}>14484 Steveston, British Columbia V4N4W1</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14, fontWeight:'500'}}>Deliver to Joey, 48 Burrard Street by 15:15 PST</Text>

                </View>
              </Card.Body>
              <View style={styles.column}>
                <View style={styles.row}>
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  <Button value="MARK COMPLETE" primary={theme}  onPress={() => { navigator.forward() }}/>
                </View>
              </View>
            </Card>
            <Card>
              <Card.Body>
                <View style={styles.column}>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:18, fontWeight: '500'}}>Pickup 3: May 20, 2016 13:50 PST</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14}}>Steveston Fishermans Harbour, Dock 3</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14}}>14484 Steveston, British Columbia V4N4W1</Text>
                  <Text style={{textAlign: 'left', flex: 0.6, fontSize:14, fontWeight:'500'}}>Deliver to Joey, 48 Burrard Street by 15:15 PST</Text>

                </View>
              </Card.Body>
              <View style={styles.column}>
                <View style={styles.row}>
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  <Button value="MARK COMPLETE" primary={theme}  onPress={() => { navigator.forward() }}/>
                </View>
              </View>
            </Card>
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
      paddingVertical: 5,
      flexDirection: 'row',
      flex: 1,
      padding: 8
    }
};
