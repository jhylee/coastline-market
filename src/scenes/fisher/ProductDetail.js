import React, { Component, ScrollView, View, Text, WebView, Image, TouchableHighlight, PropTypes, MapView } from 'react-native';
import { Button, Card, Divider, COLOR, TYPO, Icon  } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';

export default class ProductDetail extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

   constructor(props) {
      super(props);

      this.state = {};
      this.state.product = props.product;
      this.state.product.total =
         this.state.product.weight *
         this.state.product.priceCoastline +
         this.state.product.feeLogistics;

      this.state.product.taxTotal = (this.state.product.total - this.state.product.feeLogistics) * this.state.product.taxRate;
      this.state.product.grandTotal = this.state.product.taxTotal + this.state.product.total;

      this.state.product.total = Math.round(this.state.product.total*100)/100;
      this.state.product.taxTotal = Math.round(this.state.product.taxTotal*100)/100;
      this.state.product.grandTotal = Math.round(this.state.product.grandTotal*100)/100;
   }

   render() {
      const theme = AppStore.getState().theme;
      const { navigator } = this.context;

      return (
         <ScrollView>
            <View>
               <Card>
                  <Card.Body>
                     <Text style={[TYPO.paperFontHeadline, COLOR.paperBlack50]}>
                        {this.state.product.name}, {this.state.product.weight}{this.state.product.units}
                     </Text>
                     <Text> Market Price: ${this.state.product.priceMarket}/{this.state.product.units} </Text>
                     <Text> Coastline Price: ${this.state.product.priceCoastline}/{this.state.product.units} </Text>
                  </Card.Body>
                  <Divider />
                  <View style={{flexDirection: 'row'}}>
                     <Text style={{flexDirection:'column', flex:0.5}}>Logistics Fee</Text>
                     <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right'}}>- ${this.state.product.feeLogistics}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                     <Text style={{flexDirection:'column', flex:0.5}}>Taxes</Text>
                     <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right'}}>- ${this.state.product.taxTotal}</Text>
                  </View>
                  <Divider />
                  <View style={{flexDirection: 'row'}}>
                     <Text style={{flexDirection:'column', flex:0.5, fontWeight: '500'}}>Total</Text>
                     <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right', fontWeight: '500'}}>${this.state.product.grandTotal}</Text>
                  </View>
                  <Card.Actions position="right">
                     <Button value="VIEW INVOICE DETAILS" primary={theme}/>
                  </Card.Actions>
               </Card>
               <Card>
                  <MapView
                     style={{height: 200, margin: 0}}
                     region={{
                        latitude: 39.06,
                        longitude: -95.22,
                     }}
                     overlays={[{
                        coordinates:[
                           {latitude: 32.47, longitude: -107.85},
                           {latitude: 45.13, longitude: -94.48 },
                           {latitude: 39.27, longitude: -83.25 },
                           {latitude: 32.47, longitude: -107.85},
                        ],
                        strokeColor: '#f007',
                        lineWidth: 3,
                     }]}/>
                  <Card.Actions position="right">
                     <View style ={{paddingTop: 10, paddingLeft: 5}}></View>
                     <Button value="GET MAP DIRECTIONS" primary={theme}  />
                  </Card.Actions>
               </Card>
               <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column', flex: 0.5}}>
                     <Button onPress={()=> {navigator.back()}} value="CANCEL" overrides= {{backgroundColor: '#B71C1C', textColor: '#FFF'}} raised={true}/>
                  </View>
                  <View style={{flexDirection: 'column', flex: 0.5}}>
                     <Button value="ACCEPT" overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}}  raised={true}/>
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
