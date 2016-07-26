import React, { Component, PropTypes, Text, View, TextInput, Dimensions } from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import AppStore from '../stores/AppStore';
import Coastline from '../coastline';
import Routes from '../routes';

import { COLOR, PRIMARY_COLORS } from 'react-native-material-design';

export default class Toolbar extends Component {
   static contextTypes = {
      navigator: PropTypes.object
   };

   static propTypes = {
      onIconPress: PropTypes.func.isRequired
   };

   constructor(props) {
      super(props);
      this.state = {
         title: AppStore.getState().routeName,
         theme: AppStore.getState().theme,
         counter: 0,
         showFilter: false,
         filterText: "",
      };
   }

   increment = () => {
      this.state.counter = this.state.counter + 1;
      this.setState(this.state);
   };

   componentDidMount = () => {
      AppStore.listen(this.handleAppStore);
   };

   componentWillUnmount() {
      AppStore.unlisten(this.handleAppStore);
   }

   handleAppStore = (store) => {
      this.state.title = store.routeName;
      this.state.theme = store.theme;
      this.setState(this.state);
   };

   render() {
      const { navigator } = this.context;
      const { theme, counter } = this.state;
      const { onIconPress } = this.props;
      let self = this;
      let swipe = false;

      return (
         <View style={{
             position: 'absolute',
             top: 0,
             left: 0,
             right: 0,
             height: 80,
             flexDirection: 'row',
             alignItems: 'center'
         }}>
            <MaterialToolbar
               title={this.state.showFilter ? false : navigator && navigator.currentRoute ? navigator.currentRoute.title : 'Coastline Market' } //navigator.currentRoute.title
               primary={theme}
               icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
               onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
               actions={[{
                  icon: this.state.showFilter ? 'clear' : 'search',
                  onPress: function() {
                     self.state.showFilter = self.state.showFilter == false;
                     self.state.filterText = "";
                     Coastline.setFilter("");
                     self.setState(self.state);
                  }
               }]}
               rightIconStyle={{
                  margin: 10
               }}
               style={{
                  elevation: 0,
               }}>

               <TextInput
                  style={{
                     width: Dimensions.get('window').width - 100,
                     color: "#fff",
                     borderWidth: 0.5,
                     borderColor: "#fff",
                     height: 36,
                  }}
                  underlineColorAndroid="rgba(255,255,255,0.3)"
                  selectionColor="#fff"
                  autoFocus={true}
                  onChangeText={(text) => {
                     this.state.filterText = text;
                     this.setState(this.state);
                     Coastline.setFilter(text);
                  }}
                  value={this.state.filterText} />
            </MaterialToolbar>
         </View>
      );
   }
}
