import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {

  constructor(props){
   super(props);
    this.state = {
      fontLoaded:false,
      text:"Real text"
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),

    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded ? (
      <View flex top left style={styles.container}>
        <Text style={{ fontFamily: 'raleway-light', fontSize:50}}>Floating</Text>
        <Text style={{ fontFamily: 'raleway', fontSize:50}}> Gallery </Text> 
         <TextInput textTransform:'uppercase' 
        style={{height: '10%'}}
        onChangeText={(text) => this.setState({text}.toUpperCase())}
        value={this.state.text}
      />
    </View>


      ) : null
    );
  }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop:'10%',
  },
});
