import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Button} from 'react-native';

import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showList} from '../store/actions/ListAction';

class ListPage extends Component {
  state = {
    loading: false,
  };
  // componentDidMount() {
  //     AsyncStorage.getItem('ListData')
  //     .then((data)=> {
  //         this.setState({loading: false});
  //         if(data) {
  //             this.props.setUserData(JSON.parse(data));
  //         }
  //     })
  //     .catch(()=>{
  //         this.setState({loading: false})
  //     });
  // }
  render() {
    return (
      <View style={[styles.main]}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.image}
        />
        <View style={[styles.container]}>
          <Button
            title="Show Users List"
            onPress={() => this.props.showList()}
          />
          {/* <FlatList>
                        <Text style = {[styles.text]}>Users</Text>
                    </FlatList> */}
        </View>
      </View>
    );
  }
}

export default connect(null, {showList})(ListPage);

const styles = StyleSheet.create({
  main: {
    // borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backfaceVisibility: 'visible',
    position: 'absolute',
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 10,
    // borderWidth: 1,
    width: '95%',
    padding: 30,
  },
  text: {
    fontSize: 18,
    //borderWidth: 2,
    // borderRadius: 50,
    width: 200,
    height: 50,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
