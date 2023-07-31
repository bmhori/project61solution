import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

export default class HomeScreen extends React.Component{
  nextScreen =() => {
    this.props.navigation.navigate('GoScreen');
  }

  render(){
    return(
      <View style = {styles.container}>
      <Header/>
        <Text style = {styles.displayText}>
        Depurar é a parte mais importante da programação já que todo programa sempre terá bugs. 
        Devemos permanecer calmos e compostos ao depurar; isso ajudará você a depurar melhor. 
        Sempre é uma boa prática imprimir valores ou instruções no console ou comentar as seções de seu código para identificar e corrigir possíveis bugs. 
        Há alguns bugs neste programa... Vamos ver se você consegue identificá-los e corrigi-los para ir para a próxima tela usando o botão “IR”. Tudo de bom para você!!
        </Text>
        <TouchableOpacity   style = {styles.button}
        onPress = {()=>{
          this.nextScreen()
        }}>
        <Text style = {styles.buttonText}>IR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  displayText:{
    color: 'black',
    textAlign: 'center',
    fontSize: '20',
    fontWeight : 'bold'
  },
  button: {
    width:60,
    height: 60,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonText:{
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    alignText: 'center',
    alignSelf: 'center',
    marginTop: 10
  }
})