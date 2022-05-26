import { StyleSheet } from 'react-native' 

const styles = StyleSheet.create({
  card: {
    position:'relative',    
    height:70,
    alignSelf:'center',
    marginTop:60,
    backgroundColor:'white',
    borderRadius:10,
    width:'70%',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1},
    elevation:4
  },
  card1:{
    height:250,
    alignSelf:'center',
    marginTop: 40,
    backgroundColor:'white',
    borderRadius:10,
    width:'85%',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1},
    elevation:4,
    marginBottom:20
  },
  signIn: {
    height:60,
    width:'75%',
    alignItems:'center',
    borderRadius:30,
    justifyContent:'center',
  },
  signIn1: {
    height:60,
    width:260,
    alignItems:'center',
    borderRadius:30,
    justifyContent:'center'
  },
  textSign: {
    color:'#4ea3fd',
    fontWeight: 'bold',
    fontSize:20,
    borderBottomWidth:2,
    borderBottomColor:'#4ea3fd',
    alignSelf:'center'
  },
  textSignf: {
    fontSize:17,
    paddingTop:12,
    alignSelf:'center'
  }
  });

export default styles
