import React, { Component, View, ScrollView, PropTypes, Image, Text, TextInput } from 'react-native';
import { Avatar, Subheader, COLOR, IconToggle, Icon, Button, Card } from 'react-native-material-design';
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

      Coastline.addContext(this);
   }

   componentDidMount() {
      Coastline.addContext(this);
   }

   componentWillUnmount() {
      Coastline.removeContext(this);
   }

	incrementBadge = (badge) => {
		this.setState({[badge]: this.state[badge] + 1});
	};

	render() {
		const { navigator } = this.context;
		const theme = AppStore.getState().theme;

		return (
			<ScrollView>
            {
               function(self) {
                  return Coastline.restaurant.getAvailable().map(function(member) {
                     return (
                        <Card>
         						<Card.Media
   									image={<Image source={require('./../../img/salmon.jpg')}/>}
   									overlay />
         						<Card.Body>
            						<View style={styles.column}>
            							<View style={styles.row}>
            								<Text style={{fontSize:20, flex:0.7, fontWeight: '500'}}>
                                       {member.name}
                                    </Text>
            								<Text style={{fontSize:16, flex:0.3, textAlign: 'right', fontWeight: '500'}}>
                                       ${member.priceCoastline}/{member.units}
                                    </Text>
            							</View>
            						</View>
         							<Text>Caught {Coastline.dateToString(member.date)}</Text>
         							<Text>Delivered from {member.zone}</Text>
         						</Card.Body>
         						<Card.Actions position="right">
         						   <Button value="ADD TO CART" primary={theme}  onPress={() => { navigator.forward('productdetail', undefined, {product: member}) }}/>
         						</Card.Actions>
               			</Card>
                     );
                  });
               }(this)
            }
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
