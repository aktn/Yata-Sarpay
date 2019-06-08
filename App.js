import React from "react";
import HomeScreen from "./src/components/screens/home/HomeScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchBar from "./src/components/screens/search/SearchBar";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import ArticlesDetail from "./src/components/screens/articles/articlesDetail/ArticlesDetail";
import LogIn from "./src/components/screens/login/Login";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: SearchBar,
      navigationOptions: {
        header: null
      }
    },
    Details: {
      screen: ArticlesDetail,
      navigationOptions: {
        title: "Details",
        headerVisible: true
      }
    },
    LogInScreen: {
      screen: LogIn,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      // header: null
    }
  }
);

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LogIn,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon name={name} size={size} color={tintColor} />
  );
  return icon;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: MainNavigator,
      navigationOptions: {
        tabBarLabel: "Discover",
        tabBarIcon: CustomTabBarIcon("globe", 22)
      }
    },
    Library: {
      screen: MainNavigator,
      navigationOptions: {
        tabBarLabel: "Library",
        tabBarIcon: CustomTabBarIcon("book", 22)
      }
    },
    Account: {
      screen: AuthNavigator,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: CustomTabBarIcon("user", 22)
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#fffbe6"
      },
      activeTintColor: "#FF6F00",
      inactiveTintColor: "#263238"
    }
  }
);

const App = createAppContainer(BottomTabNavigator);

export default App;
