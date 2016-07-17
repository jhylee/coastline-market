import React, { Component, View, ScrollView, PropTypes, Image, Text, TextInput } from 'react-native';
import { Avatar, Divider, COLOR, TYPO, IconToggle, Icon, Button, Card } from 'react-native-material-design';
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
						image={<Image source={require('./../img/welcome.png')}/>}
						overlay>
            <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>Delivering To 60 Harbord St, Toronto ON</Text>
					</Card.Media>

						<Card.Body>
						<View style={styles.column}>
							<View style={styles.row}>
              <TextInput
                 name="note"
                 style={styles.textInput}
                 placeholder={'Add delivery note...'} />
							</View>
							<View style={styles.row}>
								<Text style={{fontSize:13, flex:0.5}}>Pacific Salmon x 400lbs</Text>
								<Text style={{fontSize:13, flex:0.5, textAlign: 'right'}}>$159.12</Text>
							</View>
              <View style={styles.row}>
                <Text style={{fontSize:13, flex:0.5}}>Subtotal</Text>
                <Text style={{fontSize:13, flex:0.5, textAlign: 'right'}}>$159.12</Text>
              </View>
              <View style={styles.row}>
                <Text style={{fontSize:13, flex:0.5}}>Tax</Text>
                <Text style={{fontSize:13, flex:0.5, textAlign: 'right'}}>$4.01</Text>
              </View>
              <View style={styles.row}>
                <Text style={{fontSize:13, flex:0.5}}>Delivery Fee</Text>
                <Text style={{fontSize:13, flex:0.5, textAlign: 'right'}}>$10</Text>
              </View>
              <Divider/>
              <View style={styles.row}>
                <Text style={{fontSize:13, flex:0.5, fontWeight: '500'}}>Total</Text>
                <Text style={{fontSize:13, flex:0.5, fontWeight: '500', textAlign: 'right'}}>$189.12</Text>
              </View>
						</View>
					</Card.Body>

			</Card>

			<Button onPress={()=> {navigator.forward()}} value="CHECKOUT" overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}/>

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
