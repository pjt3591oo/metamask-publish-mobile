import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from "../components/Header"

class App extends React.Component {
  // 아래 코드가 없으면 화면 상단에 공백이 생김.
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
    
    this.state = {}
    this._optionMenu = null;

    this.navigate = this.props.navigation.navigate
    this.setMenuRef = this.setMenuRef.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
    this.showMenu = this.showMenu.bind(this)
  }
  

  setMenuRef = ref => {
    this._optionMenu = ref;
  };

  hideMenu = () => {
    this._optionMenu.hide();
  };

  showMenu = () => {
    console.log('test')
    this._optionMenu.show();
  };


  render() {
    return (
      <View style={common.container}>
        
        <Header />

        <View style={menu.container}>
          <View style={menu.menu}>
            <Icon name="bars" size={24} color="#4d4d4d"></Icon>
          </View>
          <View style={menu.account}>
            <Text style={menu.accountName}>Account</Text>
            <Text style={menu.accountAddress}>0x22C3...df6B</Text>
          </View>
          <View style={menu.option}>
            <Menu
              ref={this.setMenuRef}

              button={<Icon name="home" size={24} color="#4d4d4d" onPress={this.showMenu}></Icon> }
              style={menu.dropDownMenu}
            >
              <MenuItem onPress={this.hideMenu}><Text style={menu.dropDownMenuItem}>계정 상세보기</Text></MenuItem>
              <MenuItem onPress={this.hideMenu}><Text style={menu.dropDownMenuItem}>이더스캔에서 보기</Text></MenuItem>
              
              <MenuDivider />
              
            </Menu>
          </View>
        </View>

        <View>
          <Text>q123</Text>
        </View>
      </View>
    )
  }
}

const common = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 68
  }
})

const menu = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 12,
    alignItems: 'center',
    borderBottomColor: '#D6D9DC',
    borderBottomWidth: 1
  },
  menu: {
    alignItems: "flex-start",
    flex: 1
  },

  account: {
    alignItems: "center",
    flex: 1
  },
  accountName: {
    fontSize: 16,
    fontWeight: '500'
  },
  accountAddress: {
    fontSize: 12,
    color: '#989a9b'
  },

  option: {
    alignItems: "flex-end",
    flex: 1
  },
  dropDownMenu: {
    opacity: 0.8,
    backgroundColor: "#000",
    marginTop: 60
  },

  dropDownMenuItem: {
    color: "#fff",
    fontSize: 16,
    padding: 4,
    fontWeight: "600"
  }


})

export default App