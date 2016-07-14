import React, { Component, ScrollView, View, Text, WebView, Image } from 'react-native';
import { Button, Card, Divider, COLOR, TYPO, Icon  } from 'react-native-material-design';


export default class Avatars extends Component {


    render() {

        return (
          <ScrollView>

              <View>
              <Card>
                    <Card.Body>
                    <Text style={[TYPO.paperFontHeadline, COLOR.paperBlack50]}>Pacific Cod, 150lbs</Text>
                       <Text >Market Price: $4.99/lb</Text>
                       <Text >Coastline Price: $6.25/lb</Text>
                    </Card.Body>
                    <Divider />
                    <View style={{flexDirection: 'row'}}><Text style={{flexDirection:'column', flex:0.5}}>Logistics Fee</Text>
                    <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right'}}>- $22.99</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}><Text style={{flexDirection:'column', flex:0.5}}>Taxes</Text>
                    <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right'}}>- $12.23</Text>
                    </View>
                    <Divider />
                    <View style={{flexDirection: 'row'}}><Text style={{flexDirection:'column', flex:0.5, fontWeight: '500'}}>Total</Text>
                    <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right', fontWeight: '500'}}>$864.78</Text>
                    </View>
                    <Card.Actions position="right">
                    <Button value="VIEW INVOICE DETAILS"/>
                    </Card.Actions>
              </Card>



              <Card>
                    <Card.Media
                          image={<Image source={require('./../img/welcome.png')} />}
                          overlay>
                          <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>Deliver to ZipCar at Dock 3, Steveston Harbour</Text>
                    </Card.Media>
                    <Card.Actions position="right">
                    <View style ={{paddingTop: 10, paddingLeft: 5}}>
                    </View>
                    <Button value="GET MAP DIRECTIONS" />
                    </Card.Actions>
              </Card>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', flex: 0.5}}>
                  <Button style={{flexDirection: 'column', flex: 1}} value="CANCEL" overrides= {{backgroundColor: '#B71C1C', textColor: '#FFF'}} onPress={()=> {navigator.back()}} raised={true}/>
                </View>
                <View style={{flexDirection: 'column', flex: 0.5}}>
                  <Button value="CONFIRM" overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}}  onPress={()=> {navigator.back()}} raised={true}/>
                </View>
              </View>
           </View>
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
