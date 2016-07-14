import React, { Component, ScrollView, View, Image } from 'react-native';
import { Avatar, Subheader, COLOR } from 'react-native-material-design';

export default class Avatars extends Component {

    render() {
        return (
            <ScrollView>
                <Subheader text="Settings Page"/>
              
            </ScrollView>
        );
    }
}

const styles = {
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    }
};
