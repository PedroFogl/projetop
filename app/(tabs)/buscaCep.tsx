import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {useBuscaCep} from '@/hooks/useBuscaCep'; // Hook personalizado

export default function BuscaCep() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep(); // Utiliza o hook

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta de CEP</Text>

      <TextInput
        style={styles.textInput}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />

      <Text>{cep}</Text>

      <Button title="Buscar" onPress={buscarCEP} />

      {endereco.logradouro !== '' && (
        <View style={styles.result}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>UF: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B98E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#1B98E0',
    padding: 8,
    marginVertical: 10,
    borderRadius: 6,
  },
  result: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    width: '80%',
    backgroundColor: '#f9f9f9',
  },
  titulo: { fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20 },

});
