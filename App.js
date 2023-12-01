import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartaoItem from './src/components/CartaoItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CartaoItem
      nomeItem={"Testador da Mão Morta"}
      descript={"Este item testa os componentes mágicos do React e retorna um status para seu invocador sem que ele precise ativamente buscar"}
      nomeDaImagem={"TestadorMagico.jpg"}
      />
      <CartaoItem
      nomeItem={"Capacete Codificador"}
      descript={"Este item da a capacidade de enxergar os erros diretamente sem que o programador os procure, quase o Jarvis do Homem de ferro. Mas é mágico. (Eu não devo explicações de como funciona, é magia kkkkkkkk)"}
      nomeDaImagem={"CapaceteCodificador.jpg"}
      />
      <CartaoItem
      nomeItem={"Elixir da Resistência Superior"}
      descript={"Este item recupera e aumenta a capacidade fisica e mental do usuário por 3 horas, seguido por um debuff de status 'crash'. Pode ou não conter cafeína... "}
      nomeDaImagem={"ElixirResistencia.jpg"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f35',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
