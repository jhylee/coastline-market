import React, { Component, View, PropTypes, Image, Text, TextInput } from 'react-native';
import { Avatar, Subheader, COLOR, IconToggle, Icon, Button, Card } from 'react-native-material-design';
import AppStore from '../stores/AppStore';
import AuthActions from '../actions/AuthActions';

export default class Login extends Component {

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

	login = () => {
		const { navigator } = this.context;
		AuthActions.login(this.state.email, this.state.password).then((res) => {
			navigator.to('load');
		});
	}

	render() {
		const { navigator } = this.context;
		const theme = AppStore.getState().theme;

		return (
			<View>
			<Card>
						<Card.Body>
							<View style={styles.row}>
							<TextInput
						name="email"
						value={this.state.email}
						onChangeText={(text) => {
							this.state.email = text;
							this.setState(this.state);
						}}
	               style={styles.textInput}
								 keyboardType="email-address"
	               placeholder={'Your Email'} />
							<TextInput
								 name="password"
								 value={this.state.password}
								 onChangeText={(text) => {
									 this.state.password = text;
									 this.setState(this.state);
								 }}
								 style={styles.textInput}
								 secureTextEntry={true}
								 placeholder={'Your Password'} />
							</View>
						</Card.Body>
						<Card.Actions position="right">
							<Button value="Fisher" primary={theme} />
							<Button value="Restaurant" overrides={{textColor: 'E0E0E0'}}/>
							<Button value="Deliverer" overrides={{textColor: 'E0E0E0'}}/>
						</Card.Actions>
			</Card>
					<View style={{flexDirection: 'column', flex: 1}}>
						<Button value="SIGN UP/LOG IN" onPress={() => { this.login() }} overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}/>
					</View>
			</View>
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
	}
};
