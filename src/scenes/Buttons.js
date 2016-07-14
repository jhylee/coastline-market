import React, { Component, PropTypes, View, ScrollView, Text, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback } from 'react-native';
import { Button, Subheader, List, COLOR } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class Buttons extends Component {

    render() {
        const theme = AppStore.getState().theme;

        return (
            <ScrollView>
            <View style={{paddingTop: 10}}></View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', flex: 0.5}}>
                  <Button text="AVAILABLE" primary={theme} raised/>
                </View>
                <View style={{flexDirection: 'column', flex: 0.5}}>
                  <Button text="RESERVED" primary={theme} theme="dark" raised onPress={() => this.changeScene('avatars')}/>
                </View>
              </View>

              <List
                  primaryText={"text"}
              />

                <Subheader text="Light Theme"/>
                <View style={styles.content}>
                    <Button text="NORMAL" primary={theme} />
                    <Button text="NORMAL RAISED" primary={theme} raised/>
                    <Button text="DISABLED" primary={theme} disabled/>
                    <Button text="DISABLED RAISED" primary={theme} disabled raised/>
                </View>
                <Subheader text="Dark Theme"/>
                <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                        padding: 16
                    }}>
                    <Button text="NORMAL FLAT" primary={theme} theme="dark"/>
                    <Button text="DISABLED FLAT" primary={theme} disabled theme="dark"/>
                    <Button text="NORMAL RAISED" primary={theme} theme="dark" raised/>
                    <Button text="DISABLED RAISED" primary={theme} disabled theme="dark" raised/>
                </View>
            </ScrollView>
        );
    }

}

const styles = {
    content: {
        padding: 16
    }
};
