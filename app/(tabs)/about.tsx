import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={ styles.container}
    >
      <View style={ styles.center}>

      </View>
      <Text style={styles.text}>Sobre o volei✅.</Text>
      <Text>Objetivo do jogo🏐: </Text>
      <Text>O objetivo é fazer a bola tocar o chão da quadra adversária e evitar que ela toque na sua.
Cada jogada vale 1 ponto.</Text>
      <Text>Duração da partida🏐:</Text>
      <Text>A partida é disputada em melhor de 5 sets, cada um vai até 25 pontos.</Text>
      <Text>Toques na bola🏐:</Text>
      <Text>Cada equipe pode dar no máximo 3 toques antes de enviar a bola ao outro lado.</Text>
      
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