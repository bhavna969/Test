import React, {Component} from 'react';
import {connect} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import MainPage from '../screens/MainPage';
import Home from '../components/Navigation/HomeNavigation';

import Loader from '../components/loader';
import {setUserData} from '../store/actions/LogInAction';
import {setRegistrationData} from '../store/actions/RegistrationAction';

class Auth extends Component {
  // state = {
  //   loading: true,
  // };

  componentDidMount() {
    AsyncStorage.getItem('userData')
      .then(data => {
        this.setState({loading: false});
        if (data) {
          this.props.setUserData(JSON.parse(data));
        }
      })
      .catch(() => {
        this.setState({loading: false});
      });

    AsyncStorage.getItem('registrationData')
      .then(data => {
        this.setState({loading: false});
        if (data) {
          this.props.setRegistrationData(JSON.parse(data));
        }
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render() {
    const {LoginUser, RegistrationUser, loading} = this.props;

    if (loading) return <Loader />;

    if (LoginUser && RegistrationUser) return <Home />;
    return <MainPage />;
  }
}

const mapStateToProps = state => {
  return {
    LoginUser: state.LoginReducer.user,
    RegistrationUser: state.RegistrationReducer.user,
    loading: state.LoginReducer.loading,
  };
};

export default connect(mapStateToProps, {setUserData, setRegistrationData})(
  Auth,
);
