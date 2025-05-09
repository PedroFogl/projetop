import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={ styles.container}
    >
      <View style={ styles.center}>

      </View>
      <Text style={styles.text}>Sobre nós✅.</Text>
      {"\n\n"} Futebol⚽️ 
      {"\n\n"} Volei🏐
      {"\n\n"}Handebol🥎
      {"\n\n"} Basquete🏀
      
    </View>
  );
}
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#1B98E0'
    },
    text:{
      color:'black'
    },
    button: {
        fontSize: 70,
        textDecorationLine: 'underline',
        color:'#nfff'
      },
      center:{
        width:300,

      },
  }

);