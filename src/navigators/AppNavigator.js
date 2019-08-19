import { createStackNavigator, createAppContainer } from "react-navigation";

// screens
import MainScreen from "../screens/MainScreen";
import HomeScreen from "../screens/HomeScreen";
// import PincodeScreen from "../screens/PincodeScreen";
// import CreateWalletScreen from "../screens/CreateWalletScreen";

const App = createStackNavigator({
  Main: { screen: MainScreen },
  Home: { screen: HomeScreen },
  // Intro: { screen: IntroScreen },
  // Pincode: { screen: PincodeScreen }
});

const Container = createAppContainer(App);

export default Container;