import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

const currencyPerAUD = {
  DOLLAR: 0.7,
  EURO: 0.63,
  POUND: 0.56
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      resultValue: '0.0'
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === '') {
      Alert.alert('Enter some value');
    } else {
      let result = parseFloat(this.state.inputValue) * currencyPerAUD[currency];
      this.setState({ resultValue: result.toFixed(2) });
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenView}>
            <View style={styles.resultcontainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                keyboardType="numeric"
                placeholder="Enter Value"
                value={this.state.inputValue}
                onChangeText={input =>
                  this.setState({
                    inputValue: input
                  })
                }
              />
            </View>

            <View style={styles.converterButtonContainer}>
              <TouchableOpacity
                onPress={() => this.buttonPressed('DOLLAR')}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed('EURO')}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>EURO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed('POUND')}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>POUND</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535C68',
    resizeMode: 'cover'
  },
  screenView: {
    flex: 1,
    //alignItems: 'center',
    marginTop: 100
  },
  resultcontainer: {
    height: 70,
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    borderColor: '#c1c1c1',
    backgroundColor: '#0A79DE',
    alignItems: 'center',
    borderWidth: 2
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  inputContainer: {
    height: 70,
    //  width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c1c1c1',
    borderWidth: 2,
    backgroundColor: '#0A79DE'
  },
  input: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center'
  },
  converterButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 200,
    borderColor: '#c1c1c1',
    borderWidth: 2
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A79DF',
    height: 100,
    borderColor: '#c1c1c1',
    borderWidth: 2,
    width: '33.3%'
  },
  converterButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
