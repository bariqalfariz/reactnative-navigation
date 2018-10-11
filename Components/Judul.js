import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert} from 'react-native';

export default class Judul extends Component{
	redirect()
	{
			Alert.alert = ("This Button is ready")
			
	}

	render(){
		return(
			<View style = {styles.contaioner}>
			<Text style = {warna.b}> Welcome !! </Text>
			<Text style = {salon.cantik} > Nama 	: Bariq Alfariz </Text>
			<Text style = {salon.cantik} > Kelas	: XI RPL 3 </Text>
			<Text style = {salon.cantik} > SMK TELKOM PURWOKERTO</Text>
			   <Text style = {{ marginBottom : 100}}></Text>
			   <Button title = " Next " color = "black" onPress = {() => {this.redirect()}}/>
			</View>


			)
	}
}

const styles = StyleSheet.create({
	container : {
	flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'cyan',
    paddingHorizontal : 60,
	}
});
const warna = {
	b  : {
		color : 'black',
		fontSize : 20,
		fontWeight : 'bold',
		justifyContent : 'center',
		align : 'center',
		marginTop : 50,
		marginBottom : 150,
		marginLeft : 50,
	}
}

const salon = {
	cantik : {
		color : '#000',
		fontSize : 14,
		justifyContent : 'center',
		alignItems : 'center',
	}
}