import React, { Component, ScrollView, View, Text, WebView, Image, TouchableHighlight, PropTypes } from 'react-native';
import { Button, Card, Divider, COLOR, TYPO, Icon, Subheader  } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';


export default class PickUpDetails extends Component {
  static contextTypes = {
      navigator: PropTypes.object.isRequired
  };

    render() {
      const theme = AppStore.getState().theme;
      const { navigator } = this.context;


        return (

          <ScrollView>
              <View>
              <Card>
                    <Card.Body>
                    <Text style={[TYPO.paperFontHeadline, COLOR.paperBlack50]}>Pacific Cod, 400lbs</Text>
                       <Text >Steveston Fishermans Harbour, Dock 3, 14484 Steveston, British Columbia V4N4W1</Text>
                       <Text >Pickup from John Rettinger, FV Marie</Text>
                       <Text >Pickup at 14:13 PST, Dropoff to Joey, 48 Burrard Street by 15:15 PST</Text>

                    </Card.Body>
                    <Card.Actions position="right">
                    <Button value="CONTACT FISHER" primary={theme}/>
                    </Card.Actions>
              </Card>
              <Card>
                    <Card.Media
                          image={<Image source={require('./../../img/welcome.png')}/>}
                          overlay
                          height={120}>
                          <Text style={{color:'#FFF', fontSize:16, fontWeight: '500'}} >Seafood Pickup Location</Text>

                    </Card.Media>
                    <Card.Actions position="right">
                    <View style ={{paddingTop: 10, paddingLeft: 5}}>
                    </View>
                    <Button value="GET MAP DIRECTIONS" primary={theme} />
                    </Card.Actions>
              </Card>
              <Card>
                    <Card.Media
                          image={<Image source={require('./../../img/welcome.png')}/>}
                          overlay
                          height={120}>
                          <Text style={{color:'#FFF', fontSize:16, fontWeight: '500'}} >Seafood Dropoff Location</Text>

                    </Card.Media>
                    <Card.Actions position="right">
                    <View style ={{paddingTop: 10, paddingLeft: 5}}>
                    </View>
                    <Button value="GET MAP DIRECTIONS" primary={theme} />
                    </Card.Actions>
              </Card>

           </View>
           <Button onPress={()=> {navigator.back()}} value="MARK AS COMPLETE" overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}/>

           </ScrollView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        margin: 16
    }
};
