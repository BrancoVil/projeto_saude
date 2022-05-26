import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({

containerusuario:{
  flex:1,
  paddingHorizontal:20,
  backgroundColor:'white',
},
cardusuario:{
  flexDirection:'row',
  backgroundColor:'#f2f2f2', 
  height:120, 
  width:120, 
  marginTop:40,
  borderRadius:30,
  alignItems:'center',
  justifyContent:'center',
  shadowColor: "black",
  shadowOpacity: 1.0,
  shadowRadius: 2,
  shadowOffset: {
  height: 5,
  width: 3,},
  elevation:5,
},
textinputshadow:{
  paddingLeft:10,
  borderRadius:30, 
  height:40,
  backgroundColor:'#f2f2f2', 
  marginBottom:20,
  shadowColor: "black",
  shadowOpacity: 1.0,
  shadowRadius: 2,
  shadowOffset: {
  height: 5,
  width: 3,},
  elevation:5,

},
cardconsulta:{
  height:395, 
  marginTop:50,
  backgroundColor:'#DAECFF',
  borderRadius:20,
  shadowColor: "black",
  shadowOpacity: 1.0,
  shadowRadius: 2,
  shadowOffset: {
  height: 5,
  width: 3,},
  elevation:5,
  paddingHorizontal:20
}
  });

export default styles
