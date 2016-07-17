import React, { Component, View, Image, Text, TouchableHighlight } from 'react-native';
import { Subheader, Divider, CheckboxGroup, Card, Icon, Button } from 'react-native-material-design';
import AppStore from '../stores/AppStore';

export default class Route extends Component {

    render() {
      const theme = AppStore.getState().theme;
        return (
            <View>

            <View style={{backgroundColor:'#FFF', margin: 15, borderRadius: 2, elevation: 2, padding: 20}}>
                  <View style={styles.column}>
                    <View style={styles.row}>
                      <Text style={{fontSize:16, flex:0.7}}>Payment Not Specified</Text>
                      <Text style={{fontSize:12, marginTop:3, flex:0.3, textAlign: 'right'}}>*** 3921</Text>
                    </View>
                  </View>
                  <Divider/>
                  <Button value="ADD A PAYMENT TYPE" overrides= {{backgroundColor: '#1B5E20', textColor: '#FFF'}} raised={true}/>

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
    paddingVertical: 5,
    marginVertical: 3
	}
};
