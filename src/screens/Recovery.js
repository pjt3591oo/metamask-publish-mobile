import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Textarea from 'react-native-textarea';

import Header from "../components/Header"
import account from '../apis/account'

class App extends React.Component {
  // 아래 코드가 없으면 화면 상단에 공백이 생김.
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      mnemonic: '',
      seed: '',
      password1: '',
      password2: ''
    }

    this.navigate = this.props.navigation.navigate

    this.onChangePassword1 = this.onChangePassword1.bind(this)
    this.onChangePassword2 = this.onChangePassword2.bind(this)
    this.onChangeMnemonic = this.onChangeMnemonic.bind(this)
    this.onImport = this.onImport.bind(this)
    this.test = this.test.bind(this)
  }

  componentDidMount() {
    StatusBar.setHidden(true);

    // console.log(account)
    // let a = account.getMnemonic()
    // console.log(a)
    this.setState({
      mnemonic: 'member breeze awkward kick accuse solve print capital pond gasp obey elder',
      password1: '',
      password2: ''
    })
  }

  onChangeMnemonic (mnemonic) {
    this.setState({
      mnemonic: mnemonic
    })
  }

  onChangePassword1 (password) {
    this.setState({
      password1: password
    })
  }

  onChangePassword2 (password) {
    this.setState({
      password2: password
    })
  }

  async onImport () {
    let {mnemonic, password1, password2} = this.state

    if (password1 != password2) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    let {address, privateKey } = await account.recoveryByMnemonic(mnemonic)
    
    console.log(address, privateKey)

    AsyncStorage.setItem('wallet', JSON.stringify([{
      address, 
      privateKey
    }]))

    this.navigate("Home")
  }

  test () {
    console.log('test')
    AsyncStorage.getAllKeys((err, keys) => {
      console.log(err)
      console.log(keys)
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          let key = store[i][0];
          let value = store[i][1];
          console.log(key, value)
        });
      });
    });
    
  }

  render() {
    return (
      <View>
        <Header />

        <View style={styles.container}>
          <Text onPress={this.test} style={{fontSize: 24, fontWeight: 'bold'}}>시드 구문으로 계정 가져오기</Text>
          <Text style={{fontSize: 16, marginTop: 15}}>12개 단어로 구성된 비밀 구문을 입력하여 저장소를 복구하세요</Text>
        </View>

        <View style={styles.container}>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={this.onChangeMnemonic}
            defaultValue={this.state.mnemonic}
            maxLength={120}
            placeholder={'mnemonic 12자리를 입력해주세요'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.p}>

            <Text>
              새 비밀번호(최소 8자 이상)
            </Text>
            <TextInput 
              style={styles.input}
              onChange={this.onChangePassword1}
            />
          </View>

          <View style={styles.p}>
            <Text>
              비민번호 확인
            </Text>
            <TextInput 
              style={styles.input}
              onChange={this.onChangePassword2}
            />
          </View>
        </View>
        {/* <View style={styles.mnemonics}>
          {this.state.mnemonic.map((item, idx) => (
            <Text style={styles.mnemonicItem} key={idx}>{item}</Text>
          ))}
        </View> */}
        <View style={styles.container}>
          <TouchableOpacity onPress={this.onImport}>
            <TextInput style={this.state.password2 ? styles.loginPasswordAfter: styles.loginPasswordBefore} editable={false}>가져오기</TextInput>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    marginTop: 20
  },
  input: {
    opacity: 0.3,
    fontSize: 15,
    color: "white",
    height: 36,
    width: "100%",
    borderBottomColor: '#f7861c',
    borderBottomWidth: 2,
    borderRadius: 5,
  },
  // mnemonics: {
  //   marginTop: 30,
  //   display: "flex",
  //   flexWrap: "wrap",
  //   flexDirection: "row", // display: flex에서 width가 넘어가면 줄내림 설정
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },  
  // mnemonicItem: {
  //   // flex: 1,
  //   // width: Dimensions.get('window').width / 3.5,
  //   width: "30%",
  //   height: 54,
    
  //   backgroundColor: '#ececec',
  //   textAlign: "center",
  //   textAlignVertical: 'center',
  // },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },

  loginPasswordBefore: {
    opacity: 0.3,
    marginTop: 30,
    backgroundColor: '#f7861c',
    width: "100%",
    height: 56,
    fontSize: 18,
    color: "white",
    borderRadius: 5,
    textAlign: "center"
  },

  loginPasswordAfter:{
    opacity: 0.9,
    marginTop: 30,
    backgroundColor: '#f7861c',
    width: "100%",
    height: 56,
    fontSize: 18,
    color: "white",
    borderRadius: 5,
    textAlign: "center"
  },
});

export default App;