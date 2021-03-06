import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({

container:{
  flex:1,
  paddingHorizontal:40,
  backgroundColor:'white',
  paddingBottom:170
},
textinput: {
  borderWidth:1,
  height:50,
  borderRadius:30,
  borderColor:'#ffb246',
  backgroundColor:'#f2f2f2',
  paddingLeft:40,
  marginTop:70,
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowRadius: 2,
  shadowOffset: {
  height: 1,
  width: 5,},
  elevation:5,
  width:'100%',
},
button: {
  borderWidth:1,
  borderRadius:30,
  borderColor:'#ffb246',
  backgroundColor:'#ffb246',
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
  height:267,
  width:661,
  alignSelf:'center',
}
  });

export default styles
