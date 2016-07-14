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
                <Button text="RESERVED" primary={theme} raised onPress={()=> {navigator.back()}}/>
              </View>
            </View>

              <Card>
                <Card.Body>
                  <Text style={{fontSize:20}}>Pacific Cod, 150lbs</Text>
                  <Text>Delivery Zone: Steveston Harbour</Text>
                  <Text >Order Requested for 150lbs of Pacific Cod.</Text>
                </Card.Body>
              <Card.Actions position="right">
                <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                <Button value="DISMISS" primary={theme}  />
               </Card.Actions>
            </Card>

            <Card>
                  <Card.Body>
                     <Text style={{fontSize:20}}>Halibut, 500lbs</Text>
                     <Text>Delivery Zone: False Creek Harbour</Text>
                     <Text >Order Requested for 500lbs of Halibut (Gutted).</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  <Button value="DISMISS" primary={theme} />
                  </Card.Actions>
            </Card>
            <Card>
                  <Card.Body>
                     <Text style={{fontSize:20}}>Halibut, 500lbs</Text>
                     <Text>Delivery Zone: False Creek Harbour</Text>
                     <Text >Order Requested for 500lbs of Halibut (Gutted).</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  <Button value="DISMISS" primary={theme} />
                  </Card.Actions>
            </Card>
            <Card>
                  <Card.Body>
                     <Text style={{fontSize:20}}>Halibut, 500lbs</Text>
                     <Text>Delivery Zone: False Creek Harbour</Text>
                     <Text >Order Requested for 500lbs of Halibut (Gutted).</Text>
                  </Card.Body>
                  <Card.Actions position="right">
                  <Button value="VIEW DETAILS" primary={theme}  onPress={() => { navigator.forward() }}/>
                  <Button value="DISMISS" primary={theme} />
                  </Card.Actions>
            </Card>
            </ScrollView>
        );
    }

}
