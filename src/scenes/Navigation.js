import React, { Component, PropTypes, View, Text, Image } from 'react-native';
import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';
import Coastline from '../coastline';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        Coastline.addContext(this);

        this.state = {
            route: null,
        }
    }

    changeScene = (path, name, props) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name, props);
        drawer.closeDrawer();
    };

    render() {
        const { route } = this.state;

        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('./../img/nav.jpg')} />}>
                    <View style={styles.header}>
                       <Avatar size={60} image={<Image source={{ uri: 'http://jhylee.com/img/portrait.jpg' }} />} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>joseph@jhylee.com</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    title="Fisher Section"
                    items={[{
                        icon: 'local-offer',
                        value: 'Available Orders',
                        active: !route || route === 'fisherorders',
                        label: ''+ Coastline.fisher.getAvailable().length,
                        onPress: () => this.changeScene('fisher', undefined, {tab: 0}),
                        onLongPress: () => this.changeScene('fisher', undefined, {tab: 0}),
                    }, {
                        icon: 'assignment-turned-in',
                        value: 'Reserved Orders',
                        active: route === 'buttons',
                        label: ''+ Coastline.fisher.getReserved().length,
                        onPress: () => this.changeScene('fisher', undefined, {tab: 1}),
                        onLongPress: () => this.changeScene('fisher', undefined, {tab: 1}),
                    }, {
                      icon: 'palette',
                      value: 'Application Theme',
                      active: route === 'themes',
                      onPress: () => this.changeScene('themes'),
                      onLongPress: () => this.changeScene('themes')
                    }]}
                />


                <Drawer.Section
                    title="Restaurant Section"
                    items={[{
                        icon: 'whatshot',
                        value: 'Make an Order',
                        active: route === 'restaurants',
                        onPress: () => this.changeScene('restaurant', undefined, {tab: 0}),
                        onLongPress: () => this.changeScene('restaurant', undefined, {tab: 0}),
                    },
                    {
                      icon: 'history',
                      value: 'Order History',
                      active: route === 'orderhistory',
                      onPress: () => this.changeScene('restaurant', undefined, {tab: 1}),
                      onLongPress: () => this.changeScene('restaurant', undefined, {tab: 1}),
                    }, {
                      icon: 'payment',
                      value: 'Payment',
                      active: route === 'payment',
                      onPress: () => this.changeScene('restaurant', undefined, {tab: 2}),
                      onLongPress: () => this.changeScene('restaurant', undefined, {tab: 2}),
                    }
                  ]}
                />
                <Drawer.Section
                    title="Logistics Section"
                    items={[{
                        icon: 'airport-shuttle',
                        value: 'Pick Ups',
                        active: route === 'logistics',
                        onPress: () => this.changeScene('logistics'),
                        onLongPress: () => this.changeScene('logistics')
                    }
                  ]}
                />
              </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};
