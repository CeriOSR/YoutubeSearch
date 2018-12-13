import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
    state = {term: ''};               //term which is empty is the initial state of the textInput

    render() {
    // they all equal the same so they are put in the curly braces
        const {
            containerStyles,
            searchTextStyle, 
            buttonStyle,
        } = styles;

        return (
          <View style={containerStyles}>
            
            <TextInput 
              fontSize={15}
              style={ searchTextStyle }
              onChangeText={term => this.setState({term})} // {term} is same as {term: term} in ES6
              value={this.state.term}
            />
            <Button 
              fontSize={15}
              buttonStyle = {buttonStyle}
              title={this.props.loading ? 'Loading...' : 'Search'}
              // onPress={ () => console.log(this.state.term)} 
              onPress={ () => this.props.onPressSearch(this.state.term)}  //refactored onPress to a function
            />

        </View>
        ) 
    }
}

const styles = {
    containerStyles: {
      flexDirection: 'row',
      marginTop: 50,
      marginLeft: 25,
      marginRight: 25,
      borderBottomColor: '#000000',
      borderBottomWidth: 1
    },
    searchTextStyle: {
      flex: 1,
      marginBottom: 2
    },
    buttonStyle: {
      height: 40,
      marginBottom: 2,
    }
  };

export default SearchBar;