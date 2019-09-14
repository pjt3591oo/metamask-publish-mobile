import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
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

    this.state = {
      wallets: [], // {address, privateKey}
      balance: 0,
      history: [
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x66166f4b7b7738ace17b9145f4ada8c8d49617152ddbd80aafc83f24bac94602',
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x0a772aeefdb740a0beace15e0ddbf9f458e29666afa8b9b820311c2a85324fb8',
        '0x66166f4b7b7738ace17b9145f4ada8c8d49617152ddbd80aafc83f24bac94602',
      ] // {}
    }
    this._optionMenu = null;

    this.navigate = this.props.navigation.navigate
    this.setMenuRef = this.setMenuRef.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
    this.showMenu = this.showMenu.bind(this)
  }


  componentDidMount() {
    AsyncStorage.getItem('wallet', (err, wallets) => {
      wallets = JSON.parse(wallets)

      this.setState({
        wallets: wallets
      })
      console.log(wallets)
      // window.web3.eth.getBalance(`0x${wallets[0].address}`, (err, balance) => {
      window.web3.eth.getBalance(`0x${wallets[0].address}`, (err, balance) => {
        console.log(err)
        console.log(balance)
        this.setState({
          balance: balance || 0
        })
      })
    })
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
            <Text style={menu.accountAddress}>{this.state.wallets.length ? `0x${this.state.wallets[0].address.slice(0, 6)}...` : ''}</Text>
          </View>
          <View style={menu.option}>
            <Menu
              ref={this.setMenuRef}

              button={<Icon name="home" size={24} color="#4d4d4d" onPress={this.showMenu}></Icon>}
              style={menu.dropDownMenu}
            >
              <MenuItem onPress={this.hideMenu}><Text style={menu.dropDownMenuItem}>계정 상세보기</Text></MenuItem>
              <MenuItem onPress={this.hideMenu}><Text style={menu.dropDownMenuItem}>이더스캔에서 보기</Text></MenuItem>

              <MenuDivider />

            </Menu>
          </View>
        </View>


        <View style={styles.container}>
          <Image style={styles.img} source={require('../../assets/eth_logo.png')} ></Image>
          <Text style={styles.balance}>{this.state.balance} ETH</Text>

          <View style={styles.buttonContainer}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity >
                <TextInput style={styles.inputButton} editable={false}>입금</TextInput>
              </TouchableOpacity >
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity >
                <TextInput style={styles.inputButton} editable={false}>전송</TextInput>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={history.title}>히스토리</Text>

        <ScrollView>
          <View style={history.container}>
            {
              this.state.history.map((item, idx) => (
                  <View key={idx} style={{ paddingTop: 12, paddingBottom: 12, paddingLeft: 6, paddingRight: 6, borderBottomColor: 'rgb(214, 217, 220)', borderBottomWidth: 1 }}>
                    <Text>{item}</Text>
                  </View>
              ))
            }
          </View>
        </ScrollView>
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
    color: '#989a9b',
    // whiteSpace: 'nowrap'
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

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    padding: 24,
  },
  buttonContainer: {
    marginTop: 30,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 120,
    height: 120
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  inputButton: {
    width: 120,
    height: 54,
    textAlign: "center",
    borderColor: '#f7861c',
    borderWidth: 2,
    borderRadius: 5,
  }
})

const history = StyleSheet.create({
  container: {
    marginTop: 5,
    width: "100%",
    // display: 'flex'
  },
  title: {
    color: '#848c96',
    borderBottomColor: 'rgb(214, 217, 220)',
    borderBottomWidth: 2,
    paddingLeft: 15,
    paddingBottom: 10,
  }
})

export default App