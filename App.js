import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  StatusBar, 
  Image,
  Option
} from 'react-native';

import Select from 'react-native-select-plus';

import { paddedString } from 'uuid-js';
import { ErrorRecovery } from 'expo';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
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

    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  onPasswordChange ({nativeEvent}) {
    console.log(nativeEvent.text)
    this.setState({
      password: nativeEvent.text
    }) 
  }

  render() {
    
    return (
      <View style={common.container}>
        
        <View style={headerStyle.headers}>
          <Image style={headerStyle.logo} source={require('./assets/logo.png')} ></Image>
          <View style={headerStyle.network}>
            <Text style={{width: 15, height: 15, borderWidth: 2, borderRadius: 25, marginLeft: 10, borderColor: this.state.networks[1].color, backgroundColor: this.state.networks[1].color }}></Text>
            <Text style={headerStyle.text}>{this.state.networks[1].name} </Text>
            <Text style={headerStyle.arrow}></Text>
          </View>
        </View> 

        <View style={content.c}>
          <Image style={content.img} source={require('./assets/logo.png')} ></Image>
          <Text style={content.title}>환영합니다.</Text>
          <Text style={content.titleSub}>우리가 기다리던 탈 중앙화 웹입니다.</Text>
          
          <View style={content.login}>
            <TextInput style={content.input} placeholder="비밀번호" onChange={this.onPasswordChange}/>
            <TextInput style={this.state.password? content.loginPasswordAfter :content.loginPasswordBefore} type="button" editable={false}>
              <Text> 로그인 </Text>  
            </TextInput>
          </View>
          
          <View style={content.recovery}>
            <Text style={content.text}>계정을 복구하시겠습니까?</Text>
            <Text style={content.seed}>시드 구문으로 계정 복구하기</Text>
          </View>
        </View>

      </View>
    );
  }
}

const common = StyleSheet.create({
  container: {
    flex: 1
  }
})

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

const content = StyleSheet.create({
  c: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    padding: 24
  },

  img: {
    width: 120,
    height:120
  },

  title: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "800",
    color: "#4d4d4d"
  },

  titleSub: {
    fontSize: 16,
    fontWeight: "600",
    color: "#aeaeae"
  },

  login: {
    marginTop: 40,
    width: "100%"
  }, 

  input: {
    marginTop: 20,
    height: 36,
    width: "100%",
    borderBottomColor: '#f7861c',
    borderBottomWidth: 2
  },

  loginPasswordBefore: {
    opacity: 0.3,
    marginTop: 30,
    backgroundColor: '#f7861c',
    width: "100%",
    height: 56,
    fontSize: 15,
    color: "white",
    borderRadius: 5,
    textAlign: "center"
  },

  loginPasswordAfter:{
    marginTop: 30,
    backgroundColor: '#f7861c',
    width: "100%",
    height: 56,
    fontSize: 15,
    color: "white",
    borderRadius: 5,
    textAlign: "center"
  },

  recovery: {
    width: "100%",
    textAlign: "left",
    marginTop: 30
  },

  text: {
    color: "#aeaeae",
    fontSize: 16
  },

  seed: {
    color: "#f7861c",
    fontSize: 16,
  }
})

const recovery = StyleSheet.create({
  
})

export default App;