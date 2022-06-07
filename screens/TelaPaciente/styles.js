import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({

containerusuario:{
  flex:1,
  backgroundColor:'white',

},
cardusuario:{
  flexDirection:'row',
  backgroundColor:'#f2f2f2', 
  height:100, 
  width:100, 
  marginTop:20,
  marginLeft:5,
  borderRadius:50,
  alignItems:'center',
  justifyContent:'center',
  shadowColor: "grey",
  shadowOpacity: 0.6,
  shadowRadius: 2,
  shadowOffset: {
  height: 1,
  width: 4,
},
  elevation:5,
},
textinputshadow:{
  paddingLeft:13,
  paddingTop:9,
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
  height:320, 
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
  paddingHorizontal:20,
  marginBottom:150,
  justifyContent:'center'
},
bottomtab: {
  bottom: 0,
  width: '100%',
  height: 45,
  backgroundColor:'white',
  borderTopColor:'#f2f2f2',
  borderTopWidth:1,
  flexDirection:'row',
  paddingHorizontal:20,
  alignItems:'center',
  justifyContent:'space-between',
  marginTop:10
}
  });

export default styles
