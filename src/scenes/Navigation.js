import React, { Component, PropTypes, View, Text, Image } from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name);
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
                    title="Coastline Orders"
                    items={[{
                        icon: 'local-offer',
                        value: 'Available Orders',
                        active: !route || route === 'welcome',
                        label: '12',
                        onPress: () => this.changeScene('welcome'),
                        onLongPress: () => this.changeScene('welcome')
                    }, {
                        icon: 'assignment-turned-in',
                        value: 'Reserved Orders',
                        active: route === 'buttons',
                        label: '8',
                        onPress: () => this.changeScene('buttons'),
                        onLongPress: () => this.changeScene('buttons')
                    }]}
                />

                <Drawer.Section
                    title="Settings"
                    items={[{
                        icon: 'settings',
                        value: 'Settings',
                        active: route === 'avatars',
                        onPress: () => this.changeScene('avatars'),
                        onLongPress: () => this.changeScene('avatars')
                    },
                    {
                        icon: 'palette',
                        value: 'Application Theme',
                        active: route === 'themes',
                        onPress: () => this.changeScene('themes'),
                        onLongPress: () => this.changeScene('themes')
                    }]}
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
