import React, { Component, ScrollView, View, Text, WebView, Image, TouchableHighlight, PropTypes } from 'react-native';
import { Button, Card, Divider, COLOR, TYPO, Icon  } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';
import Coastline from '../../coastline';

export default class ProductDetail extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

   constructor(props) {
      super(props);

      this.state = {};
      this.state.product = props.product;
   }

   render() {
      const theme = AppStore.getState().theme;
      const { navigator } = this.context;

      let product = this.state.product;
      let name = product.product.name;
      let weight = product.quantity;
      let units = "lbs";
      let date = Coastline.dateToString(product.order.date);
      let priceMarket = product.sellingPrice;
      let priceCoastline = product.purchasePrice;

      return (
         <ScrollView>
            <View>
               <Card>
                  <Card.Body>
                     <Text style={[TYPO.paperFontHeadline, COLOR.paperBlack50]}>
                        {name}, {weight}{units}
                     </Text>
                     <Text> Market Price: ${priceMarket}/{units} </Text>
                     <Text> Coastline Price: ${priceCoastline}/{units} </Text>
                  </Card.Body>
                  <Divider />
                  {/*<View style={{flexDirection: 'row'}}>
                     <Text style={{flexDirection:'column', flex:0.5}}>Logistics Fee</Text>
                     <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right'}}>- ${this.state.product.feeLogistics}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                     <Text style={{flexDirection:'column', flex:0.5}}>Taxes</Text>
                     <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right'}}>- ${Coastline.itemTotals(this.state.product).tax}</Text>
                  </View>*/}
                  <Divider />
                  <View style={{flexDirection: 'row'}}>
                     <Text style={{flexDirection:'column', flex:0.5, fontWeight: '500'}}>Total</Text>
                     <Text style={{flexDirection:'column', flex:0.5, textAlign: 'right', fontWeight: '500'}}>${Coastline.itemTotals(this.state.product).grand}</Text>
                  </View>
                  <Card.Actions position="right">
                     <Button value="VIEW INVOICE DETAILS" primary={theme}/>
                  </Card.Actions>
               </Card>
               <Card>
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
                     <Button value={this.state.product.status == "reserved" ? "REMOVE" : "ACCEPT"} overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}
                        onPress={() => {
                           Coastline.fisher.reserve(this.state.product);
                           navigator.back();
                        }}
                     />
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
   },
};
