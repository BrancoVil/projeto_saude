import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({

container:{
  flex:1,
  justifyContent:'center',
  paddingHorizontal:40,
  backgroundColor:'white',
  paddingBottom:170
},
textinput: {
  borderWidth:1,
  height:50,
  borderRadius:30,
  borderColor:'#4ea3fd',
  backgroundColor:'#f2f2f2',
  paddingLeft:40,
  marginTop:70,
  shadowColor: "black",
  shadowOpacity: 1.0,
  shadowRadius: 2,
  shadowOffset: {
  height: 5,
  width: 3,},
  elevation:5,
  width:'100%'
},
button: {
  borderWidth:1,
  borderRadius:30,
  borderColor:'#4ea3fd',
  backgroundColor:'#4ea3fd',
  alignItems:'center',
  justifyContent:'center',
  width:'50%',
  height:50,
  marginTop:110,
  alignSelf:'center',
},
buttontext:{
  fontSize:20,
  fontWeight:'bold',
  color:'white',
},
img: {
  height:237,
  width:661,
  alignSelf:'center',
}
  });

export default styles
