import React, { Component, View, ScrollView, PropTypes, Image, Text, TextInput } from 'react-native';
import { Avatar, Divider, COLOR, IconToggle, Icon, Button, Card } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';
import Coastline from '../../coastline';

export default class AvailableOrders extends Component {
   static contextTypes = {
      navigator: PropTypes.object.isRequired
   };

	constructor(props) {
		super(props);
		this.state = {
			badgeOne: 3,
			badgeTwo: 6,
			badgeThree: 9
		};

      this.state.product = props.product;
      this.state.product.weight = 0;
      this.state.product.grandTotal = 0;
	}

	incrementBadge = (badge) => {
		this.setState({[badge]: this.state[badge] + 1});
	};

	render() {
		const { navigator } = this.context;
		const theme = AppStore.getState().theme;

		return (
			<ScrollView>
   			<Card>
   				<Card.Media
   					image={<Image source={require('./../../img/salmon.jpg')}/>}
   					height= {120}
   					overlay />

   				<Card.Body>
   					<View style={styles.column}>
   						<View style={styles.row}>
   							<Text style={{fontSize:20, flex:0.7, fontWeight: '500'}}>{this.state.product.name}</Text>
   							<Text style={{fontSize:16, flex:0.3, textAlign: 'right', fontWeight: '500'}}>${this.state.product.priceCoastline}/{this.state.product.units}</Text>
   						</View>
   						<View style={styles.row}>
   							<Text style={{fontSize:13, flex:0.5}}>Caught {Coastline.dateToString(this.state.product.date)}</Text>
   							<Text style={{fontSize:13, flex:0.5, textAlign: 'right'}}>{this.state.product.zone}</Text>
   						</View>
   					</View>
   				</Card.Body>
   			</Card>

   			<View style={{backgroundColor:'#E0E0E0', margin: 5, borderRadius: 2, elevation: 1, paddingHorizontal: 15, flexDirection: 'column', flex: 2}}>
   				<View style={styles.column}>
   					<View style={styles.row}>
   						<Icon
   							name="schedule"
   							color="paperGrey900"
   							style={styles.icon}
   							size={15}
   							/>
   							<Text style={{flex: 1.6, marginTop: 2, textAlign: 'left'}}>
                           Delivery between {Coastline.dateToString(new Date((0 - this.state.product.deliveryTime) + this.state.product.deliveryTimeMin))} - {Coastline.dateToString(new Date((0 - this.state.product.deliveryTime) + this.state.product.deliveryTimeMax))}
                        </Text>
   					</View>
   				</View>
   			</View>

   			<View style={{backgroundColor:'#FFF', margin: 5, borderRadius: 2, elevation: 1, paddingHorizontal: 20}}>
               <View style={styles.column}>
                  <View style={styles.row}>
                     <TextInput
                        name="quantity"
                        keyboardType="numeric"
                        style={styles.textInput}
                        placeholder={'Desired Quantity'}
                        onChangeText={(text) => {
                           this.state.product.weight = text;
                           this.setState(this.state);
                        }}
                        value={this.state.product.weight} />
                     <Text style={{flex:0.1, marginLeft: 10, marginTop: 15, fontSize: 16}}>Lbs</Text>
                  </View>
               </View>
   			</View>
   			<Button onPress={()=> {navigator.forward()}} value={"ADD TO CART ($" + Coastline.itemTotals(this.state.product).grand + ")"} overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}/>
   		</ScrollView>
		);
	}
}

const styles = {
	avatarContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16
	},
	rowContainer: {
		flexDirection: 'row',
		flex: 1,
		marginTop: 10,
		backgroundColor: '#455A64',
		elevation: 1
	},
	icon: {
		marginVertical: 5,
		marginHorizontal: 6,
		flexDirection: 'row',
		flex: 0.4,
		textAlign: 'right'
	},
	textInput: {
		color: '#455A64',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 5,
		margin: 0,
		borderRadius: 10,
		marginLeft: 0,
		marginRight: 0,
		fontSize: 15,
		height: 50,
		borderRadius: 2,
		flex: 0.9
	},
	column: {
		flexDirection: 'column',
		flex: 1
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		padding: 8
	}
};
