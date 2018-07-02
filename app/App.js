import React from 'react';
import { StyleSheet, SafeAreaView, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './views/HomeScreen';
import DetailsScreen from './views/DetailsScreen';
import { Provider } from 'mobx-react';
import stores from './stores';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#272C36'
    },
    navigator: {
        backgroundColor: '#272C36'
    }
});


export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <SafeAreaView style={styles.safeArea}>
          <RootStack style={styles.navigator} />
        </SafeAreaView>
      </Provider>
    );
  }
}
