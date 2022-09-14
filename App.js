import { StyleSheet, StatusBar, SafeAreaView, Dimensions, FlatList } from 'react-native';
import Top from './src/screens/Info/Top.js'
import Details from './src/screens/Info/Details.js'
import Text from './src/components/Text';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Mocks from './src/mocks/person'
import Item from './src/screens/Info/Item';

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
        <FlatList 
          data={Mocks.itens.list}
          renderItem={Item}
          keyExtractor={({name}) => name}
          ListHeaderComponent={() => {
            return(
              <>
                <Top {...Mocks.topo}/>
                <Details {...Mocks.details}/>
                <Text style={styles.title}>{Mocks.itens.title}</Text>
              </>
            );
          }}
          ListFooterComponent={() => {
            return(
              <>
              <Text style={styles.title}>{Mocks.products.title}</Text>
              <FlatList 
                data={Mocks.products.list}
                renderItem={Item}
                keyExtractor={({name}) => name}
              />
              </>
            );
          }}
          ListFooterComponentStyle={styles.footer}
        />
        <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
      title: {
        color: '#ffa500',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30,
        fontSize: 25,
        textAlign: 'center'
    },
});
