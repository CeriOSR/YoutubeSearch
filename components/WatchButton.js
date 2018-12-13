import React from 'react';
import { Button } from 'react-native-elements';
import { WebBrowser } from 'expo';
import PropTypes from 'prop-types';

const WatchButton = ({ videoId }) => (
  <Button
    raised
    title="Watch on Youtube"
    icon={{ name: 'play-arrow' }}
    containerViewStyle={{ marginTop: 10 }}
    backgroundColor="#E62117"
    onPress={() => {
      WebBrowser.openBrowserAsync(
        // you can also use linking
        `https://m.youtube.com/watch?v=${videoId}`, // E6 way of calling a URI using backtics ``
      );
    }}
  />
);

WatchButton.propTypes = {
    videoId: PropTypes.string.isRequired
};

export default WatchButton;
