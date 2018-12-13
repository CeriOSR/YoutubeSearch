import React from 'react';
import { ScrollView, View } from 'react-native';
import VideoListItem from './VideoListItem';
import PropTypes from 'prop-types';

// stateless so were just using cons instead of class
const VideoList = ({ videos }) => {
  // were only using videos from props obj otherwise (props)
  const videoItems = videos.map((
    video, // return each item from the array of videos (for loop)
  ) => <VideoListItem key={videos.etag} video={video} />);

  return (
    <ScrollView>
      <View style={styles.containerStyle}>{videoItems}</View>
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired
};

export default VideoList; // needed to be able to export the component
