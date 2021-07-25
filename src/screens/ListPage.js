import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  ImageBackground,
} from 'react-native';

import {connect} from 'react-redux';
import {showList} from '../store/actions/ListAction';

class ListPage extends Component {
  fetchData = (isPaginated = true) => {
    const {listData, showList} = this.props;

    if (!isPaginated) {
      showList({data: [], pageNo: 1});
      return;
    }
    // console.log('listData', listData);

    const data = (listData && listData.data) || [];
    const currentPage = (listData && listData.page) || 0;
    const pageNo = currentPage + 1;

    if (pageNo <= listData.total_pages) showList({data, pageNo});
  };
  render() {
    const {listData} = this.props;

    return (
      <View style={[styles.main]}>
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.image}>
          <View style={[styles.container]}>
            <Button
              title="Show Users List"
              onPress={() => this.fetchData(false)}
            />
          </View>
          <FlatList
            data={(listData && listData.data) || []}
            renderItem={renderItem}
            onEndReachedThreshold={0.5}
            onEndReached={({distanceFromEnd}) => {
              if (distanceFromEnd >= 0) this.fetchData();
            }}
            refreshing={false}
            onRefresh={() => this.fetchData(false)}
          />
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    listData: state.ListReducer.listData,
  };
};
export default connect(mapStateToProps, {showList})(ListPage);

const renderItem = item => {
  const {avatar, email, first_name, id, last_name} = item.item;
  return (
    <View style={[styles.item]}>
      <Image style={[styles.avatar]} source={{uri: avatar}} />
      <View style={[styles.itemBox]}>
        <Text>Id: {id}</Text>
        <Text>
          Name : {first_name} {last_name}
        </Text>
        <Text>Email id : {email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    width: '95%',
    padding: 30,
  },
  item: {
    margin: 10,
    borderWidth: 1,
    width: '95%',
    height: 100,
    padding: 30,
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  itemBox: {
    marginLeft: 20,
  },
});
