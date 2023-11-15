import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {currencyByRupee} from './constants';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';


function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const {inputValue, setInputValue} = useState('');
  const {resultValue, setResultValue} = useState('')
  const {targetCurrency, setTargetCurrency} = useState('')

const buttonPressed = (targetValue: Currency) => {
  if (!inputValue) {
    return(Snackbar.show({
        text: "Enter value to convert",
        backgroundColor: "#efefef",
        textColor: '#FFFFFF',
      }))
  }

  const inputAmount = parseFloat(inputValue)
  if (!isNaN(inputAmount)) {
    const convertedValue = inputAmount * targetValue.value
    const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result)
      setTargetCurrency(targetValue.name);
  }
  else {
    return(Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#f4bec2",
        textColor: "#FFFFFF"
    }))
  }
}

  return (
    <SafeAreaView >
      <StatusBar

      />
      <View>
        <Text></Text>
      </View>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
