import React, { Component, View, ScrollView, PropTypes, Image, Text, TextInput } from 'react-native';
import { Avatar, Divider, COLOR, IconToggle, Icon, Button, Card } from 'react-native-material-design';
import AppStore from '../stores/AppStore';

export default class AvailableOrders extends Component {

	constructor(props) {
		super(props);
		this.state = {
			badgeOne: 3,
			badgeTwo: 6,
			badgeThree: 9
		};
	}
	static contextTypes = {
			navigator: PropTypes.object.isRequired
	};

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
						image={<Image source={require('./../img/salmon.jpg')}/>}
						overlay>
					</Card.Media>

						<Card.Body>
						<View style={styles.column}>
							<View style={styles.row}>
								<Text style={{fontSize:20, flex:0.7, fontWeight: '500'}}>Pacific Salmon</Text>
								<Text style={{fontSize:16, flex:0.3, textAlign: 'right', fontWeight: '500'}}>$3.99/lb</Text>
							</View>
							<View style={styles.row}>
								<Text style={{fontSize:13, flex:0.5}}>Caught 6/15/2016</Text>
								<Text style={{fontSize:13, flex:0.5, textAlign: 'right'}}>Steveston Fish Wharf</Text>
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
							<Text style={{flex: 1.6, marginTop: 2, textAlign: 'left'}}>Delivery between 5PM - 9PM</Text>
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
							 placeholder={'Desired Quantity'} />
							 <Text style={{flex:0.2, marginLeft: 10, marginTop: 15, fontSize: 16}}>Lbs</Text>
							 </View>
							 </View>

						<Divider/>
						<View style={styles.column}>
						<View style={styles.row}>
							<Text style={{flex:0.3, textAlign:'left', fontSize: 13}}>Tax</Text>
							<Text style={{flex:0.7, textAlign:'right', fontSize: 13}}>$10.15</Text>
						</View>
						<View style={styles.row}>
							<Text style={{flex:0.3, textAlign:'left', fontSize: 13}}>Delivery</Text>
							<Text style={{flex:0.7, textAlign:'right', fontSize: 13}}>$10.00</Text>
						</View>
							<View style={styles.row}>
								<Text style={{flex:0.3, textAlign:'left', fontSize: 16, fontWeight: '500'}}>Total</Text>
								<Text style={{flex:0.7, textAlign:'right', fontSize: 16, fontWeight: '500'}}>$160.15</Text>
							</View>
						</View>

			</View>
			<Button onPress={()=> {navigator.forward()}} value="ADD TO CART		($160.15)" overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}/>

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
		flex: 0.8
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
