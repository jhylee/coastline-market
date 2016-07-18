import React, { Component, View, ScrollView, PropTypes, Image, Text, TextInput } from 'react-native';
import { Avatar, Subheader, COLOR, IconToggle, Icon, Button, Card } from 'react-native-material-design';
import AppStore from '../../stores/AppStore';

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
			<View style={{backgroundColor:'#FFF', margin: 5, borderRadius: 2, elevation: 1, paddingHorizontal: 20}}>
			<TextInput
				 name="email"
				 style={styles.textInput}
				 placeholder={'Search for a product or fish type'} />
			</View>
			<Card>
						<Card.Media
									image={<Image source={require('./../../img/salmon.jpg')}/>}
									overlay>
						</Card.Media>
						<Card.Body>
						<View style={styles.column}>
							<View style={styles.row}>
								<Text style={{fontSize:20, flex:0.7, fontWeight: '500'}}>Pacific Salmon</Text>
								<Text style={{fontSize:16, flex:0.3, textAlign: 'right', fontWeight: '500'}}>$3.99/lb</Text>
							</View>
						</View>
							 <Text>Caught June 15, 2016</Text>
							 <Text>Delivered from Steveston Fish Wharf</Text>
						</Card.Body>
						<Card.Actions position="right">
						<Button value="ADD TO CART" primary={theme}  onPress={() => { navigator.forward() }}/>
						</Card.Actions>
			</Card>
			<Card>
						<Card.Media
									image={<Image source={require('./../../img/salmon.jpg')}/>}
									overlay>
						</Card.Media>
						<Card.Body>
						<View style={styles.column}>
							<View style={styles.row}>
								<Text style={{fontSize:20, flex:0.7, fontWeight: '500'}}>Pacific Salmon</Text>
								<Text style={{fontSize:16, flex:0.3, textAlign: 'right', fontWeight: '500'}}>$3.99/lb</Text>
							</View>
						</View>
							 <Text>Caught June 15, 2016</Text>
							 <Text>Delivered from Steveston Fish Wharf</Text>
						</Card.Body>
						<Card.Actions position="right">
						<Button value="ADD TO CART" primary={theme}  onPress={() => { navigator.forward() }}/>
						</Card.Actions>
			</Card>
			<Card>
						<Card.Media
									image={<Image source={require('./../../img/salmon.jpg')}/>}
									overlay>
						</Card.Media>
						<Card.Body>
						<View style={styles.column}>
							<View style={styles.row}>
								<Text style={{fontSize:20, flex:0.7, fontWeight: '500'}}>Pacific Salmon</Text>
								<Text style={{fontSize:16, flex:0.3, textAlign: 'right', fontWeight: '500'}}>$3.99/lb</Text>
							</View>
						</View>
							 <Text>Caught June 15, 2016</Text>
							 <Text>Delivered from Steveston Fish Wharf</Text>
						</Card.Body>
						<Card.Actions position="right">
						<Button value="ADD TO CART" primary={theme}  onPress={() => { navigator.forward() }}/>
						</Card.Actions>
			</Card>
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
		margin: 8,
		flex: 0.2
	},
	textInput: {
		color: '#455A64',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 15,
		margin: 0,
		borderRadius: 10,
		marginLeft: 0,
		marginRight: 0,
		fontSize: 15,
		height: 50,
		borderRadius: 2
	},
	column: {
		flexDirection: 'column',
		flex: 1
	},
	row: {
		flexDirection: 'row',
		flex: 1
	}
};
