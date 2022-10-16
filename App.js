import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import Welcome from './components/welcome';
import Signup from './screens/Signup';
// import { WebView } from 'react-native-webview';

export default function App() {
  const names = ["sunil","Richa","Siddhant"]
  return (

    
    <Signup/>



    // <View style={styles.container}>
    // <StatusBar style='auto'/>
    //   <Text>Welcome to React</Text>
    //   {
    //     names.map((name) => (
    //       <Welcome key={name} name={name}/>
    //     ))
    //   }
    // </View>
    // <WebView source={{ uri: 'https://www.coursera.com/' }} />
  );
}


//top left
//center left
//bottom left
//top right

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  menu:{
    color:'red'
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight:'bold',
//     color:'white'
//   },
// });