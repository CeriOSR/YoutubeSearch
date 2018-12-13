import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = (props) => {  //you can remove (props) and replace with ({ headerText })
    return (
        <Header 
          centerComponent={{text: /*'Youtube Search'*/ props.headerText, style: {color: 'white'}}}  //changing the text from static to variable
          outerContainerStyles={{backgroundColor: '#e62117'}}   //youtube kind of red
        />
    );
};

export default AppHeader