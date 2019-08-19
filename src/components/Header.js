import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      networks: [{
        color: 'Banana',
        name: '이더리움 메인넷',
      }, {
        color: '#FF4A8D',
        name: 'Ropsten 테스트넷',
      }, {
        color: 'Banana',
        name: 'Kovan 테스트넷',
      }, {
        color: 'Banana',
        name: 'Rinkeby 테스트넷',
      }, {
        color: 'Banana',
        name: 'Goerli Text network',
      }]
    }
  }

  render() {
    return (
      <View>
        <View style={headerStyle.headers}>
          <Image style={headerStyle.logo} source={require('../../assets/logo.png')} ></Image>
          <View style={headerStyle.network}>
            <Text style={{ width: 15, height: 15, borderWidth: 2, borderRadius: 25, marginLeft: 10, borderColor: this.state.networks[1].color, backgroundColor: this.state.networks[1].color }}></Text>
            <Text style={headerStyle.text}>{this.state.networks[1].name} </Text>
            <Text style={headerStyle.arrow}></Text>
          </View>
        </View>
      </View>
    )
  }
}

const headerStyle = StyleSheet.create({
  headers: {
    backgroundColor: '#f2f3f4',
    width: "100%",
    height: 72,
    flexDirection: "row",
    padding: 13,
    justifyContent: 'space-between',
  },
  logo: {
    alignItems: "flex-start",
    width: 46,
    height: 46
  }, 
  network: {
    borderRadius: 25,
    alignItems: "flex-end",
    width: 150,
    height: 46,
    borderColor: '#bbc0c5',
    borderWidth: 2,
    flex: 0.7,
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: 'center',
  },

  point: {
  },
  text: {
    marginLeft: 10
  },
  arrow: {
    marginLeft: 10
  },
});

export default Header