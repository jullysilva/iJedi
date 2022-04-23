import { StyleSheet, StatusBar, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Top from './src/screens/Info/Top.js'
import Details from './src/screens/Info/Details.js'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Mocks from './src/mocks/person'
import Itens from './src/screens/Info/Itens';

const width = Dimensions.get('screen').width; //Essa funcionanlidade nos fornece a dimensão extada do dispositivo usado naquele momento

//Altura/Largura * width;

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Top {...Mocks.topo}/>
        <Details {...Mocks.details}/>
        <Itens {...Mocks.itens}/>
        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
