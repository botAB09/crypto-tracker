import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Root, View, Container, Content, Text } from 'native-base';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
render(){
  return (
    <Root>
      <View style={styles.container}>
        <Container>
          <Content>
            <Text>Open up App.js to start working on your app!</Text>
          </Content>
        </Container>
      </View>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
