import { StyleSheet, View } from "react-native";
import { Link, Stack} from 'expo-router';

export default function NotFoundScreen() {
  return (
  <>
    <Stack.Screen options={{title: 'pagina não encontrada'}}/>
    <View style={ styles.container}>
    
      <Link href="/" style={styles.button}>
      Go Back To Home Screen
      </Link>
    </View>
 </> 
);
}
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#87CEFA'
    },
    text:{
      color:'black'
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color:'#nfff'
    },
  }

);