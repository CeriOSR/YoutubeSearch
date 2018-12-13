import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import WatchButton from './WatchButton'; 
import PropTypes from 'prop-types';



const VideolistItem = ({ video }) => {
  const {
    cardStyle,
    contentStyle,
    titleStyle,
    channelTitleStyle,
    descriptionStyle,
    imageStyle,
  } = styles;

  const {
    title,
    channelTitle,
    description,
    thumbnails: {
      medium: { url },
    },
  } = video.snippet;
  return (
    <View>
      <Card containerStyle={cardStyle}>
        <Image
          style={imageStyle}
          // source= {{ uri: video.snippet.thumbnails.medium.url }}
          source={{ uri: url }}
        />

        {/* <Text>{video.snippet.title}</Text>
                <Text>{video.snippet.channelTitle}</Text>
                <Text>{video.snippet.description}</Text> */}
        <View style={contentStyle}>
          <Text style={titleStyle}>{title}</Text>

          <Text style={channelTitleStyle}>{channelTitle}</Text>

          <Text style={descriptionStyle}>{description}</Text>

          <WatchButton videoId={video.id.videoId} />
        </View>
      </Card>
    </View>
  );
};

const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    height: 180,
  },
  cardStyle: {
    padding: 5,
  },
  contentStyle: {
    flex: 1,
    padding: 5,
  },
  titleStyle: {
    fontSize: 12,
    marginBottom: 5,
  },
  channelTitleStyle: {
    fontSize: 11,
    color: '#777',
    marginBottom: 5,
    alignSelf: 'flex-end',
  },
  descriptionStyle: {
    fontSize: 11,
    alignSelf: 'center',
  },
};

VideolistItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideolistItem;
