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

              <Card>
                <Card.Body>
                <View style={styles.column}>
                  <View style={styles.row}>
                    <Text style={{fontSize:20, flex:0.7}}>Pacific Cod, 150lbs</Text>
                    <Text style={{fontSize:12, flex:0.3, textAlign: 'right'}}>June 23, 13:10</Text>
                  </View>
                </View>
                  <Text>Delivery Zone: Steveston Harbour</Text>
                  <Text >Order Requested for 150lbs of Pacific Cod.</Text>
                </Card.Body>
              <Card.Actions position="right">
                <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
               </Card.Actions>
            </Card>

            <Card>
                  <Card.Body>
                  <View style={styles.column}>
                    <View style={styles.row}>
                      <Text style={{fontSize:20, flex:0.7}}>Halibut, 500lbs</Text>
                      <Text style={{fontSize:12, flex:0.3, textAlign: 'right'}}>June 23, 13:10</Text>
                    </View>
                  </View>
                     <Text>Delivery Zone: False Creek Harbour</Text>
                     <Text >Order Requested for 500lbs of Halibut (Gutted).</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  </Card.Actions>
            </Card>
            <Card>
                  <Card.Body>
                  <View style={styles.column}>
                    <View style={styles.row}>
                      <Text style={{fontSize:20, flex:0.7}}>Pacific Cod, 150lbs</Text>
                      <Text style={{fontSize:12, flex:0.3, textAlign: 'right'}}>June 23, 13:10</Text>
                    </View>
                  </View>
                     <Text>Delivery Zone: False Creek Harbour</Text>
                     <Text >Order Requested for 500lbs of Halibut (Gutted).</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  </Card.Actions>
            </Card>
            <Card>
                  <Card.Body>
                  <View style={styles.column}>
                    <View style={styles.row}>
                      <Text style={{fontSize:20, flex:0.7}}>Pacific Cod, 150lbs</Text>
                      <Text style={{fontSize:12, flex:0.3, textAlign: 'right'}}>June 23, 13:10</Text>
                    </View>
                  </View>
                     <Text>Delivery Zone: False Creek Harbour</Text>
                     <Text >Order Requested for 500lbs of Halibut (Gutted).</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  </Card.Actions>
            </Card>
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
