import {Text, View,TextInput, Button} from 'react-native';
import {useState} from 'react'

const InputField = ({navigation})=>{
const [firstname,setFirstname]=useState('')
const [lastname,setLastname]=useState('')
const [designation,setDesignation]=useState('')
const [unit,setUnit]=useState('')
const [Pnumber1,setPnumber1]=useState('')
const [Pnumber2,setPnumber2]=useState('')

function handleSubmit(){
    navigation.navigate("OmdSignature", {firstname,lastname,designation,unit,Pnumber1,Pnumber2})
    setFirstname('')
    setLastname('')
    setDesignation('')
    setUnit('')
    setPnumber1('')
    setPnumber2('')
}
return(
<View style={{ padding:7}}>

<View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-evenly'}}>
<Text style={{fontWeight: 'bold',fontSize: 20, color:'grey'}}>Firstname:</Text>
<TextInput onChangeText={(paul)=> setFirstname(paul)} placeholder ="Paul" value={firstname} style={{borderBottomColor: 'red', borderBottomWidth: 1,padding:6}}/>
</View  >

<View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"space-evenly"}}>
<Text  style={{fontWeight: 'bold',fontSize: 20, color:'grey'}}>Lastname:</Text>
<TextInput placeholder='Doe' onChangeText={(doe)=> setLastname(doe)} value={lastname} style={{borderBottomColor: 'red', borderBottomWidth: 1,padding:6}} />
</View>

<View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"space-evenly"}}>
<Text  style={{fontWeight: 'bold',fontSize: 20, color:'grey'}}>Designation:</Text>
<TextInput placeholder='Deputy Manager' onChangeText={(dm)=> setDesignation(dm)} value={designation} style={{borderBottomColor: 'red', borderBottomWidth: 1, padding:6}}/>
</View>

<View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"space-evenly"}}>
<Text  style={{fontWeight: 'bold',fontSize: 20, color:'grey'}}>Department/Unit:</Text>
<TextInput placeholder='Planning' onChangeText={(planning)=> setUnit(planning)} value={unit} style={{borderBottomColor: 'red', borderBottomWidth: 1,padding:6}}/>
</View>

<View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"space-evenly"}}>
<Text  style={{fontWeight: 'bold',fontSize: 20, color:'grey'}}>CUG number:</Text>
<TextInput maxLength={11} keyboardType = 'numeric' placeholder='09068686868' value={Pnumber1} onChangeText={(num)=> setPnumber1(num)} style={{borderBottomColor: 'red', borderBottomWidth: 1,padding:6}}/>
</View>

<View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"space-evenly"}}>
<Text style={{fontWeight: 'bold',fontSize: 20, color:'grey'}}>Main number:</Text>
<TextInput  keyboardType = 'numeric' maxLength={11} placeholder='08032456789' value={Pnumber2} onChangeText={(num)=> setPnumber2(num)} style={{borderBottomColor: 'red', borderBottomWidth: 1,marginBottom:10,padding:6}}/>
</View>
<Button color='red' title="Submit" onPress={handleSubmit}  />
</View>
)
}
export default InputField