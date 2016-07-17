import React, { Component, View, Image, Text } from 'react-native';
import { Subheader, Divider, CheckboxGroup, Card, Icon, Button } from 'react-native-material-design';
import AppStore from '../stores/AppStore';

export default class Route extends Component {

    render() {
      const theme = AppStore.getState().theme;
        return (
            <View>
            <CheckboxGroup
                primary={theme}
                checked={[1, 2, 3]}
                items={[{
                    value: 1, label: 'Order Accepted', disabled: true
                }, {
                    value: 2, label: 'Fish Picked Up by Delivery', disabled: true
                }, {
                    value: 3, label: 'Courier is on the way', disabled: true
                }, {
                    value: 4, label: 'Fish is arriving!', disabled: true
                }]}
            />
            <Card>
                <Card.Media
                  image={<Image source={require('./../img/welcome.png')}/>}
                  height= {120}
                  overlay>
                </Card.Media>

                  <Card.Body>
                  <View style={styles.column}>
                    <View style={styles.row}>
                      <Text style={{fontSize:16, flex:0.7, fontWeight: '500'}}>Justin (ETA 4:46 PM)</Text>
                      <Icon
          							name="star"
          							color="paperGrey900"
          							style={styles.icon}
          							size={15}
          							/>
                        <Icon
                          name="star"
                          color="paperGrey900"
                          style={styles.icon}
                          size={15}
                          />
                          <Icon
                            name="star"
                            color="paperGrey900"
                            style={styles.icon}
                            size={15}
                            />
                            <Icon
                              name="star"
                              color="paperGrey900"
                              style={styles.icon}
                              size={15}
                              />
                        </View>
                  </View>
                </Card.Body>
                <Card.Actions position="right">
                  <Button value="CONTACT" primary={theme}/>
                </Card.Actions>
            </Card>
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
		marginVertical: 5,
		marginHorizontal: 1,
		textAlign: 'right',
    flex: 0.1
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
		paddingHorizontal: 8,
    paddingVertical: 0,
	}
};
