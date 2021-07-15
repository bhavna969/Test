import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import store from './src/store';
import Loader from './src/components/loader';
import Auth from './src/screens/Auth';
import Toaster from './src/components/toaster';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
        <Loader />
        <Toaster />
      </Provider>
    );
  }
}
