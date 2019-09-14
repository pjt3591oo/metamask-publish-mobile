import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  StatusBar, 
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import Header from "../components/Header"

class App extends React.Component {
  
  // 아래 코드가 없으면 화면 상단에 공백이 생김.
  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
    this.state = {
      password: ''
    }

    this.navigate = this.props.navigation.navigate
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onClickLogin = this.onClickLogin.bind(this)
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  onPasswordChange ({nativeEvent}) {
    this.setState({
      password: nativeEvent.text
    }) 
  }

  onClickLogin () {
    if(this.state.password.length> -1) {
      this.navigate("Home")
    } else {
      Alert.alert('Warnning', '비밀번호가 짧습니다')
    }
  }

  render() {
    return (
      <View style={common.container}>
        
        <Header />

        <View style={content.c}>
          <Image style={content.img} source={require('../../assets/logo.png')} ></Image>
          <Text style={content.title}>환영합니다.</Text>
          <Text style={content.titleSub}>우리가 기다리던 탈 중앙화 웹입니다.</Text>
          
          <View style={content.login} >
            <TextInput style={content.input} placeholder="비밀번호" onChange={this.onPasswordChange}/>
            <TouchableOpacity onPress={this.onClickLogin}>
              <TextInput style={this.state.password? content.loginPasswordAfter :content.loginPasswordBefore} type="button"  editable={false} >
                <Text> 로그인 </Text>  
              </TextInput>
            </TouchableOpacity>
          </View>
          
          <View style={content.recovery}>
            <Text style={content.text}>계정을 복구하시겠습니까?</Text>
            <Text style={content.seed} onPress={() => alert('hellp')}>시드 구문으로 계정 복구하기</Text>
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