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
  shadowColor: "grey",
  shadowOpacity: 0.6,
  shadowRadius: 2,
  shadowOffset: {
  height: 1,
  width: 4,},
  elevation:5,
},
textinputshadow:{
  paddingLeft:10,
  borderRadius:30, 
  height:40,
  backgroundColor:'#f2f2f2', 
  marginBottom:20,
  shadowColor: "grey",
  shadowOpacity: 0.6,
  shadowRadius: 1,
  shadowOffset: {
  height: 1,
  width: 3,},
  elevation:5,

},
cardconsulta:{
  height:395, 
  marginTop:50,
  backgroundColor:'#FFDD80',
  borderRadius:20,
  shadowColor: "grey",
  shadowOpacity: 0.6,
  shadowRadius: 1,
  shadowOffset: {
  height: 1,
  width: 2,},
  elevation:5,
  paddingHorizontal:20
}
  });

export default styles
