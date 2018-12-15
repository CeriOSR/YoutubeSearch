import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Searchbar';
import AppHeader from './components/AppHeader';
import VideoList from './components/VideoList';

const API_KEY = 'YOUTUBE API KEY HERE';;;;;;;;;;;;;;

export default class App extends Component {
  state = {
    loading: false, // use to change textField to say loading
    videos: [],
  };

  // life cycle function
  componentWillMount() {
    this.searchYT('Micheal Jordan');
  }

  // takes term parameter
  onPressSearch = term => {
    console.log(term);
    this.searchYT(term);
  };

  searchYT = term => {
    // parameter is term
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      // 2 parameters, returns array called videos
      console.log(videos);
      this.setState({
        loading: false,
        videos, // videos: videos is same as just:   videos
      });
    });
  };

  render() {
    const { loading, videos } = this.state; // refactoring these states out of the return func

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="YouTube Search" />
        <SearchBar
          // loading = {this.state.loading}
          loading={loading}
          onPressSearch={this.onPressSearch}
        />
        <VideoList
          // videos={this.state.videos}
          key={videos.etag}
          videos={videos}
        />
      </View>
    );
  }
}
