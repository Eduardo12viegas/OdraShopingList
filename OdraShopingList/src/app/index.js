import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          source={request("../assetes/carrinho.png")}
          style={styles.Image}
        />

      </View>
     <View style={styles.content}>
      <Text style={styles.title}>OdraShopingList</Text>
      <Text style={styles.text}>
      Monte sua lista de compras e não esqueça mais o que precisa comprar

      </Text>
      <Link style={styles.button} href={"/home"} >
          <Text> style={styles.buttonText} Acessar</Text>
      </Link>
      <StatusBar style="light" backgroundColor='#000'/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000000',
  },
    ImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
    Image : {
      width: 230,
      height: 230,
      borderRadius: 115,
      resizeMode: 'cover'
    },
    content: {
      flex: 1,
      backgroundColor: "dadada",
      borderTopLeftRadius: 25,
      borderRadius: 25,
      paddingHorizontal: "5%",
    },
    title: {
        fontsize: 30,
        fontweight: 'bold',
        marginTop: 28,
        marginBottom: 20,
        textAlign: 'center'
    },

    text: {
      color: 'gray',
      fontSize: 16,
    },

    button: {
      position: 'absolute',
      backgroundColor: "000",
      borderRadius: 50,
      bottom: "15%",
      paddingVertical: 15,
      width: '60%',
      alingSelf: 'center',
      textAlign: 'center',
    
    },

    buttonText: {
      color: '#fff',
      fontSize: 22,
      fontweight: 'bold'
    },


});

