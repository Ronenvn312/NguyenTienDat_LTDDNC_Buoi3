/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {

  return (
    <View testID='layout_container' style={styles.layout_container}>
      <View style={styles.image_head}>
        <Image
          style={styles.tinyLogo}
          source={require('../nguyentiendatlab01/images/circle.png')}
        >
        </Image>
      </View>
      <View style={styles.title_head}>
      <Text style={styles.titleText}> GROW</Text>
        <Text style={styles.titleText}>
          YOUR BUSINESS</Text>
      </View>

      <View style={styles.text_content}>
        <Text style={styles.title_content}>We will help you to grow your business using
          online server</Text>
      </View>
      <View style={styles.container_button}>
        <Button title='LOGIN' style={styles.button_content}></Button>
        <Button title='SIGN UP' style={styles.button_content}></Button>
      </View>
      <View style={styles.text_end}>
        <Text>HOW WE WORK?</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  layout_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#28F7AC',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: 'red'
  },
  highlight: {
    fontWeight: '700',
  },
  tinyLogo: {
    width: 142,
    height: 142,
    position: 'absolute',
    marginRight: 40,
    borderColor: '#000000',
    borderRadius: 15,
  },
  image_head:{
    color: 'black',
    flex: 1,
    alignItems:'center',
    top: 60,
  },
  title_head: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    top: 130,
  },
  titleText: {
    textAlign:'center',
    width: 230,
    fontSize: 30,
    fontWeight: "bold"
  },
  text_content: {
    top: 100,
    flex: 1,
    width: 300,
    alignItems: 'center',
  },
  title_content: {
    textAlign:'center',
    fontWeight: 'bold',
  },
  container_button: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  button_content: {
    padding: 10, 
    width: 200,
    marginLeft: 10,
  },
  text_end: {
    alignItems: 'center',
    flex: 1,
  }
});

export default App;
